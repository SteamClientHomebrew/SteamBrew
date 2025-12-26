import dotenv from 'dotenv';
dotenv.config();

import { GraphQLFeatured } from './GraphQLHandler';
import { GithubGraphQL } from './GraphQLInterop';
import { Firebase } from '../Firebase';

export const revalidate = 1800;

function getDate(unixTime: number): string {
	const d = new Date(unixTime * 1000);
	return `${d.toISOString().slice(0, 19)}Z`;
}

interface DocData {
	id: string;
	create_time: string;
	github: {
		owner: string;
		repo: string;
	};
	disabled?: boolean;
	[key: string]: any;
}

interface Repository {
	file?: {
		text?: string;
	};
	defaultBranchRef?: {
		name?: string;
		target?: any;
	};
}

async function parseDocs(snap: any): Promise<any[]> {
	const handler = new GraphQLFeatured();
	const docs: DocData[] = [];

	snap.docs.forEach((doc: any) => {
		try {
			const data = doc.data();
			if (data.disabled ?? false) return;

			handler.add_doc(data.github.owner, data.github.repo);
			docs.push({
				...data,
				id: doc.id,
				create_time: getDate(doc._createTime._seconds),
			});
		} catch (e) {
			console.error(e);
		}
	});

	const result = await GithubGraphQL.Post(handler.get());
	console.log(result);

	const tuples = Object.entries(result.data)
		.map(([key, repository]: [string, Repository]) => ({ key, repository }))
		.filter(({ repository }) => repository.file?.text)
		.map(({ key, repository }) => {
			try {
				const parsed = JSON.parse(repository?.file?.text ?? '{}');
				return { skin_info: parsed, repo: repository, key };
			} catch (e) {
				return null; // failed to parse, will be filtered out
			}
		})
		.filter((data): data is { skin_info: any; repo: Repository; key: string } => data !== null)
		.map((data) => {
			// Extract the original index from the key (e.g., "_0" -> 0, "_13" -> 13)
			const docIndex = parseInt(data.key.slice(1), 10);
			const doc = docs[docIndex];
			return {
				header_image: data.skin_info?.header_image ?? '[NO-IMAGE]',
				splash_image: data.skin_info?.splash_image ?? '[NO-IMAGE]',
				tags: data.skin_info?.tags ?? [],
				download: `https://github.com/${doc?.github.owner}/${doc?.github.repo}/archive/refs/heads/${data?.repo?.defaultBranchRef?.name}.zip`,
				name: data.skin_info?.name ?? doc?.github.repo,
				description: data.skin_info?.description ?? 'No description. Check back later',
				version: data.skin_info?.version ?? 'none',
				commit_data: data.repo.defaultBranchRef?.target,
				data: doc ?? null,
				skin_data: data.skin_info,
			};
		});

	return tuples;
}

async function getFeatured(): Promise<any[]> {
	try {
		return await parseDocs(await Firebase.Get());
	} catch (error) {
		throw error;
	}
}

export async function GET(request: Request) {
	return Response.json(await getFeatured());
}
