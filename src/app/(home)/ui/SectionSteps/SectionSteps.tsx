import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { SectionTitle } from '@shared/ui/SectionTitle';
import StepsSlider from './StepsSlider';
import styles from './SectionSteps.module.scss';

type SectionStepsProps = {
	className?: string;
};

const SectionSteps = ({ className }: SectionStepsProps) => (
	<section className={classNames(styles.steps, {}, [className])}>
		<Container className={styles.steps__container}>
			<div className={classNames(styles.steps__inner, {}, [styles.left])}>
				<SectionTitle title={'Solo te faltan 3 pasos'} subtitle={'para obtener un crédito'} />
			</div>
			<div className={classNames(styles.steps__inner, {}, [styles.right])}>
				<StepsSlider />
			</div>
		</Container>
	</section>
);

export { SectionSteps };