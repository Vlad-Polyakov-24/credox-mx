import type { ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './SectionTitle.module.scss';

type SectionTitleProps = {
	className?: string;
	title?: string | ReactNode;
	subtitle?: string | ReactNode;
};

const SectionTitle = (props: SectionTitleProps) => {
	const { className, title, subtitle } = props;

	return (
		<div className={classNames(styles.wrapper, {}, [className])}>
			{title && <h2 className={styles.title}>{title}</h2>}
			{subtitle && <p className={styles.subtitile}>{subtitle}</p>}
		</div>
	);
};

export default SectionTitle;