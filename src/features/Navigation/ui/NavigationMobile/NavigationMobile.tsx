'use client';

import { useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { classNames } from '@shared/lib/classNames';
import { Button, ButtonTheme } from '@shared/ui/Button';
import { NavigationList } from '../NavigationList/NavigationList';
import { appState } from '@entities/app';
import { NavigationListTheme } from '../../model/types/Navigation.types';
import styles from './NavigationMobile.module.scss';

type NavigationMobileProps = {
	className?: string;
};

const NavigationMobile = ({ className }: NavigationMobileProps) => {
	const { isMobileNav, set } = appState();
	const navRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const nav = navRef.current;

		if (!nav) return;

		if (isMobileNav) {
			disableBodyScroll(nav);
		} else {
			enableBodyScroll(nav);
		}

		return () => enableBodyScroll(nav);
	}, [isMobileNav]);

	return (
		<nav
			ref={navRef}
			className={classNames(styles.nav, { [styles.open]: isMobileNav }, [className])}
			onClick={() => set({ isMobileNav: false })}
		>
			<div
				className={styles.nav__inner}
				onClick={(e) => e.stopPropagation()}
			>
				<NavigationList theme={NavigationListTheme.MOBILE} />
				<Button theme={ButtonTheme.OUTLINE} text={'Envía tu solicitud'} className={'m-centred mt-32'} />
			</div>
		</nav>
	);
};

export default NavigationMobile;