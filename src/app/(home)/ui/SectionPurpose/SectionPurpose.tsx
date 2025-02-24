import { classNames } from '@shared/lib/classNames';
import styles from './SectionPurpose.module.scss';

type SectionPurposeProps = {
	className?: string;
};

const SectionPurpose = ({ className }: SectionPurposeProps) => (
	<section className={classNames(styles.purpose, {}, [className])}>
		<h2>section purpose</h2>
	</section>
);

export { SectionPurpose };