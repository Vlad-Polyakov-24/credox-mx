import { classNames } from '@shared/lib/classNames';
import styles from './Footer.module.scss';

type FooterProps = {
	className?: string;
};

const Footer = (props: FooterProps) => {
	const { className } = props;

	return (
		<footer className={classNames(styles.footer, {}, [className])}>
			<h1>footer</h1>
		</footer>
	);
};

export default Footer;