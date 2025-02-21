import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';
import '@globals/styles/index.scss';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'credox.MX',
	description: 'credox.MX is nice and good service',
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
	<html lang="en">
	<body className={`${inter.variable}`}>
	<Header />
	<main className={'main'}>
		{children}
	</main>
	<Footer />
	</body>
	</html>
);

export default RootLayout;
