'use client';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { useMedia } from '@shared/hooks/useMedia';
import { Swiper } from '@widgets/Swiper';
import { purpose } from '../../model/data/purpose.data';
import styles from './SectionPurpose.module.scss';

type PurposeSliderProps = {
	className?: string;
};

const PurposeSlider = ({ className }: PurposeSliderProps) => {
	const { isMobile } = useMedia();

	return (
		<Swiper className={className} slidesPerView={isMobile ? 1 : 3} spaceBetween={64}>
			{purpose.map(({ img, caption }, i, arr) => (
				<SwiperSlide key={i}>
					<div className={styles.slide}>
						<Image src={img} alt={`purpose slide ${i + 1}`} />
						<p className={styles.slide__caption}>{caption}</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export { PurposeSlider };