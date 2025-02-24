import { classNames } from '@shared/lib/classNames';
import styles from './SectionAdvantages.module.scss';

type SectionAdvantagesProps = {
	className?: string;
};

const SectionAdvantages = ({ className }: SectionAdvantagesProps) => (
	<section className={classNames(styles.advantages, {}, [className])}>
		<h2>section advantages</h2>
	</section>
);

export { SectionAdvantages };