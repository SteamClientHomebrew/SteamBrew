import { NextResponse } from 'next/server';
import { FetchPlugins } from '../v1/plugins/GetPlugins';
import { FetchThemes } from '../v2/FetchThemes';

export const revalidate = 1800;

interface PluginUpdateCheck {
	id: string;
	commit: string;
	name: string;
}

interface PluginUpdateStatus {
	id: string;
	commit: string;
	hasUpdate: boolean;
	commitMessage?: string;
	pluginInfo: any;
}

interface ThemeUpdateRequest {
	owner: string;
	repo: string;
}

async function CheckForThemeUpdates(requestBody: ThemeUpdateRequest[]) {
	if (!requestBody || requestBody.length === 0) {
		return [];
	}

	const themes = await FetchThemes();

	return requestBody
		.map((item) => {
			const theme = themes.find((t) => t.owner === item.owner && t.repo === item.repo);
			if (!theme) return null;

			return {
				download: theme.downloadUrl,
				name: theme.name,
				commit: theme.latestCommitOid,
				url: theme.commitUrl,
				date: theme.committedDate,
				message: theme.commitMessage,
			};
		})
		.filter((item) => item !== null);
}

async function CheckForPluginUpdates(plugins: PluginUpdateCheck[]) {
	if (!plugins || plugins.length === 0) {
		return [];
	}

	const fetchResult = await FetchPlugins();
	const allPlugins = fetchResult.pluginData;
	const metadata = fetchResult.metadata;

	const pluginStatuses: PluginUpdateStatus[] = plugins.map((plugin) => {
		const metadataEntry = metadata.find((m) => m.id === plugin.id);
		const pluginInfo = allPlugins.find((p) => p.initCommitId === plugin.id);

		if (!pluginInfo || !pluginInfo.commitId) {
			throw new Error(`Plugin ${plugin.id} not found or missing commit ID`);
		}

		return {
			id: plugin.id,
			pluginDirectory: plugin.name,
			commit: pluginInfo.commitId,
			hasUpdate: metadataEntry ? metadataEntry.commitId !== plugin.commit : false,
			commitMessage: pluginInfo.commitMessage,
			pluginInfo: pluginInfo,
		};
	});

	return pluginStatuses;
}

export async function POST(request: Request) {
	try {
		const json = await request.json();

		const [themeStatuses, pluginStatuses] = await Promise.all([
			CheckForThemeUpdates(json?.themes).catch((error) => {
				console.error('Error checking theme updates:', error);
				return { error: 'Failed to check theme updates: ' + String(error) };
			}),
			CheckForPluginUpdates(json?.plugins).catch((error) => {
				console.error('Error checking plugin updates:', error);
				return { error: 'Failed to check plugin updates: ' + String(error) };
			}),
		]);

		return NextResponse.json({
			themes: themeStatuses,
			plugins: pluginStatuses,
		});
	} catch (error) {
		console.error('Error checking plugin updates:', error);
		return NextResponse.json({ error: 'Failed to check plugin updates' }, { status: 500 });
	}
}
