import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en" style={{ backgroundColor: '#0f0f0f' }}>
			<Head>
				<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
