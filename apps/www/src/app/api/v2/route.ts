import { FetchThemes } from './FetchThemes';

export const revalidate = 1800;

export async function GET(request: Request) {
	const themes = await FetchThemes();

	const result = themes.map((theme) => ({
			header_image: theme.skinJson?.header_image ?? '[NO-IMAGE]',
			splash_image: theme.skinJson?.splash_image ?? '[NO-IMAGE]',
			tags: theme.skinJson?.tags ?? [],
			download: `https://github.com/${theme.owner}/${theme.repo}/archive/refs/heads/${theme.defaultBranch}.zip`,
			name: theme.skinJson?.name ?? theme.repo,
			description: theme.skinJson?.description ?? 'No description. Check back later',
			version: theme.skinJson?.version ?? 'none',
			commit_data: {
				oid: theme.latestCommitOid,
				commitUrl: theme.commitUrl,
				committedDate: theme.committedDate,
			},
			data: theme.firebaseDoc,
			skin_data: theme.skinJson,
		}));

	return Response.json(result);
}
