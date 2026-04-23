import { FetchPlugins } from './GetPlugins';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
	return Response.json((await FetchPlugins()).pluginData);
}
