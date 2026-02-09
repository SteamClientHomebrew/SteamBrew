import { Firebase } from '../../Firebase';
import { FetchThemes } from '../FetchThemes';

export const revalidate = 1800;

async function GetThemeUpdate(requestBody: any) {
	const themes = await FetchThemes();
	const theme = themes.find((t) => t.owner === requestBody.owner && t.repo === requestBody.repo);

	if (!theme) {
		throw new Error("couldn't find theme");
	}

	const data = await Firebase.FromRepository(requestBody.owner, requestBody.repo);
	if (!data.docs.length) {
		throw new Error("couldn't find doc from collection");
	}

	const doc = data.docs.at(0)!;
	const count = isNaN(doc.data().download) ? 0 : doc.data().download + 1;
	doc.ref.update({ download: count });

	return {
		success: true,
		data: {
			download: `https://github.com/${theme.owner}/${theme.repo}/archive/refs/heads/${theme.defaultBranch}.zip`,
			rest: `https://api.github.com/repos/${theme.owner}/${theme.repo}/commits/${theme.latestCommitOid}`,
			latestHash: theme.latestCommitOid,
			count: count,
		},
	};
}

export async function POST(request: Request) {
	const json = await request.json();

	try {
		return Response.json(await GetThemeUpdate(json), { status: 200 });
	} catch (error) {
		return new Response(error as string, { status: 404 });
	}
}
