'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import { useMedia } from '@shared/hooks/useMedia';
import { Swiper } from '@widgets/Swiper';
import { Icon, IconSize } from '@shared/ui/Icon';
import { purpose } from '../../model/data/purpose.data';
import styles from './SectionPurpose.module.scss';
import ArrowIcon from '@shared/assets/icons/arrow-to-right.svg';

type PurposeSliderProps = {
	className?: string;
};

const PurposeSlider = ({ className }: PurposeSliderProps) => {
	const { isMobile, isPC } = useMedia();

	return (
		<Swiper
			className={className}
			slidesPerView={isMobile ? 1.5 : 3}
			spaceBetween={isPC ? 16 : 32}
			autoHeight
		>
			{purpose.map(({ img, caption }, i, arr) => (
				<SwiperSlide key={i} style={{ height: '100%' }}>
					<div className={styles.slide}>
						<div className={styles.slide__inner}>
							<Image src={img} className={styles.slide__img} alt={`purpose slide ${i + 1}`} />
							<p className={styles.slide__caption}>{caption}</p>
							<Link href={'/'} className={styles.slide__link}>
								Envía tu solicitud
								<Icon icon={<ArrowIcon />} size={IconSize.SIZE_24} />
							</Link>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export { PurposeSlider };