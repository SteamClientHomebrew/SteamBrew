// Cache duration: 45 minutes (in milliseconds)
const CACHE_DURATION_MS = 45 * 60 * 1000;

const simpleHash = (str: string): string => {
	let hash = 5381;
	for (let i = 0; i < str.length; i++) {
		hash = (hash << 5) + hash + str.charCodeAt(i);
	}

	return Math.abs(hash).toString(16).padStart(8, '0');
};

const createCacheKey = (query: string): string => {
	const normalizedQuery = query.replace(/\s+/g, ' ').trim();
	const hash = simpleHash(normalizedQuery);

	const queryTypePrefix = normalizedQuery.includes('repository(owner:') ? 'single_' : normalizedQuery.includes('_0: repository') ? 'batch_' : 'other_';
	const cacheKey = `${queryTypePrefix}${hash}`;

	console.log('=== CACHE KEY DEBUG ===');
	console.log('Query preview:', normalizedQuery.substring(0, 100) + '...');
	console.log('Generated cache key:', cacheKey);
	console.log('Query type detected:', queryTypePrefix.replace('_', ''));
	console.log('=======================');

	return cacheKey;
};

const getDatabase = () => {
	if (typeof global !== 'undefined' && global.Database) {
		return global.Database;
	}
	return null;
};

const isCacheEntryValid = (timestamp: any): boolean => {
	if (!timestamp || !timestamp.toDate) return false;
	const now = new Date();
	const cacheTime = timestamp.toDate();
	return now.getTime() - cacheTime.getTime() < CACHE_DURATION_MS;
};

const getCachedData = async (cacheKey: string) => {
	try {
		const db = getDatabase();
		if (!db) return null;

		const docRef = db.collection('GraphQLCache').doc(cacheKey);
		const doc = await docRef.get();

		if (!doc.exists) {
			return null;
		}

		const data = doc.data();
		if (data && isCacheEntryValid(data.timestamp)) {
			console.log('Found valid cached GraphQL response');
			return data.response;
		} else if (data) {
			// Remove expired entry
			await docRef.delete();
			console.log('Removed expired cache entry');
		}

		return null;
	} catch (error) {
		console.error('Error retrieving cached data:', error);
		return null;
	}
};

const setCachedData = async (cacheKey: string, response: any, query: string) => {
	try {
		const db = getDatabase();
		if (!db) return;

		const docRef = db.collection('GraphQLCache').doc(cacheKey);
		await docRef.set({
			response: response,
			timestamp: new Date(),
			expiresAt: new Date(Date.now() + CACHE_DURATION_MS),
		});

		console.log(`Cached GraphQL response in Firestore for ${CACHE_DURATION_MS / (1000 * 60)} minutes`);
	} catch (error) {
		console.error('Error caching data:', error);
	}
};

const GithubGraphQL = {
	cleanupExpiredEntries: async (): Promise<void> => {
		try {
			const db = getDatabase();
			if (!db) return;

			const now = new Date();
			const expiredQuery = db.collection('GraphQLCache').where('expiresAt', '<', now);

			const snapshot = await expiredQuery.get();

			if (snapshot.empty) {
				console.log('No expired cache entries found');
				return;
			}

			const batch = db.batch();
			snapshot.docs.forEach((doc) => {
				batch.delete(doc.ref);
			});

			await batch.commit();
			console.log(`Cleaned up ${snapshot.size} expired GraphQL cache entries`);
		} catch (error) {
			console.error('Error cleaning up expired cache:', error);
		}
	},

	clearCache: async (): Promise<void> => {
		try {
			const db = getDatabase();
			if (!db) {
				console.log('Database not available');
				return;
			}

			const batch = db.batch();
			const snapshot = await db.collection('GraphQLCache').get();

			snapshot.docs.forEach((doc) => {
				batch.delete(doc.ref);
			});

			await batch.commit();
			console.log(`Cleared ${snapshot.size} GraphQL cache entries`);
		} catch (error) {
			console.error('Error clearing GraphQL cache:', error);
		}
	},

	getCacheStats: async () => {
		try {
			const db = getDatabase();
			if (!db) {
				return {
					totalEntries: 0,
					validEntries: 0,
					expiredEntries: 0,
					cacheDurationMinutes: CACHE_DURATION_MS / (1000 * 60),
					cacheAvailable: false,
				};
			}

			const snapshot = await db.collection('GraphQLCache').get();
			let validEntries = 0;
			let expiredEntries = 0;

			snapshot.docs.forEach((doc) => {
				const data = doc.data();
				if (isCacheEntryValid(data.timestamp)) {
					validEntries++;
				} else {
					expiredEntries++;
				}
			});

			return {
				totalEntries: snapshot.size,
				validEntries,
				expiredEntries,
				cacheDurationMinutes: CACHE_DURATION_MS / (1000 * 60),
				cacheAvailable: true,
			};
		} catch (error) {
			console.error('Error getting cache stats:', error);
			return {
				totalEntries: 0,
				validEntries: 0,
				expiredEntries: 0,
				cacheDurationMinutes: CACHE_DURATION_MS / (1000 * 60),
				cacheAvailable: false,
				error: error.message,
			};
		}
	},

	Post: async (body: string) => {
		return new Promise<{ data: Record<string, any> }>(async (resolve, reject) => {
			try {
				const cacheKey = createCacheKey(body);

				const cachedResponse = await getCachedData(cacheKey);
				if (cachedResponse) {
					resolve(cachedResponse);
					return;
				}

				const rateLimitFields = `
				rateLimit {
					limit
					cost
					remaining
					resetAt
				}
			`;

				const queryWithRateLimit = body.replace(/}(\s*)$/, `${rateLimitFields}}$1`);

				const response = await fetch('https://api.github.com/graphql', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						...(process.env.BEARER ? { Authorization: process.env.BEARER } : {}),
					},
					body: JSON.stringify({ query: queryWithRateLimit }),
					next: { revalidate: 1800 },
				});

				const json = await response.json();
				console.log('GraphQL Response with Rate Limit:', JSON.stringify(json.data?.rateLimit, null, 2));

				if (json.data && json.data.rateLimit) {
					const { rateLimit, ...dataWithoutRateLimit } = json.data;
					json.data = dataWithoutRateLimit;
				}

				setCachedData(cacheKey, json, body).catch((error) => {
					console.error('Failed to cache response:', error);
				});

				resolve(json);
			} catch (error) {
				console.error('GraphQL request failed:', error);
				reject(error);
			}
		});
	},
};

export { GithubGraphQL };
