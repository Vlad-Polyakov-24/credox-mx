'use client';

import { useMedia } from '@shared/hooks/useMedia';
import { Swiper } from '@widgets/Swiper';
import { SwiperSlide } from 'swiper/react';
import { reviews } from '../../model/data/reviews.data';
import styles from './SectionReviews.module.scss';

type ReviewsSliderProps = {
	className?: string;
};

const ReviewsSlider = (props: ReviewsSliderProps) => {
	const { className } = props;
	const { isMobile } = useMedia();

	return (
		<Swiper
			className={className}
			slidesPerView={isMobile ? 1 : 3}
			spaceBetween={32}
			autoHeight
		>
			{reviews.map(({ name, rating, comment }, i, arr) => (
				<SwiperSlide key={i} style={{ height: '100%' }}>
					<div className={styles.slide}>
						<div className={styles.slide__head}>
							<div className={styles.slide__author}>
								<span className={styles['slide__author-icon']}>{name.split('')[0]}</span>
								<p className={styles['slide__author-name']}>{name}</p>
							</div>
							<p className={styles.slide__comment}>{comment}</p>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export { ReviewsSlider };