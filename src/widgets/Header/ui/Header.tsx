import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Logo } from '@shared/ui/Logo';
import { Button, ButtonTheme } from '@shared/ui/Button';
import { NavigationMobile, NavigationPC } from '@features/Navigation';
import { Hamburger } from '@features/Hamburger';
import styles from './Header.module.scss';

type HeaderProps = {
	className?: string;
};

const Header = ({ className }: HeaderProps) => (
	<header className={classNames(styles.header, {}, [className])}>
		<Container className={styles.header__container}>
			<div className={styles.header__inner}>
				<Logo />
				<NavigationPC />
				<NavigationMobile />
				<Hamburger />
			</div>
			<div className={styles.header__inner}>
				<Button theme={ButtonTheme.OUTLINE} text={'Envía tu solicitud'} />
			</div>
		</Container>
	</header>
);

export default Header;