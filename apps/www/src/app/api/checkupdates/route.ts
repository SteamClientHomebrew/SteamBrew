import { NextResponse } from 'next/server';
import { FetchPlugins } from '../v1/plugins/GetPlugins';
import { FetchThemes } from '../v2/FetchThemes';
import { Database, firebaseAdmin } from '../Firebase';

export const revalidate = 60;
const CACHE_DURATION_MS = 5 * 60 * 1000;

interface CachedRepositoryData {
	[key: string]: any;
}

interface UpdateCacheEntry {
	owner: string;
	repo: string;
	data: CachedRepositoryData;
	timestamp: FirebaseFirestore.Timestamp;
	expiresAt: FirebaseFirestore.Timestamp;
}

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

interface PluginUpdateStatus {
	id: string;
	commit: string;
	hasUpdate: boolean;
	commitMessage?: string;
	pluginInfo: any;
}

interface ThemeUpdateRequest {
	owner: string;
	repo: string;
}

async function CheckForThemeUpdates(requestBody: ThemeUpdateRequest[]) {
	if (!requestBody || requestBody.length === 0) {
		return [];
	}

	const themes = await FetchThemes();

	return requestBody
		.map((item) => {
			const theme = themes.find((t) => t.owner === item.owner && t.repo === item.repo);
			if (!theme) return null;

			return {
				download: theme.downloadUrl,
				name: theme.name,
				commit: theme.latestCommitOid,
				url: theme.commitUrl,
				date: theme.committedDate,
				message: theme.commitMessage,
			};
		})
		.filter((item) => item !== null);
}

async function CheckForPluginUpdates(plugins: PluginUpdateCheck[]) {
	if (!plugins || plugins.length === 0) {
		return [];
	}

	const fetchResult = await FetchPlugins();
	const allPlugins = fetchResult.pluginData;
	const metadata = fetchResult.metadata;

	const pluginStatuses: PluginUpdateStatus[] = plugins.flatMap((plugin) => {
		const metadataEntry = metadata.find((m) => m.id === plugin.id);
		const pluginInfo = allPlugins.find((p) => p.initCommitId === plugin.id);

		if (!pluginInfo || !pluginInfo.commitId) {
			console.warn(`Plugin ${plugin.id} not found in database — skipping`);
			return [];
		}

		return [{
			id: plugin.id,
			pluginDirectory: plugin.name,
			commit: pluginInfo.commitId,
			hasUpdate: metadataEntry ? metadataEntry.commitId !== plugin.commit : false,
			commitMessage: pluginInfo.commitMessage,
			pluginInfo: pluginInfo,
		}];
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
