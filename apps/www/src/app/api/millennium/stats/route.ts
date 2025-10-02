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
		try {
			const url = `${baseUrl}?per_page=${perPage}&page=${page}`;
			const res = await fetch(url, { headers });

			if (!res.ok) {
				throw new Error(`GitHub API request failed: ${res.status} ${res.statusText}`);
			}

			const releases = await res.json();
			if (!releases.length) break;

			// Find latest non-prerelease version (only check first page since releases are ordered by date)
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

			// Add rate limiting respect (GitHub allows 5000 requests/hour)
			// Small delay to be respectful to the API
			if (page > 2) {
				await new Promise((resolve) => setTimeout(resolve, 100));
			}
		} catch (error) {
			console.error(`Error fetching releases (page ${page}):`, error.message);
			throw error;
		}
	}

	// add download count from old cdn as well: https://api.github.com/repos/ShadowMonster99/millennium-steam-binaries/releases
	return {
		downloadCount: totalDownloads + 174452,
		latestVersion: latestNonPrereleaseVersion.tag_name,
	};
}

async function getDownloadCountAndLatestVersionWithRetry(maxRetries = 3) {
	for (let attempt = 1; attempt <= maxRetries; attempt++) {
		try {
			return await getDownloadCountAndLatestVersion();
		} catch (error) {
			console.warn(`Attempt ${attempt} failed:`, error.message);
			if (attempt === maxRetries) {
				throw new Error(`Failed to get data after ${maxRetries} attempts: ${error.message}`);
			}
			const delay = Math.pow(2, attempt) * 1000;
			await new Promise((resolve) => setTimeout(resolve, delay));
		}
	}
}

export async function GET(request: Request) {
	const data = await getDownloadCountAndLatestVersionWithRetry();
	return Response.json(data);
}
