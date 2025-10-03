import { Database, StorageBucket, firebaseAdmin } from '../../Firebase';
import { GetPluginData, PluginDataProps, PluginDataTable } from './GetPluginData';
import { GetPluginMetadata } from './GetPluginMetadata';
import { RetrievePluginList } from './GetPluginList';

const FormatBytes = (bytes: number, decimals = 2) => {
	if (bytes === 0) return '0 Bytes';
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
	const i = Math.floor(Math.log(bytes) / Math.log(1024));
	return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${sizes[i]}`;
};

// Cache duration: 30 minutes (in milliseconds)
const CACHE_DURATION_MS = 30 * 60 * 1000;

// Helper function to check if a cache entry is still valid
const isCacheValid = (timestamp: FirebaseFirestore.Timestamp): boolean => {
	const now = new Date();
	const cacheTime = timestamp.toDate();
	return now.getTime() - cacheTime.getTime() < CACHE_DURATION_MS;
};

// Interface for plugin cache entry
interface PluginCacheEntry {
	data: PluginDataTable;
	timestamp: FirebaseFirestore.Timestamp;
	expiresAt: FirebaseFirestore.Timestamp;
}

// Function to get cached plugin data
const getCachedPluginData = async (): Promise<PluginDataTable | null> => {
	try {
		const docRef = Database.collection('PluginCache').doc('allPlugins');
		const doc = await docRef.get();

		if (!doc.exists) {
			return null;
		}

		const data = doc.data() as PluginCacheEntry;
		if (data && isCacheValid(data.timestamp)) {
			console.log('Found valid cached plugin data');
			return data.data;
		} else if (data) {
			// Remove expired entry
			await docRef.delete();
			console.log('Removed expired plugin cache entry');
		}

		return null;
	} catch (error) {
		console.error('Error retrieving cached plugin data:', error);
		return null;
	}
};

// Function to cache plugin data
const setCachedPluginData = async (data: PluginDataTable): Promise<void> => {
	try {
		const docRef = Database.collection('PluginCache').doc('allPlugins');
		const now = new Date();

		const cacheEntry: PluginCacheEntry = {
			data,
			timestamp: firebaseAdmin.firestore.Timestamp.fromDate(now),
			expiresAt: firebaseAdmin.firestore.Timestamp.fromDate(new Date(now.getTime() + CACHE_DURATION_MS)),
		};

		await docRef.set(cacheEntry);
		console.log(`Cached plugin data for ${CACHE_DURATION_MS / (1000 * 60)} minutes`);
	} catch (error) {
		console.error('Error caching plugin data:', error);
	}
};

export const FetchPlugins = async () => {
	return new Promise<PluginDataTable>(async (resolve, reject) => {
		try {
			// Try to get cached data first
			const cachedData = await getCachedPluginData();
			if (cachedData) {
				resolve(cachedData);
				return;
			}

			// Cache miss - fetch fresh data
			console.log('Cache miss - fetching fresh plugin data');

			const pluginList = await RetrievePluginList();

			const [metadata, pluginData] = await Promise.all([GetPluginMetadata(), GetPluginData(pluginList)]);
			const [files, downloadDocs] = await Promise.all([StorageBucket.getFiles({ prefix: 'plugins/' }), Database.collection('downloads').get()]);

			const fileMetadataMap = new Map();
			const downloadCounts = {};

			await Promise.all(
				files[0].map(async (file) => {
					const [metadata] = await file.getMetadata();
					fileMetadataMap.set(file.name, metadata);
				}),
			);

			downloadDocs.forEach((doc) => {
				downloadCounts[doc.id] = doc.data().downloadCount || 0;
			});

			for (const key in pluginData) {
				const data = metadata.find((meta) => meta.commitId === pluginData[key].id);
				if (data) {
					const pluginId = data.id.substring(0, 12);
					const initCommitId = data.id;
					const filePath = `plugins/${initCommitId}.zip`;
					const fileMetadata = fileMetadataMap.get(filePath);

					if (fileMetadata) {
						pluginData[key].downloadSize = FormatBytes(fileMetadata.size);
					}

					pluginData[key].downloadCount = downloadCounts[initCommitId] ?? 0;
					pluginData[key].id = pluginId;
					pluginData[key].commitId = data.commitId;
					pluginData[key].initCommitId = initCommitId;
				}
			}

			const result: PluginDataTable = { pluginData, metadata };

			// Cache the result (fire and forget)
			setCachedPluginData(result).catch((error) => {
				console.error('Failed to cache plugin data:', error);
			});

			resolve(result);
		} catch (error) {
			console.error('An error occurred while processing plugins:', error);
			reject(error);
		}
	});
};
