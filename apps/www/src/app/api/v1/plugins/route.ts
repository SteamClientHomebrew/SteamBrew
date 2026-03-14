import { FetchPlugins } from './GetPlugins';

export const revalidate = 60;

export async function GET(request: Request) {
	return Response.json((await FetchPlugins()).pluginData);
}
