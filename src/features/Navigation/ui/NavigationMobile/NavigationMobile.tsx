'use client';

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
	const { isMobileNav } = appState();

	return (
		<nav className={classNames(styles.nav, { [styles.open]: isMobileNav }, [className])}>
			<NavigationList theme={NavigationListTheme.MOBILE} />
			<Button theme={ButtonTheme.OUTLINE} text={'Envía tu solicitud'} />
		</nav>
	);
};

export default NavigationMobile;