import { FetchPlugins } from './GetPlugins';

export async function GET(request: Request) {
	return Response.json(await FetchPlugins());
}
