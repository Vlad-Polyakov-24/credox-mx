'use client';

import { SwiperSlide } from 'swiper/react';
import { classNames } from '@shared/lib/classNames';
import { Swiper } from '@widgets/Swiper';
import { steps } from '../../model/data/steps.data';
import styles from './SectionSteps.module.scss';
import { useMedia } from '@shared/hooks/useMedia';

type StepsSliderProps = {
	className?: string;
};

const StepsSlider = (props: StepsSliderProps) => {
	const { className } = props;
	const { isMobile } = useMedia();

	return (
		<Swiper className={classNames('', {}, [className])} slidesPerView={isMobile ? 1 : 3} spaceBetween={64}>
			{steps.map(({ caption, desc }, i, arr) => (
				<SwiperSlide key={i}>
					<div className={classNames(styles.slide, {[styles.arrow]: i + 1 !== arr.length}, [])}>
						<p className={styles.slide__counter}>{(i + 1).toString().padStart(2, '0')}</p>
						<p className={styles.slide__caption}>{caption}</p>
						<p className={styles.slide__desc}>{desc}</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default StepsSlider;