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
				url: '/og-image.jpg',
				alt: 'credox.MX Open Graph Image',
			},
		],
	},
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
	<html lang={'es'}>
	<body className={`${inter.variable}`}>
	<ErrorBoundary>
		{children}
	</ErrorBoundary>
	<ToastContainer theme={'light'} />
	</body>
	</html>
);

export default RootLayout;
