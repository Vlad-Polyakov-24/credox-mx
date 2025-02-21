import { classNames } from '@shared/lib/classNames';
import { links } from '../model/data/navigation.data';
import styles from './Navigation.module.scss';

type NavigationProps = {
	className?: string;
};

const Navigation = (props: NavigationProps) => {
	const { className } = props;

	return (
		<nav className={classNames(styles.nav, {}, [className])}>
			<ul className={styles.nav__list}>
				{links.map(link => (
					<li key={link.label} className={styles.nav__item}>
						<a href={`#${link.href}`}>{link.label}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;