import { classNames } from '@shared/lib/classNames';
import styles from './SectionSteps.module.scss';

type SectionStepsProps = {
	className?: string;
};

const SectionSteps = ({ className }: SectionStepsProps) => (
	<section className={classNames(styles.steps, {}, [className])}>
		<h2>section steps</h2>
	</section>
);

export { SectionSteps };