'use client';

import type { ReactNode } from 'react';
import { Swiper, type SwiperProps } from 'swiper/react';
import { Scrollbar, Autoplay, Grid } from 'swiper/modules';
import { classNames } from '@shared/lib/classNames';
import 'swiper/scss';
import 'swiper/scss/scrollbar';
import 'swiper/scss/grid';
import styles from './Swiper.module.scss';

interface CustomSwiperProps extends SwiperProps {
	className?: string;
	children: ReactNode;
	isGrid?: boolean;
}

const CustomSwiper = ({ className, children, isGrid, ...rest }: CustomSwiperProps) => (
	<Swiper
		modules={[Scrollbar, Autoplay, ...(isGrid ? [Grid] : [])]}
		scrollbar={{ draggable: true, horizontalClass: styles.swiper__scrollbar }}
		className={classNames(styles.swiper, {}, [className])}
		{...rest}
	>
		{children}
	</Swiper>
);

export default CustomSwiper;