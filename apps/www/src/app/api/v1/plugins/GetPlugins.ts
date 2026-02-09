import { Database, StorageBucket } from '../../Firebase';
import { GetPluginData, PluginDataProps, PluginDataTable } from './GetPluginData';
import { GetPluginMetadata } from './GetPluginMetadata';
import { RetrievePluginList } from './GetPluginList';

const FormatBytes = (bytes: number, decimals = 2) => {
	if (bytes === 0) return '0 Bytes';
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
	const i = Math.floor(Math.log(bytes) / Math.log(1024));
	return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${sizes[i]}`;
};

const CACHE_DURATION_MS = 30 * 60 * 1000;

// In-memory cache — single source of truth, no Firestore round-trips
let cachedResult: PluginDataTable | null = null;
let cacheTimestamp = 0;

// In-flight promise — deduplicates concurrent requests so only one fetch runs at a time
let inflightFetch: Promise<PluginDataTable> | null = null;

const fetchFreshPlugins = async (): Promise<PluginDataTable> => {
	console.log('Cache miss — fetching fresh plugin data');

	const pluginList = await RetrievePluginList();

	const [metadata, pluginData] = await Promise.all([GetPluginMetadata(), GetPluginData(pluginList)]);
	const [files, downloadDocs] = await Promise.all([StorageBucket.getFiles({ prefix: 'plugins/' }), Database.collection('downloads').get()]);

	// Build lookup maps once instead of scanning per-plugin
	const fileMetadataMap = new Map<string, any>();
	await Promise.all(
		files[0].map(async (file) => {
			const [meta] = await file.getMetadata();
			fileMetadataMap.set(file.name, meta);
		}),
	);

	const downloadCounts = new Map<string, number>();
	downloadDocs.forEach((doc) => {
		downloadCounts.set(doc.id, doc.data().downloadCount || 0);
	});

	const metadataByCommit = new Map(metadata.map((m) => [m.commitId, m]));

	for (const plugin of pluginData) {
		const meta = metadataByCommit.get(plugin.id);
		if (!meta) {
			console.warn(`Plugin ${plugin.repoOwner}/${plugin.repoName} has no metadata entry (commitId: ${plugin.id})`);
			continue;
		}

		const initCommitId = meta.id;
		const filePath = `plugins/${initCommitId}.zip`;
		const fileMetadata = fileMetadataMap.get(filePath);

		if (fileMetadata) {
			plugin.downloadSize = FormatBytes(fileMetadata.size);
		}

		plugin.downloadCount = downloadCounts.get(initCommitId) ?? 0;
		plugin.id = initCommitId.substring(0, 12);
		plugin.commitId = meta.commitId;
		plugin.initCommitId = initCommitId;
	}

	return { pluginData, metadata };
};

export const FetchPlugins = async (): Promise<PluginDataTable> => {
	// Return cached data if still valid
	if (cachedResult && Date.now() - cacheTimestamp < CACHE_DURATION_MS) {
		console.log('Returning in-memory cached plugin data');
		return cachedResult;
	}

	// If another request is already fetching, wait for it instead of starting a duplicate
	if (inflightFetch) {
		console.log('Waiting on in-flight fetch');
		return inflightFetch;
	}

	inflightFetch = fetchFreshPlugins()
		.then((result) => {
			cachedResult = result;
			cacheTimestamp = Date.now();
			return result;
		})
		.finally(() => {
			inflightFetch = null;
		});

	return inflightFetch;
};
