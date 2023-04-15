import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{" "}
				<link
					rel="preload"
					href="/discover-coffee-stores/public/fonts/IBMPlexSans-Regular.ttf"
					as="font"
					crossOrigin="anonymos"
				/>
				<link
					rel="preload"
					href="/discover-coffee-stores/public/fonts/IBMPlexSans-Bold.ttf"
					as="font"
					crossOrigin="anonymos"
				/>
				<link
					rel="preload"
					href="/discover-coffee-stores/public/fonts/IBMPlexSans-SemiBold.ttf"
					as="font"
					crossOrigin="anonymos"
				/>{" "}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
