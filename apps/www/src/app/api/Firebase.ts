// Initialize Firebase Admin if not already initialized
let firebaseAdmin: typeof import('firebase-admin');
let Database: FirebaseFirestore.Firestore;
let StorageBucket: any;

if (global.firebaseAdmin && global.Database && global.StorageBucket) {
	// Use existing global instances
	firebaseAdmin = global.firebaseAdmin;
	Database = global.Database;
	StorageBucket = global.StorageBucket;
} else {
	// Initialize Firebase Admin for build time
	const admin = require('firebase-admin');

	if (!admin.apps.length) {
		admin.initializeApp({
			credential: admin.credential.cert(require('../../../credentials.json')),
			storageBucket: 'millennium-d9ce0.appspot.com',
		});
	}

	firebaseAdmin = admin;
	Database = admin.firestore();
	StorageBucket = admin.storage().bucket();
}

export { firebaseAdmin, Database, StorageBucket };

export const Firebase = {
	Get: () => {
		return new Promise<FirebaseFirestore.QuerySnapshot>((resolve) => {
			Database.collection('V2')
				.get()
				.then((snap) => {
					resolve(snap);
				});
		});
	},
	GetPluginData: () => {
		return new Promise<FirebaseFirestore.DocumentSnapshot>((resolve, reject) => {
			Database.collection('Plugins')
				.doc('PluginData')
				.get()
				.then((snap) => {
					if (snap.exists) {
						resolve(snap);
					} else {
						reject(new Error('Document not found'));
					}
				})
				.catch((error) => reject(error));
		});
	},
	SetPluginData: (data) => {
		return new Promise((resolve) => {
			Database.collection('Plugins')
				.doc('PluginData')
				.set(data)
				.then(() => {
					resolve(true);
				});
		});
	},
	FromID: (id) => {
		return new Promise<FirebaseFirestore.DocumentSnapshot>((resolve, reject) => {
			Database.collection('V2')
				.doc(id)
				.get()
				.then((snap) => {
					if (!snap.exists) {
						reject("document wasn't found.");
					}
					resolve(snap!);
				});
		});
	},
	FromRepository: (owner, repo) => {
		return new Promise<FirebaseFirestore.QuerySnapshot>(async (resolve, reject) => {
			resolve(await Database.collection('V2').where('github.owner', '==', owner).where('github.repo', '==', repo).get());
		});
	},
};
