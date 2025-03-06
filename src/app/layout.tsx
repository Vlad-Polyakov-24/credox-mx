import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
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
	<html lang={'es'}>
	<body className={`${inter.variable}`}>
	{children}
	<ToastContainer theme={'light'} />
	</body>
	</html>
);

export default RootLayout;
