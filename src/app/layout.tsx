import Head from 'next/head';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from '@globals/providers/ErrorBoundary';
import '@globals/styles/index.scss';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'credox.MX',
	description: 'credox.MX is nice and good service',
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	openGraph: {
		title: 'credox.MX',
		description: 'credox.MX is nice and good service',
		images: [
			{
				url: '/og-image.png',
				alt: 'credox.MX Open Graph Image',
			},
		],
	},
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
	<html lang={'es'}>
	<Head>
		<link rel={'icon'} href={'/favicon.ico'} />
		<link rel={'apple-touch-icon'} href={'/apple-touch-icon.png'} />
		<link rel={'manifest'} href={'/site.webmanifest'} />
		<meta property={'og:title'} content={'credox.MX'} />
		<meta property={'og:description'} content={'credox.MX is nice and good service'} />
		<meta property={'og:image'} content={'/og-image.png'} />
	</Head>
	<body className={`${inter.variable}`}>
	<ErrorBoundary>
		{children}
	</ErrorBoundary>
	<ToastContainer theme={'light'} />
	</body>
	</html>
);

export default RootLayout;
