import { Firebase } from '../../Firebase';
import { GithubGraphQL } from '../GraphQLInterop';
import { FieldValue } from 'firebase-admin/firestore';

export const revalidate = 60;

async function GetThemeUpdate(requestBody: any) {
	const json = await GithubGraphQL.Post(`{
		repository(owner: "${requestBody.owner}", name: "${requestBody.repo}") {
			defaultBranchRef {
				name
				target { oid }
			}
		}
	}`);
	const data = await Firebase.FromRepository(requestBody.owner, requestBody.repo);

	if (!data.docs.length) {
		throw new Error("couldn't find doc from collection");
	}

	const doc = data.docs.at(0)!;

	// update the download count atomically
	await doc.ref.update({ download: FieldValue.increment(1) });

	const updated = await doc.ref.get();
	const count = updated.data()?.download ?? 0;

	return {
		success: true,
		data: {
			download: `https://github.com/${requestBody.owner}/${requestBody.repo}/archive/${json?.data?.repository?.defaultBranchRef?.target?.oid}.zip`,
			rest: `https://api.github.com/repos/${requestBody.owner}/${requestBody.repo}/commits/${json?.data?.repository?.defaultBranchRef?.target?.oid}`,
			latestHash: json?.data?.repository?.defaultBranchRef?.target?.oid ?? null,
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
