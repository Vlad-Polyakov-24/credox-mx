import type { ReactNode } from 'react';
import { Header, HeaderTheme } from '@widgets/Header';

const ContactLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
	<>
		<Header theme={HeaderTheme.WITHOUT_NAV} />
		<main className={'main'}>{children}</main>
	</>
);

export default ContactLayout;
