import { Firebase } from '@/app/api/Firebase';

const WHITELISTED_ORIGINS = ['https://spacetheme.net'];

function getAllowedOrigin(request: Request): string | undefined {
	const origin = request.headers.get('Origin');
	if (origin && WHITELISTED_ORIGINS.includes(origin)) {
		return origin;
	}
	return undefined;
}

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const allowedOrigin = getAllowedOrigin(request);

	const headers: HeadersInit = {
		'Cache-Control': 'public, max-age=86400',
	};
	if (allowedOrigin) {
		headers['Access-Control-Allow-Origin'] = allowedOrigin;
	}

	if (!slug) {
		return new Response("Missing 'id' parameter", { status: 400, headers });
	}

	const cleanId = slug.trim();

	try {
		const snap = await Firebase.FromID(cleanId);

		if (!snap.exists) {
			throw new Error(`Repository with ID '${cleanId}' not found`);
		}

		const mData = snap.data();
		return Response.json({ download_count: mData?.download || 0 }, { headers });
	} catch (error) {
		return new Response(`Error: ${error.message}`, { status: 404, headers });
	}
}
