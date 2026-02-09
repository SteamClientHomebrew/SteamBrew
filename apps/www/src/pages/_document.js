import { Html, Head, Main, NextScript } from 'next/document';

export const metadata = {
	icon: '/favicon/favicon.svg',
};

export default function Document() {
	return (
		<Html lang="en" style={{ backgroundColor: '#0f0f0f' }}>
			<Head>
				<link rel="icon" href="/favicon/favicon.svg" type="image/x-icon"></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
