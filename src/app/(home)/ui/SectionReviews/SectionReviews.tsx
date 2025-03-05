import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { SectionTitle } from '@shared/ui/SectionTitle';
import { ReviewsSlider } from './ReviewsSlider';
import { anchors } from '@shared/const/anchors';
import styles from './SectionReviews.module.scss';

type SectionReviewsProps = {
	className?: string;
};

const SectionReviews = ({ className }: SectionReviewsProps) => (
	<section id={anchors.REVIEWS} className={classNames(styles.reviews, {}, [className])}>
		<Container>
			<SectionTitle className={styles.reviews__title} title={'Opiniones de nuestros usuarios'} />
			<ReviewsSlider />
		</Container>
	</section>
);

export { SectionReviews };