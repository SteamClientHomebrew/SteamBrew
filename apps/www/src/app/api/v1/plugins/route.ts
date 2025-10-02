import { FetchPlugins } from './GetPlugins';

export const revalidate = 1800;

export async function GET(request: Request) {
	return Response.json(await FetchPlugins());
}
