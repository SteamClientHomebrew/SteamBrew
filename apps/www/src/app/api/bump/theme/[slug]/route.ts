import { FieldValue } from 'firebase-admin/firestore';

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	if (!slug) {
		return new Response(JSON.stringify({ success: false, message: 'Missing theme slug' }), { status: 400 });
	}

	try {
		const docRef = Database.collection('V2').doc(slug);

		await docRef.set({ download: FieldValue.increment(1) }, { merge: true });

		const updatedDoc = await docRef.get();
		const newCount = updatedDoc.exists ? updatedDoc.data()?.download : 1;

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
