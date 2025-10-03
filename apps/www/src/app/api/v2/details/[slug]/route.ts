import { Firebase } from '../../../Firebase';
import { GithubGraphQL } from '../../GraphQLInterop';
import { GraphQLRepository } from '../../GraphQLHandler';

export const revalidate = 1800;

interface DiscordInfo {
	name?: string;
	icon?: string;
	link?: string;
	inviteCodeExcludingLink?: string;
}

interface RepositoryData {
	listing_style: string | null;
	header_image: string;
	splash_image: string;
	read_me: string | null;
	tags: string[];
	customize: {
		able: boolean;
		length: number;
	};
	patches: {
		specific_windows?: string[];
		patches_default?: boolean;
		length?: number;
	};
	discord?: DiscordInfo;
	download: string;
	name?: string;
	description: string;
	version: string;
	skin_data?: any;
	commit_data?: any;
	data?: any;
}

async function getDiscordInfo(token: string): Promise<DiscordInfo> {
	if (!token || typeof token !== 'string' || token.trim().length === 0) {
		throw new Error('Discord invite token is required and must be a non-empty string');
	}

	const cleanToken = token.trim();
	const apiUrl = `https://discord.com/api/v9/invites/${cleanToken}?with_counts=true&with_expiration=true`;

	try {
		const response = await fetch(apiUrl, { next: { revalidate: 1800 } });

		if (!response.ok) {
			if (response.status === 404) {
				throw new Error(`Discord invite '${cleanToken}' not found or expired`);
			} else if (response.status === 429) {
				throw new Error('Discord API rate limit exceeded. Please try again later');
			} else {
				throw new Error(`Discord API returned ${response.status}: ${response.statusText}`);
			}
		}

		const discord = await response.json();

		if (!discord?.guild) {
			throw new Error('Invalid Discord invite response: missing guild information');
		}

		return {
			name: discord.guild.name || 'Unknown Server',
			icon: discord.guild.icon ? `https://cdn.discordapp.com/icons/${discord.guild.id}/${discord.guild.icon}.webp` : undefined,
			link: `https://discord.gg/${cleanToken}`,
		};
	} catch (error) {
		if (error instanceof Error) {
			// Re-throw our custom errors
			if (error.message.includes('Discord')) {
				throw error;
			}
			// Handle other errors
			throw new Error(`Failed to fetch Discord server info: ${error.message}`);
		}
		throw new Error(`Failed to fetch Discord server info: ${String(error)}`);
	}
}

async function getRepository(owner: string, repo: string, readmePath: string, snap: any): Promise<RepositoryData> {
	if (!owner || !repo) {
		throw new Error('GitHub owner and repository name are required');
	}

	try {
		const handler = new GraphQLRepository();
		const docList = {
			...snap.data(),
			id: snap.id,
			create_time: snap._createTime?._seconds ? snap._createTime._seconds * 1000 : Date.now(),
		};

		const json = await GithubGraphQL.Post(handler.get(owner, repo, readmePath));

		// Check for GraphQL errors
		if ((json as any)?.errors && Array.isArray((json as any).errors)) {
			const errorMessages = (json as any).errors.map((err: any) => err.message || 'Unknown GraphQL error').join('; ');
			console.error(`GitHub GraphQL errors for ${owner}/${repo}:`, (json as any).errors);
			throw new Error(`GitHub API GraphQL errors: ${errorMessages}`);
		}

		if (!json) {
			console.error(`GitHub API returned null/undefined for ${owner}/${repo}`);
			throw new Error('GitHub API returned no response');
		}

		if (!json.data) {
			console.error(`GitHub API response missing data field for ${owner}/${repo}:`, json);
			throw new Error(`GitHub API response missing data field. Response: ${JSON.stringify(json)}`);
		}

		const repositories = Object.values(json.data).filter((repository: any) => {
			if (!repository) {
				console.warn(`Repository entry is null/undefined for ${owner}/${repo}`);
				return false;
			}

			if (repository.name === null) {
				console.warn(`Repository ${owner}/${repo} not found (repository.name is null)`);
				return false;
			}

			if (!repository.file || !repository.file.text) {
				console.warn(`No skin.json file found in repository ${owner}/${repo}`);
				return false;
			}

			return true;
		});

		if (repositories.length === 0) {
			console.error(`No valid repositories found in GraphQL response for ${owner}/${repo}:`, {
				responseKeys: Object.keys(json.data),
				responseValues: Object.values(json.data),
			});

			// Check if repository exists but is missing skin.json
			const firstRepo = Object.values(json.data)[0] as any;
			if (firstRepo && firstRepo.name === null) {
				throw new Error(`Repository ${owner}/${repo} not found on GitHub`);
			} else if (firstRepo && firstRepo.name && !firstRepo.file?.text) {
				throw new Error(`Repository ${owner}/${repo} exists but is missing required skin.json configuration file`);
			} else {
				throw new Error(`No valid theme configuration found in repository ${owner}/${repo}`);
			}
		}

		const tuples = repositories
			.map((repo: any) => {
				let theme;
				try {
					theme = JSON.parse(repo.file.text || '{}');
				} catch (parseError) {
					throw new Error(`Invalid JSON in theme configuration: ${parseError instanceof Error ? parseError.message : String(parseError)}`);
				}

				return {
					listing_style: repo?.listing_style?.text ?? null,
					default_branch: repo?.default_branch?.name,
					readme: repo?.read_me?.text ?? null,
					theme,
					repo,
				};
			})
			.map((data: any) => {
				// Fallback for missing default branch
				let defaultBranch = data.default_branch;
				if (!defaultBranch) {
					console.warn(`Repository ${owner}/${repo} has no default branch, using 'main' as fallback`);
					defaultBranch = 'main';
				}

				// Ensure we have valid theme data
				const theme = data.theme || {};
				if (!data.theme) {
					console.warn(`Repository ${owner}/${repo} has empty theme configuration`);
				}

				// Safe array access with fallbacks
				const tags = Array.isArray(theme.tags) ? theme.tags : [];
				const globalColors = Array.isArray(theme.GlobalsColors) ? theme.GlobalsColors : [];
				const patches = Array.isArray(theme.Patches) ? theme.Patches : [];

				return {
					listing_style: data.listing_style,
					header_image: theme.header_image ?? '[NO-IMAGE]',
					splash_image: theme.splash_image ?? '[NO-IMAGE]',
					read_me: data.readme,
					tags: tags,
					customize: {
						able: globalColors.length > 0,
						length: globalColors.length,
					},
					patches: {
						specific_windows: patches.map((patch: any) => {
							try {
								return patch?.MatchRegexString?.replace(/[!@#$%^&*()+{}\[\]:;<>,.?~\\/-]/g, '') || '';
							} catch (error) {
								console.warn(`Failed to process patch regex for ${owner}/${repo}:`, error);
								return '';
							}
						}),
						patches_default: Boolean(theme.UseDefaultPatches),
						length: patches.length,
					},
					discord: theme.discord_support,
					download: `https://codeload.github.com/${owner}/${repo}/zip/refs/heads/${defaultBranch}`,
					name: theme.name || null,
					description: theme.description || 'No description. Check back later',
					version: theme.version || 'none',
					skin_data: theme,
					commit_data: data.repo?.defaultBranchRef?.target,
					data: docList,
				};
			});

		return tuples[0];
	} catch (error) {
		if (error instanceof Error) {
			// Re-throw our custom errors
			if (error.message.includes('GitHub') || error.message.includes('repository') || error.message.includes('JSON')) {
				throw error;
			}
			// Handle GraphQL/network errors
			throw new Error(`Failed to fetch repository data from GitHub: ${error.message}`);
		}
		throw new Error(`Failed to fetch repository data: ${String(error)}`);
	}
}

async function getDetails(id: string): Promise<RepositoryData> {
	// Input validation
	if (!id || typeof id !== 'string' || id.trim().length === 0) {
		throw new Error('Repository ID is required and must be a non-empty string');
	}

	const cleanId = id.trim();

	try {
		const snap = await Firebase.FromID(cleanId);

		if (!snap.exists) {
			throw new Error(`Repository with ID '${cleanId}' not found`);
		}

		const mData = snap.data();
		if (!mData) {
			throw new Error(`Repository data is empty for ID '${cleanId}'`);
		}

		if (mData.disabled) {
			throw new Error('This repository has been disabled by Millennium');
		}

		// Validate required GitHub information
		if (!mData.github) {
			throw new Error('Repository is missing GitHub configuration');
		}

		const { owner, repo } = mData.github;
		if (!owner || !repo) {
			throw new Error('Repository is missing GitHub owner or repository name');
		}

		const readme = mData.readme ?? 'README.md';

		// Fetch repository data
		const repository = await getRepository(owner, repo, readme, snap);

		// Optional Discord integration
		const inviteToken = repository.discord?.inviteCodeExcludingLink;
		if (inviteToken) {
			try {
				repository.discord = await getDiscordInfo(inviteToken);
			} catch (discordError) {
				// Log Discord errors but don't fail the entire request
				console.warn(`Discord integration failed for repository '${cleanId}':`, discordError instanceof Error ? discordError.message : String(discordError));
				// Keep the original discord config if Discord API fails
			}
		}

		return repository;
	} catch (error) {
		if (error instanceof Error) {
			// Re-throw our custom errors with preserved context
			if (error.message.includes('Repository') || error.message.includes('GitHub') || error.message.includes('disabled') || error.message.includes('missing')) {
				throw error;
			}
			// Handle Firebase/database errors
			throw new Error(`Database error while fetching repository '${cleanId}': ${error.message}`);
		}
		throw new Error(`Failed to fetch repository details for '${cleanId}': ${String(error)}`);
	}
}

function addCorsHeaders(response: Response): void {
	response.headers.set('Access-Control-Allow-Origin', 'https://steamloopback.host');
	response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
}

function getHttpStatusFromError(errorMessage: string): number {
	const lowerMessage = errorMessage.toLowerCase();

	if (lowerMessage.includes('not found') || lowerMessage.includes('repository with id') || (lowerMessage.includes('repository') && lowerMessage.includes('not found on github'))) {
		return 404;
	}
	if (lowerMessage.includes('disabled')) {
		return 403;
	}
	if (lowerMessage.includes('required') || lowerMessage.includes('missing') || lowerMessage.includes('invalid') || lowerMessage.includes('skin.json configuration file')) {
		return 400;
	}
	if (lowerMessage.includes('rate limit')) {
		return 429;
	}
	if (lowerMessage.includes('discord api') || lowerMessage.includes('github api') || lowerMessage.includes('graphql errors')) {
		return 502; // Bad Gateway for external service errors
	}

	return 500; // Internal Server Error for everything else
}

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
	try {
		const { slug } = await params;

		if (!slug || typeof slug !== 'string' || slug.trim().length === 0) {
			const response = Response.json(
				{
					success: false,
					error: 'BAD_REQUEST',
					message: 'Repository slug is required and must be a non-empty string',
				},
				{ status: 400 },
			);
			addCorsHeaders(response);
			return response;
		}

		try {
			const details = await getDetails(slug.trim());
			const response = Response.json(details, { status: 200 });
			addCorsHeaders(response);
			return response;
		} catch (error: any) {
			const errorMessage = error?.message || 'Unknown error occurred';
			const statusCode = getHttpStatusFromError(errorMessage);

			// Log errors for debugging (but not sensitive information)
			console.error(`API Error [${statusCode}] for slug '${slug}':`, {
				message: errorMessage,
				timestamp: new Date().toISOString(),
				userAgent: request.headers.get('user-agent'),
			});

			const response = Response.json(
				{
					success: false,
					error: statusCode === 404 ? 'NOT_FOUND' : statusCode === 403 ? 'FORBIDDEN' : statusCode === 400 ? 'BAD_REQUEST' : statusCode === 429 ? 'RATE_LIMITED' : statusCode === 502 ? 'EXTERNAL_SERVICE_ERROR' : 'INTERNAL_ERROR',
					message: errorMessage,
				},
				{ status: statusCode },
			);

			addCorsHeaders(response);
			return response;
		}
	} catch (error: any) {
		// Handle unexpected errors in parameter parsing or other issues
		const errorMessage = error?.message || 'Internal server error';
		console.error('Unexpected API error:', {
			message: errorMessage,
			timestamp: new Date().toISOString(),
			error: error,
		});

		const response = Response.json(
			{
				success: false,
				error: 'INTERNAL_ERROR',
				message: 'An unexpected error occurred while processing your request',
			},
			{ status: 500 },
		);

		addCorsHeaders(response);
		return response;
	}
}

export async function OPTIONS() {
	return new Response(null, {
		status: 204,
		headers: {
			/** Whitelist the Steam Client to allow it to make requests */
			'Access-Control-Allow-Origin': 'https://steamloopback.host',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
		},
	});
}
