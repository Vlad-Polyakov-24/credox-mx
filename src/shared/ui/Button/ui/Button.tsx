import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames, type Additional, type Mods } from '@shared/lib/classNames';
import { ButtonSize, ButtonTheme } from '../model/types/Button.types';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
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
		text,
		children,
		theme = ButtonTheme.DEFAULT,
		size = ButtonSize.M,
		fluid = false,
		shadow = false,
		...rest
	} = props;
	const mods: Mods = { [styles['btn--fluid']]: fluid, [styles['btn--shadow']]: shadow };
	const additional: Additional = [className, styles[theme], styles[size]];

	return (
		<button className={classNames(styles.btn, mods, additional)} {...rest}>
			{children || text}
		</button>
	);
};

export default Button;