export const revalidate = 1800;

const CACHE_DURATION_MS = 30 * 60 * 1000;
let cachedStats: { downloadCount: number; latestVersion: string } | null = null;
let cacheTimestamp = 0;
let inflightFetch: Promise<{ downloadCount: number; latestVersion: string }> | null = null;

async function getDownloadCountAndLatestVersion() {
	const baseUrl = 'https://api.github.com/repos/SteamClientHomebrew/Millennium/releases';
	const perPage = 100;
	let page = 1;
	let totalDownloads = 0;
	let latestNonPrereleaseVersion: any = null;

	if (!process.env.BEARER) {
		throw new Error('GitHub API token (BEARER) is required');
	}

	const headers = {
		Accept: 'application/vnd.github+json',
		'User-Agent': 'Millennium-Download-Count',
		Authorization: process.env.BEARER!,
	};

	while (true) {
		const url = `${baseUrl}?per_page=${perPage}&page=${page}`;
		const res = await fetch(url, { headers, next: { revalidate: 1800 } });

		if (!res.ok) {
			throw new Error(`GitHub API request failed: ${res.status} ${res.statusText}`);
		}

		const releases = await res.json();
		if (!releases.length) break;

		if (page === 1 && !latestNonPrereleaseVersion) {
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

	// add download count from old cdn as well: https://api.github.com/repos/ShadowMonster99/millennium-steam-binaries/releases
	return {
		downloadCount: totalDownloads + 174452,
		latestVersion: latestNonPrereleaseVersion.tag_name,
	};
}

async function fetchStats() {
	if (cachedStats && Date.now() - cacheTimestamp < CACHE_DURATION_MS) {
		return cachedStats;
	}

	if (inflightFetch) {
		return inflightFetch;
	}

	inflightFetch = getDownloadCountAndLatestVersion()
		.then((result) => {
			cachedStats = result;
			cacheTimestamp = Date.now();
			return result;
		})
		.finally(() => {
			inflightFetch = null;
		});

	return inflightFetch;
}

export async function GET(request: Request) {
	const data = await fetchStats();
	return Response.json(data);
}
