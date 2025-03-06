import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Logo } from '@shared/ui/Logo';
import { Button, ButtonTheme, ButtonType } from '@shared/ui/Button';
import { NavigationMobile, NavigationPC } from '@features/Navigation';
import { Hamburger } from '@features/Hamburger';
import { Routes } from '@shared/config/routes';
import { HeaderTheme } from '../model/types/Header.types';
import styles from './Header.module.scss';

type HeaderProps = {
	className?: string;
	theme?: HeaderTheme;
};

const Header = ({ className, theme = HeaderTheme.PRIMARY }: HeaderProps) => {
	const isPrimary = theme === HeaderTheme.PRIMARY;

	return (
		<header className={classNames(styles.header, {}, [className, styles[theme]])}>
			<Container className={styles.header__container}>
				<div className={styles.header__inner}>
					<Logo className={styles.header__logo} />
					{isPrimary && (
						<>
							<NavigationPC />
							<NavigationMobile />
							<Hamburger />
						</>
					)}
				</div>
				{isPrimary && (
					<div className={styles.header__inner}>
						<Button
							as={ButtonType.LINK}
							to={Routes.CONTACTS}
							theme={ButtonTheme.OUTLINE} text={'Envía tu solicitud'}
						/>
					</div>
				)}
			</Container>
		</header>
	);
};

export default Header;