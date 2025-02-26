'use client';

import type { ReactNode } from 'react';
import { Swiper, type SwiperProps } from 'swiper/react';
import { Scrollbar, Autoplay } from 'swiper/modules';
import { classNames } from '@shared/lib/classNames';
import 'swiper/scss';
import 'swiper/scss/scrollbar';
import styles from './Swiper.module.scss';

interface CustomSwiperProps extends SwiperProps {
	className?: string;
	children: ReactNode;
}

const CustomSwiper = ({ className, children, ...rest }: CustomSwiperProps) => (
	<Swiper
		modules={[Scrollbar, Autoplay]}
		className={classNames(styles.swiper, {}, [className])}
		{...rest}
	>
		{children}
	</Swiper>
);

export default CustomSwiper;