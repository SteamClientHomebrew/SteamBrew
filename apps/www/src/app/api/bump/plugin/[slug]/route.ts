import { FieldValue } from 'firebase-admin/firestore';

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	if (!slug) {
		return new Response(JSON.stringify({ success: false, message: 'Missing plugin slug' }), { status: 400 });
	}

	try {
		const docRef = Database.collection('downloads').doc(slug);

		await docRef.set({ downloadCount: FieldValue.increment(1) }, { merge: true });

		const updatedDoc = await docRef.get();
		const newCount = updatedDoc.exists ? updatedDoc.data()?.downloadCount : 1;

		return new Response(
			JSON.stringify({
				success: true,
				message: 'Download count updated successfully.',
				downloadCount: newCount,
			}),
			{ status: 200 },
		);
	} catch (err) {
		console.error('Error updating download count:', err);
		return new Response(
			JSON.stringify({
				success: false,
				message: 'An error occurred updating the download count.',
			}),
			{ status: 500 },
		);
	}
}
