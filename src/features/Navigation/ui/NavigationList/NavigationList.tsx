import Link from 'next/link';
import { classNames } from '@shared/lib/classNames';
import { links } from '../../model/data/navigation.data';
import { NavigationListTheme } from '../../model/types/Navigation.types';
import styles from './NavigationList.module.scss';

type NavigationListProps = {
	className?: string;
	theme?: NavigationListTheme;
};

const NavigationList = ({ className, theme = NavigationListTheme.PC }: NavigationListProps) => (
	<ul className={classNames(styles.list, {}, [className, styles[theme]])}>
		{links.map(link => (
			<li key={link.label}>
				<Link href={`#${link.href}`} className={styles.list__link}>{link.label}</Link>
			</li>
		))}
	</ul>
);

export { NavigationList };