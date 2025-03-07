'use client';

import { useEffect, type ReactNode } from 'react';
import { Header, HeaderTheme } from '@widgets/Header';
import { useLocalStorage } from '@shared/hooks/useLocalStorage';
import { localStorageVars } from '@shared/config/localStorage';
import { endpoints } from '@shared/const/endpoints';

const ContactLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	const { getStorage } = useLocalStorage();

	useEffect(() => {
		const isFormSend = getStorage(localStorageVars.IS_SEND);

		if (isFormSend) {
			window.location.href = endpoints.REDIRECT;
		}
	}, [getStorage]);

	return (
		<>
			<Header theme={HeaderTheme.WITHOUT_NAV} />
			<main className={'main'}>{children}</main>
		</>
	);
};

export default ContactLayout;
