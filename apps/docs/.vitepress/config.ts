import { DefaultTheme, defineConfig, UserConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';
import { bundledLanguages, LanguageRegistration } from 'shiki';
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons';
import { VitePressSidebarOptions } from 'vitepress-sidebar/types';
import * as fs from 'fs';
import * as path from 'path';

const steamBrewIcon = localIconLoader(import.meta.url, '../src/public/branding/logo.svg');
const currentYear = new Date().getFullYear();

const SIDEBARS: VitePressSidebarOptions | VitePressSidebarOptions[] = [
	{
		documentRootPath: 'src',
		scanStartPath: 'users',
		basePath: '/users/',
		resolvePath: '/users/',
		useTitleFromFileHeading: true,
		includeRootIndexFile: true,
		capitalizeEachWords: true,
		collapsed: false,
		sortFolderTo: 'bottom',
		sortMenusByFrontmatterOrder: true,
		frontmatterOrderDefaultValue: 1,
		manualSortFileNameByPriority: ['getting-started', 'guides'],
	},
	{
		documentRootPath: 'src',
		scanStartPath: 'developers',
		basePath: '/developers/',
		resolvePath: '/developers/',
		useTitleFromFileHeading: true,
		includeRootIndexFile: true,
		sortFolderTo: 'bottom',
		sortMenusByFrontmatterOrder: true,
		frontmatterOrderDefaultValue: 1,
	},
	{
		documentRootPath: 'src',
		scanStartPath: 'themes',
		basePath: '/themes/',
		resolvePath: '/themes/',
		useTitleFromFileHeading: true,
		includeRootIndexFile: true,
		capitalizeEachWords: true,
		collapsed: false,
		sortFolderTo: 'bottom',
		sortMenusByFrontmatterOrder: true,
		frontmatterOrderDefaultValue: 1,
		manualSortFileNameByPriority: ['introduction', 'basics', 'intermediate', 'advanced'],
	},
];

const srcDir = path.resolve(import.meta.dirname, '../src');

function parseFrontmatter(filePath: string): Record<string, string> | null {
	try {
		const content = fs.readFileSync(filePath, 'utf-8');
		const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
		if (!frontmatterMatch) return null;

		const frontmatter: Record<string, string> = {};
		const lines = frontmatterMatch[1].split('\n');
		for (const line of lines) {
			const colonIndex = line.indexOf(':');
			if (colonIndex !== -1) {
				const key = line.slice(0, colonIndex).trim();
				const value = line.slice(colonIndex + 1).trim();
				frontmatter[key] = value;
			}
		}
		return frontmatter;
	} catch {
		return null;
	}
}

function getComponentFromLink(link: string): string | null {
	if (!link) return null;
	const relativePath = link.replace(/^\//, '').replace(/\/$/, '');
	const mdFilePath = path.join(srcDir, relativePath + '.md');

	const frontmatter = parseFrontmatter(mdFilePath);
	return frontmatter?.component || null;
}

function collectComponentItems(items: DefaultTheme.SidebarItem[], componentGroups: Map<string, DefaultTheme.SidebarItem[]>, prefixesToRemove: string[], basePath: string): DefaultTheme.SidebarItem[] {
	const ungroupedItems: DefaultTheme.SidebarItem[] = [];

	for (let item of items) {
		const text = 'text' in item ? item.text?.toLowerCase() : '';
		const link = 'link' in item ? item.link?.toLowerCase() : '';
		if (text === 'readme' || text?.includes('readme') || link?.includes('readme')) {
			continue;
		}
		if ('link' in item && item.link) {
			item.link = `${basePath}${item.link.replace(/^\//, '')}`;
		}
		if ('text' in item && item.text) {
			for (const prefix of prefixesToRemove) {
				if (item.text.startsWith(prefix)) {
					item.text = item.text.slice(prefix.length);
					break;
				}
			}
			item.text = item.text.replace(/\\/g, '');
		}
		if ('link' in item && item.link) {
			const component = getComponentFromLink(item.link);
			if (component) {
				if (!componentGroups.has(component)) {
					componentGroups.set(component, []);
				}
				componentGroups.get(component)!.push(item);
			} else {
				ungroupedItems.push(item);
			}
		} else if ('items' in item && item.items) {
			item.items = collectComponentItems(item.items, componentGroups, prefixesToRemove, basePath);
			if (item.items.length > 0) {
				ungroupedItems.push(item);
			}
		} else {
			ungroupedItems.push(item);
		}
	}

	return ungroupedItems;
}

function addBasePathToLinks(items: DefaultTheme.SidebarItem[], basePath: string): DefaultTheme.SidebarItem[] {
	const prefixesToRemove = ['Variable: ', 'Type Alias: ', 'Function: ', 'Class: ', 'Interface: ', 'Enumeration: ', 'Namespace: '];
	const componentGroups: Map<string, DefaultTheme.SidebarItem[]> = new Map();

	const ungroupedItems = collectComponentItems(items, componentGroups, prefixesToRemove, basePath);
	const result: DefaultTheme.SidebarItem[] = [];

	for (const [componentName, groupItems] of componentGroups) {
		result.push({
			text: componentName,
			collapsed: true,
			items: groupItems,
		});
	}

	result.push(...ungroupedItems);
	return result;
}

let steambrewClient = addBasePathToLinks(
	generateSidebar({
		documentRootPath: 'src',
		scanStartPath: 'plugins/ts/client/src',
		basePath: '/plugins/ts/client/src/',
		resolvePath: '/plugins/ts/client/src/',
		useTitleFromFileHeading: true,
		includeRootIndexFile: false,
		collapsed: true,
		sortFolderTo: 'bottom',
	}) as any,
	'/plugins/ts/client/src/',
);

let steambrewBrowser = addBasePathToLinks(
	generateSidebar({
		documentRootPath: 'src',
		scanStartPath: 'plugins/ts/browser/src',
		basePath: '/plugins/ts/browser/src/',
		resolvePath: '/plugins/ts/browser/src/',
		useTitleFromFileHeading: true,
		includeRootIndexFile: false,
		collapsed: true,
		sortFolderTo: 'bottom',
	}) as any,
	'/plugins/ts/browser/src/',
);

const VITEPRESS_CONFIG: UserConfig<DefaultTheme.Config> = {
	srcDir: './src',
	title: 'Steam Homebrew',
	description: 'User and developer documentation for using Millennium.',
	head: [
		['link', { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png', sizes: '96x96' }],
		['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' }],
		['link', { rel: 'shortcut icon', href: '/favicon/favicon.ico' }],
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' }],
		['meta', { name: 'apple-mobile-web-app-title', content: 'Steam Homebrew Docs' }],
		['link', { rel: 'manifest', href: '/favicon/site.webmanifest' }],
		['meta', { property: 'og:site_name', content: 'SteamClientHomebrew Docs' }],
		['meta', { property: 'og:title', content: 'SteamClientHomebrew Documentation & Guides' }],
		[
			'meta',
			{
				property: 'og:description',
				content: 'User and developer documentation for Millennium.',
			},
		],
		['meta', { property: 'og:image', content: '/branding/logo_solid.png' }],
		['meta', { property: 'og:image:alt', content: 'SteamClientHomebrew Logo' }],

		['meta', { property: 'twitter:card', content: 'summary' }],
		['meta', { property: 'twitter:site', content: 'SteamClientHomebrew Logo' }],
		[
			'meta',
			{
				property: 'twitter:title',
				content: 'SteamClientHomebrew Documentation & Guides',
			},
		],
		[
			'meta',
			{
				property: 'twitter:description',
				content: 'User and developer documentation for Millennium.',
			},
		],
		['meta', { property: 'twitter:image', content: '/branding/logo_solid.png' }],
		['meta', { property: 'twitter:image:alt', content: 'SteamClientHomebrew Logo' }],

		['meta', { name: 'theme-color', content: '#3a71c1' }],
		[
			'meta',
			{
				name: 'description',
				content: 'User and developer documentation for using Millennium.',
			},
		],
		[
			'meta',
			{
				name: 'keywords',
				content: 'Steam, SteamClientHomebrew, Millennium, Millennium Steam, Better Steam, Steam Mod, Steam Themes, Steam Plugins, Steam Extensions, Steam Client Mod, Steam Hacks, Documentation, Docs, Guide, Tutorial',
			},
		],
		['meta', { name: 'author', content: 'SteamClientHomebrew' }],
	],
	cleanUrls: true,
	themeConfig: {
		siteTitle: false,
		logo: '/branding/logo.svg',
		footer: {
			message: 'Released under the MIT License.',
			copyright: `Copyright © 2023-${currentYear} SteamClientHomebrew`,
		},
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'User Guides', link: '/users/', activeMatch: '/users/' },
			{
				text: 'Developer Guides',
				items: [
					{
						text: 'General',
						link: '/developers/',
						activeMatch: '/developers/',
					},
					{ text: 'Plugins', link: '/plugins/', activeMatch: '/plugins/' },
					{ text: 'Themes', link: '/themes/', activeMatch: '/themes/' },
				],
				activeMatch: '/(?:developers|plugins|themes)/',
			},
		],

		socialLinks: [
			{
				icon: {
					svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="fill: none;" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
				},
				link: 'https://steambrew.app',
			},
			{ icon: 'discord', link: 'https://steambrew.app/discord' },
			{
				icon: 'github',
				link: 'https://github.com/SteamClientHomebrew',
			},
		],

		editLink: {
			pattern: 'https://github.com/SteamClientHomebrew/SteamBrew/edit/main/apps/docs/src/:path',
			text: 'Edit this page on GitHub',
		},

		lastUpdated: {
			text: 'Updated at',
			formatOptions: {
				dateStyle: 'full',
				timeStyle: 'medium',
			},
		},

		search: {
			provider: 'algolia',
			options: {
				appId: '1H90CYBBIE',
				apiKey: '2b499d1195c690a6e7acf4a45b244768',
				indexName: 'docs_steambrew_app_1h90cybbie_pages',
			},
		},

		outline: 'deep',

		sidebar: {
			...generateSidebar(SIDEBARS),
			'/plugins/': [
				{
					items: [{ text: 'Overview', link: '/plugins/' }],
				},
				{
					text: 'Introduction',
					items: [
						{ text: 'Quick Start', link: '/plugins/introduction/quick-start' },
						{ text: 'Environment', link: '/plugins/introduction/environment' },
					],
				},
				{
					text: 'Basic',
					items: [
						{ text: 'File Structure', link: '/plugins/structure/file-structure' },
						{ text: 'Configuring A Plugin', link: '/plugins/structure/config' },
					],
				},
				{
					text: 'Lua API Modules',
					collapsed: false,
					items: [
						{ text: 'millennium', link: '/plugins/lua/millennium' },
						{ text: 'fs', link: '/plugins/lua/fs' },
						{ text: 'datetime', link: '/plugins/lua/datetime' },
						{ text: 'regex', link: '/plugins/lua/regex' },
						{ text: 'cjson', link: '/plugins/lua/cjson' },
						{ text: 'http', link: '/plugins/lua/http' },
						{ text: 'logger', link: '/plugins/lua/logger' },
						{ text: 'utils', link: '/plugins/lua/utils' },
					],
				},
				{
					text: 'Typescript API',
					collapsed: false,
					items: [
						{
							text: '@steambrew/client',
							collapsed: true,
							items: steambrewClient,
						},
						{
							text: '@steambrew/browser',
							collapsed: true,
							items: steambrewBrowser,
						},
					],
				},
			],
		},
	},

	sitemap: {
		hostname: 'https://docs.steambrew.app',
	},

	markdown: {
		codeTransformers: [
			{
				name: 'highlight-bdapi',
				preprocess(code, options) {
					function findAllSubstringIndexes(str: string, substr: string): number[] {
						const indexes: number[] = [];
						let i = -1;
						while ((i = str.indexOf(substr, i + 1)) !== -1) indexes.push(i);
						return indexes;
					}

					const words = ['BdApi'];
					options.decorations ||= [];
					for (const word of words) {
						const indexes = findAllSubstringIndexes(code, word);
						for (const index of indexes) {
							options.decorations.push({
								start: index,
								end: index + word.length,
								properties: {
									class: 'global-bdapi',
								},
							});
						}
					}
				},
			},
		],
		shikiSetup: async (shiki) => {
			const css = await bundledLanguages.css();
			const js = await bundledLanguages.js();

			const bdcss: LanguageRegistration = {
				...css.default[0],
				patterns: [{ include: '#docblock' }, { include: '#jsdoctype' }, { include: '#inline-tags' }, { include: '#comment' }, ...css.default[0].patterns],
				repository: Object.assign(
					{},
					{
						brackets: js.default[0].repository.brackets,
						docblock: js.default[0].repository.docblock,
						comment: js.default[0].repository.comment,
						jsdoctype: js.default[0].repository.jsdoctype,
						'inline-tags': js.default[0].repository['inline-tags'],
					},
					css.default[0].repository,
				),
			};

			await shiki.loadLanguage(bdcss);
		},
		theme: { dark: 'dark-plus', light: 'light-plus' },
		config: (md) => {
			md.use(groupIconMdPlugin);
		},
	},
	vite: {
		plugins: [
			{
				name: 'escape-generic-types',
				enforce: 'pre',
				transform(code: string, id: string) {
					if (id.endsWith('.md')) {
						return code.replace(/<([A-Z][A-Za-z0-9]*?)>/g, '&lt;$1&gt;');
					}
				},
			},
			groupIconVitePlugin({
				customIcon: {
					'.babelrc': 'vscode-icons:file-type-babel',
					js: 'vscode-icons:file-type-js',
					jsx: 'vscode-icons:file-type-js',
					json: 'vscode-icons:file-type-json',
					'.plugin.js': steamBrewIcon,
					'.theme.css': steamBrewIcon,
				},
			}),
		],
	},
};

export default defineConfig(VITEPRESS_CONFIG);
