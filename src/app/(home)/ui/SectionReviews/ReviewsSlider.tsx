'use client';

import { SwiperSlide } from 'swiper/react';
import { classNames } from '@shared/lib/classNames';
import { useMedia } from '@shared/hooks/useMedia';
import { Swiper } from '@widgets/Swiper';
import { Rating } from '@widgets/Rating';
import { reviews } from '../../model/data/reviews.data';
import styles from './SectionReviews.module.scss';

type ReviewsSliderProps = {
	className?: string;
};

const ReviewsSlider = ({ className }: ReviewsSliderProps) => {
	const { isMobile, isPC } = useMedia();

	return (
		<Swiper
			className={classNames(styles.slider, {}, [className])}
			slidesPerView={1}
			spaceBetween={isPC ? 16 : 32}
			isGrid={isMobile}
			grid={{
				rows: isMobile ? 2 : undefined,
				fill: isMobile ? 'row' : undefined,
			}}
			breakpoints={{
				768: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			}}
		>
			{reviews.map(({ name, rating, comment }, i) => (
				<SwiperSlide key={i} style={{ height: 'auto' }}>
					<div className={styles.slide}>
						<div className={styles.slide__head}>
							<div className={styles.slide__author}>
								<span className={styles['slide__author-icon']}>{name.split('')[0]}</span>
								<p className={styles['slide__author-name']}>{name}</p>
							</div>
							<Rating rating={rating} className={'ml-a'} />
						</div>
						<p className={styles.slide__comment}>{comment}</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export { ReviewsSlider };