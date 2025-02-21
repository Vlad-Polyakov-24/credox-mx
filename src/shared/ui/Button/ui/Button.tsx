import { classNames, type Additional, type Mods } from '@shared/lib/classNames';
import { ButtonSize, ButtonTheme } from '../model/types/Button.types';
import styles from './Button.module.scss';

type ButtonProps = {
	className?: string;
	text?: string;
	theme?: ButtonTheme;
	size?: ButtonSize;
	fluid?: boolean;
};

const Button = (props: ButtonProps) => {
	const { className, text, theme = ButtonTheme.DEFAULT, size = ButtonSize.M, fluid } = props;
	const mods: Mods = { [styles.btnFluid]: fluid };
	const additional: Additional = [className, styles[theme], styles[size]];

	return (
		<button className={classNames(styles.btn, mods, additional)}>
			{text}
		</button>
	);
};

export default Button;