import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Logo } from '@shared/ui/Logo';
import { Navigation } from '@features/Navigation';
import { Button, ButtonTheme } from '@shared/ui/Button';
import styles from './Header.module.scss';

type HeaderProps = {
	className?: string;
};

const Header = (props: HeaderProps) => {
	const { className } = props;

	return (
		<header className={classNames(styles.header, {}, [className])}>
			<Container className={styles.header__container}>
				<div className={styles.header__inner}>
					<Logo />
          <Navigation />
				</div>
				<div className={styles.header__inner}>
					<Button theme={ButtonTheme.OUTLINE} text={'Envía tu solicitud'} />
				</div>
			</Container>
		</header>
	);
};

export default Header;