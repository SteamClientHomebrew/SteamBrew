export const dynamic = 'force-dynamic';

const CACHE_DURATION_MS = 30 * 60 * 1000;
type Stats = { downloadCount: number; latestVersion: string; stargazersCount: number };
let cachedStats: Stats | null = null;
let cacheTimestamp = 0;
let inflightFetch: Promise<Stats> | null = null;

const githubHeaders = () => {
	if (!process.env.BEARER) {
		throw new Error('GitHub API token (BEARER) is required');
	}

	return {
		Accept: 'application/vnd.github+json',
		'User-Agent': 'Millennium-Download-Count',
		Authorization: process.env.BEARER!,
	};
};

async function getStargazersCount() {
	const res = await fetch('https://api.github.com/repos/SteamClientHomebrew/Millennium', {
		headers: githubHeaders(),
		next: { revalidate: 1800 },
		signal: AbortSignal.timeout(10000),
	});

	if (!res.ok) {
		throw new Error(`GitHub API request failed: ${res.status} ${res.statusText}`);
	}

	const repo = await res.json();
	return repo.stargazers_count as number;
}

async function getDownloadCountAndLatestVersion() {
	const baseUrl = 'https://api.github.com/repos/SteamClientHomebrew/Millennium/releases';
	const perPage = 100;
	let page = 1;
	let totalDownloads = 0;
	let latestRelease: any = null;
	let latestNonPrereleaseVersion: any = null;

	const headers = githubHeaders();

	while (true) {
		const url = `${baseUrl}?per_page=${perPage}&page=${page}`;
		const res = await fetch(url, { headers, next: { revalidate: 1800 }, signal: AbortSignal.timeout(10000) });

		if (!res.ok) {
			throw new Error(`GitHub API request failed: ${res.status} ${res.statusText}`);
		}

		const releases = await res.json();
		if (!releases.length) break;

		if (page === 1) {
			latestRelease = releases[0];
			latestNonPrereleaseVersion = releases.find((release) => !release.prerelease && !release.draft);
		}

		const pageDownloads = releases.reduce((sum, release) => {
			return (
				sum +
				release.assets.reduce((assetSum, asset) => {
					return assetSum + asset.download_count;
				}, 0)
			);
		}, 0);

		totalDownloads += pageDownloads;
		page++;
	}

	const latestVersion = (latestNonPrereleaseVersion ?? latestRelease)?.tag_name;

	if (!latestVersion) {
		throw new Error('No GitHub releases found for SteamClientHomebrew/Millennium');
	}

	// add download count from old cdn as well: https://api.github.com/repos/ShadowMonster99/millennium-steam-binaries/releases
	return {
		downloadCount: totalDownloads + 174452,
		latestVersion,
	};
}

async function fetchStats() {
	if (cachedStats && Date.now() - cacheTimestamp < CACHE_DURATION_MS) {
		return cachedStats;
	}

	if (inflightFetch) {
		return inflightFetch;
	}

	inflightFetch = Promise.all([getDownloadCountAndLatestVersion(), getStargazersCount()])
		.then(([releases, stargazersCount]) => {
			const result = { ...releases, stargazersCount };
			cachedStats = result;
			cacheTimestamp = Date.now();
			return result;
		})
		.catch((error) => {
			if (cachedStats) {
				return cachedStats;
			}
			throw error;
		})
		.finally(() => {
			inflightFetch = null;
		});

	return inflightFetch;
}

export async function GET(request: Request) {
	try {
		const data = await fetchStats();
		return Response.json(data);
	} catch (error) {
		return Response.json({ error: 'Failed to fetch Millennium stats' }, { status: 503 });
	}
}
