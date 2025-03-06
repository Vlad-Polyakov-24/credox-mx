import type { CSSProperties } from 'react';
import Link from 'next/link';
import { classNames } from '@shared/lib/classNames';
import { Routes } from '@shared/config/routes';
import styles from './Logo.module.scss';
import LogoIcon from '@shared/assets/icons/logo.svg';

type LogoProps = {
	className?: string;
};

const Logo = ({ className }: LogoProps) => (
	<strong className={classNames(styles.logo, {}, [className])}>
		<Link href={Routes.HOME} className={styles.logo__link}><LogoIcon /></Link>
	</strong>
);

export default Logo;