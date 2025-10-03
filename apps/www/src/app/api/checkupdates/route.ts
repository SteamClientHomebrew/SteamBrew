import { NextResponse } from 'next/server';
import { FetchPlugins } from '../v1/plugins/GetPlugins';
import { GraphQLUpdates } from '../v2/GraphQLHandler';
import { Database, firebaseAdmin } from '../Firebase';

export const revalidate = 1800;
const CACHE_DURATION_MS = 30 * 60 * 1000;

const createSafeCacheKey = (owner: string, repo: string): string => {
	const combined = `${owner}__${repo}`;
	const sanitized = combined.replace(/[^a-zA-Z0-9_-]/g, '_');
	const withoutLeadingDot = sanitized.replace(/^\.+/, '_');

	const maxLength = 1500;
	const truncated = withoutLeadingDot.length > maxLength ? withoutLeadingDot.substring(0, maxLength) : withoutLeadingDot;

	const cleaned = truncated || 'unknown_repo';
	return cleaned.replace(/__+/g, '__');
};

const isCacheValid = (timestamp: FirebaseFirestore.Timestamp): boolean => {
	const now = new Date();
	const cacheTime = timestamp.toDate();
	return now.getTime() - cacheTime.getTime() < CACHE_DURATION_MS;
};

const getCachedRepositoryData = async (owner: string, repo: string): Promise<CachedRepositoryData | null> => {
	try {
		const cacheKey = createSafeCacheKey(owner, repo);
		const docRef = Database.collection('UpdateCache').doc(cacheKey);
		const doc = await docRef.get();

		if (!doc.exists) {
			return null;
		}

		const data = doc.data() as UpdateCacheEntry;
		if (data && isCacheValid(data.timestamp)) {
			console.log(`Found valid cached data for ${owner}/${repo} (key: ${cacheKey})`);
			return data.data;
		} else if (data) {
			// Remove expired entry
			await docRef.delete();
			console.log(`Removed expired cache entry for ${owner}/${repo} (key: ${cacheKey})`);
		}

		return null;
	} catch (error) {
		console.error(`Error retrieving cached data for ${owner}/${repo}:`, error);
		return null;
	}
};

const setCachedRepositoryData = async (owner: string, repo: string, data: CachedRepositoryData): Promise<void> => {
	try {
		const cacheKey = createSafeCacheKey(owner, repo);
		const docRef = Database.collection('UpdateCache').doc(cacheKey);
		const now = new Date();

		const cacheEntry: UpdateCacheEntry = {
			owner,
			repo,
			data,
			timestamp: firebaseAdmin.firestore.Timestamp.fromDate(now),
			expiresAt: firebaseAdmin.firestore.Timestamp.fromDate(new Date(now.getTime() + CACHE_DURATION_MS)),
		};

		await docRef.set(cacheEntry);
		console.log(`Cached repository data for ${owner}/${repo} (key: ${cacheKey}) for ${CACHE_DURATION_MS / (1000 * 60)} minutes`);
	} catch (error) {
		console.error(`Error caching data for ${owner}/${repo}:`, error);
	}
};

interface PluginUpdateCheck {
	id: string;
	commit: string;
	name: string;
}

interface PluginMetadata {
	id: string;
	commitId: string;
}

interface PluginUpdateStatus {
	id: string;
	commit: string;
	hasUpdate: boolean;
	commitMessage?: string;
	pluginInfo: any;
}

interface CachedRepositoryData {
	download: string;
	name: string;
	commit: string;
	url: string;
	date: string;
	message: string;
}

interface UpdateCacheEntry {
	owner: string;
	repo: string;
	data: CachedRepositoryData;
	timestamp: FirebaseFirestore.Timestamp;
	expiresAt: FirebaseFirestore.Timestamp;
}

interface ThemeUpdateRequest {
	owner: string;
	repo: string;
}

async function CheckForThemeUpdates(requestBody: ThemeUpdateRequest[]) {
	if (!requestBody || requestBody.length === 0) {
		return [];
	}

	const results: CachedRepositoryData[] = [];
	const itemsToFetch: ThemeUpdateRequest[] = [];
	const cachePromises: Promise<void>[] = [];

	for (const item of requestBody) {
		const cachedData = await getCachedRepositoryData(item.owner, item.repo);

		if (cachedData) {
			results.push(cachedData);
		} else {
			itemsToFetch.push(item);
		}
	}

	if (itemsToFetch.length > 0) {
		const graphQLHandler = new GraphQLUpdates();
		itemsToFetch.forEach((item) => graphQLHandler.add(item.owner, item.repo));

		try {
			// Manual fetch to GitHub GraphQL API to avoid caching conflicts
			const response = await fetch('https://api.github.com/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					...(process.env.BEARER ? { Authorization: process.env.BEARER } : {}),
				},
				body: JSON.stringify({ query: graphQLHandler.get() }),
			});

			const json = await response.json();
			const fetchedData = Object.values(json.data).map((repository: any, i: number) => {
				const item = itemsToFetch[i];
				const repositoryData: CachedRepositoryData = {
					download: `https://codeload.github.com/${item?.owner}/${item?.repo}/zip/refs/heads/${repository?.default_branch?.name}`,
					name: repository?.name ?? null,
					commit: repository?.defaultBranchRef?.target?.oid ?? null,
					url: repository?.defaultBranchRef?.target?.commitUrl ?? null,
					date: repository?.defaultBranchRef?.target?.committedDate ?? null,
					message: repository?.defaultBranchRef?.target?.history?.edges[0]?.node.message ?? null,
				};

				cachePromises.push(setCachedRepositoryData(item.owner, item.repo, repositoryData));

				return repositoryData;
			});

			results.push(...fetchedData);
		} catch (error) {
			console.error('Error fetching missing repositories from GitHub:', error);
			throw error;
		}
	}

	Promise.all(cachePromises).catch((error) => {
		console.error('Error updating cache entries:', error);
	});

	const orderedResults: CachedRepositoryData[] = [];
	for (const item of requestBody) {
		const result = results.find((r) => r.name === item.repo);
		if (result) {
			orderedResults.push(result);
		}
	}

	return orderedResults;
}

async function CheckForPluginUpdates(plugins: PluginUpdateCheck[]) {
	if (!plugins || plugins.length === 0) {
		return [];
	}

	// FetchPlugins() will handle its own caching internally
	const fetchResult = await FetchPlugins();
	const allPlugins = fetchResult.pluginData;
	const metadata = fetchResult.metadata;

	const pluginStatuses: PluginUpdateStatus[] = plugins.map((plugin) => {
		const metadataEntry = metadata.find((m) => m.id === plugin.id);
		const pluginInfo = allPlugins.find((p) => p.initCommitId === plugin.id);

		if (!pluginInfo || !pluginInfo.commitId) {
			throw new Error(`Plugin ${plugin.id} not found or missing commit ID`);
		}

		return {
			id: plugin.id,
			pluginDirectory: plugin.name,
			commit: pluginInfo.commitId,
			hasUpdate: metadataEntry ? metadataEntry.commitId !== plugin.commit : false,
			commitMessage: pluginInfo.commitMessage,
			pluginInfo: pluginInfo,
		};
	});

	return pluginStatuses;
}

export async function POST(request: Request) {
	try {
		const json = await request.json();

		const [themeStatuses, pluginStatuses] = await Promise.all([
			CheckForThemeUpdates(json?.themes).catch((error) => {
				console.error('Error checking theme updates:', error);
				return { error: 'Failed to check theme updates: ' + String(error) };
			}),
			CheckForPluginUpdates(json?.plugins).catch((error) => {
				console.error('Error checking plugin updates:', error);
				return { error: 'Failed to check plugin updates: ' + String(error) };
			}),
		]);

		return NextResponse.json({
			themes: themeStatuses,
			plugins: pluginStatuses,
		});
	} catch (error) {
		console.error('Error checking plugin updates:', error);
		return NextResponse.json({ error: 'Failed to check plugin updates' }, { status: 500 });
	}
}
