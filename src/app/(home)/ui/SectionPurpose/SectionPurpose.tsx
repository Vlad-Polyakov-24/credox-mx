import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { SectionTitle } from '@shared/ui/SectionTitle';
import { PurposeSlider } from './PurposeSlider';
import styles from './SectionPurpose.module.scss';

type SectionPurposeProps = {
	className?: string;
};

const SectionPurpose = ({ className }: SectionPurposeProps) => (
	<section className={classNames(styles.purpose, {}, [className])}>
		<Container className={styles.purpose__container}>
			<div className={classNames(styles.purpose__inner, {}, [styles.left])}>
				<SectionTitle className={styles.purpose__title} title={'¿Para qué sirve un microcrédito?'} />
			</div>
			<div className={classNames(styles.purpose__inner, {}, [styles.right])}>
				<PurposeSlider />
			</div>
		</Container>
	</section>
);

export { SectionPurpose };