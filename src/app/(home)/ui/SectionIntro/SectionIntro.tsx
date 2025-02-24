import { classNames } from '@shared/lib/classNames';
import styles from './SectionIntro.module.scss';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => (
	<section className={classNames(styles.intro, {}, [className])}>
		<h1>section intro</h1>
	</section>
);

export { SectionIntro };