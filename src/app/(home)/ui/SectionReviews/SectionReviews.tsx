import { classNames } from '@shared/lib/classNames';
import styles from './SectionReviews.module.scss';

type SectionReviewsProps = {
	className?: string;
};

const SectionReviews = ({ className }: SectionReviewsProps) => (
	<section className={classNames(styles.reviews, {}, [className])}>
		<h2>section reviews</h2>
	</section>
);

export { SectionReviews };