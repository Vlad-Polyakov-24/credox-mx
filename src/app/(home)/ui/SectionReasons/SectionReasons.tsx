import { classNames } from '@shared/lib/classNames';
import styles from './SectionReasons.module.scss';

type SectionReasonsProps = {
	className?: string;
};

const SectionReasons = ({ className }: SectionReasonsProps) => (
	<section className={classNames(styles.reasons, {}, [className])}>
		<h2>section reasons</h2>
	</section>
);

export { SectionReasons };