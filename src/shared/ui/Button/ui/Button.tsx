'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames, type Additional, type Mods } from '@shared/lib/classNames';
import { ButtonSize, ButtonTheme, ButtonType } from '../model/types/Button.types';
import { Routes } from '@shared/config/routes';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
	className?: string;
	as?: ButtonType;
	to?: Routes;
	text?: string;
	children?: ReactNode;
	theme?: ButtonTheme;
	size?: ButtonSize;
	fluid?: boolean;
	shadow?: boolean;
}

const Button = (props: ButtonProps) => {
	const {
		className,
		as = ButtonType.BUTTON,
		to = Routes.HOME,
		text,
		children,
		theme = ButtonTheme.DEFAULT,
		size = ButtonSize.M,
		fluid = false,
		shadow = false,
		...rest
	} = props;
	const searchParams = useSearchParams();
	const query = new URLSearchParams(searchParams.toString());
	const mods: Mods = { [styles['btn--fluid']]: fluid, [styles['btn--shadow']]: shadow };
	const additional: Additional = [className, styles[theme], styles[size]];
	const targetUrl = `${to}?${query.toString()}`;

	const components = {
		[ButtonType.BUTTON]: (
			<button className={classNames(styles.btn, mods, additional)} {...rest}>
				{children || text}
			</button>
		),
		[ButtonType.LINK]: (
			<Link href={targetUrl} className={classNames(styles.btn, mods, additional)} {...rest}>
				{children || text}
			</Link>
		),
	};

	return components[as];
};

export default Button;