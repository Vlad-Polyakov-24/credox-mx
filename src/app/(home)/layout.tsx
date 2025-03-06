import type { ReactNode } from 'react';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';

const HomeLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
	<>
		<Header />
		<main className={'main'}>{children}</main>
		<Footer />
	</>
);

export default HomeLayout;
