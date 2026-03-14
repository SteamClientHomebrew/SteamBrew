import { Firebase } from '../../Firebase';
import { FieldValue } from 'firebase-admin/firestore';

const IncrementDownload = async (requestBody) => {
	const data = await Firebase.FromRepository(requestBody.owner, requestBody.repo);

	if (!data.docs.length) {
		throw new Error("couldn't find doc from collection");
	}

	const doc = data.docs.at(0)!;
	await doc.ref.update({ download: FieldValue.increment(1) });

	const updated = await doc.ref.get();
	const count = updated.data()?.download ?? 0;

	return {
		success: true,
		data: {
			count: count,
		},
	};
};

export async function POST(request: Request) {
	const json = await request.json();

	try {
		const response = await IncrementDownload(json);

		return Response.json(response, {
			status: 200,
		});
	} catch (error) {
		return new Response(error, {
			status: 404,
		});
	}
}
