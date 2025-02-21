import { classNames } from '@shared/lib/classNames';
import styles from './Logo.module.scss';
import LogoIcon from '@shared/assets/icons/logo.svg';

type LogoProps = {
	className?: string;
};

const Logo = ({ className }: LogoProps) => (
	<strong className={classNames(styles.logo, {}, [className])}>
		<LogoIcon />
	</strong>
);

export default Logo;