import { classNames } from '@shared/lib/classNames';
import styles from './SectionConditions.module.scss';

type SectionConditionsProps = {
	className?: string;
};

const SectionConditions = ({ className }: SectionConditionsProps) => (
	<section className={classNames(styles.conditions, {}, [className])}>
		<h2>section conditions</h2>
	</section>
);

export { SectionConditions };