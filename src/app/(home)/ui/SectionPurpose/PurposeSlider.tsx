'use client';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { useMedia } from '@shared/hooks/useMedia';
import { Swiper } from '@widgets/Swiper';
import { Icon, IconSize } from '@shared/ui/Icon';
import { Button, ButtonSize, ButtonTheme, ButtonType } from '@shared/ui/Button';
import { purpose } from '../../model/data/purpose.data';
import { Routes } from '@shared/config/routes';
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
			{purpose.map(({ img, caption }, i) => (
				<SwiperSlide key={i} style={{ height: '100%' }}>
					<div className={styles.slide}>
						<div className={styles.slide__inner}>
							<Image src={img} className={styles.slide__img} alt={`purpose slide ${i + 1}`} />
							<p className={styles.slide__caption}>{caption}</p>
							<Button
								as={ButtonType.LINK}
								to={Routes.CONTACTS}
								theme={ButtonTheme.CLEAR}
								size={ButtonSize.TEXT}
								className={styles.slide__link}
							>
								Envía tu solicitud
								<Icon icon={<ArrowIcon />} size={IconSize.SIZE_24} />
							</Button>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export { PurposeSlider };