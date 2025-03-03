'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { classNames } from '@shared/lib/classNames';
import { useMedia } from '@shared/hooks/useMedia';
import { Button, ButtonSize, ButtonTheme } from '@shared/ui/Button';
import { IconSize } from '@shared/ui/Icon';
import styles from './Rating.module.scss';
import StarIcon from '@shared/assets/icons/star.svg';

const Icon = dynamic(() => import('@shared/ui/Icon/ui/Icon/Icon'), { ssr: false });

type RatingProps = {
	className?: string;
	rating: number;
	onChange?: (value: number) => void;
};

const Rating = (props: RatingProps) => {
	const { className, rating, onChange } = props;
	const [hovered, setHovered] = useState<number | null>(null);
	const { isMobile } = useMedia();

	return (
		<div className={classNames(styles.rating, {}, [className])}>
			{[1, 2, 3, 4, 5].map(star => (
				<Button
					key={star}
					className={classNames(styles.rating__btn, { [styles.filled]: star <= (hovered ?? rating) }, [])}
					theme={ButtonTheme.CLEAR}
					size={ButtonSize.TEXT}
					disabled={!!onChange}
				>
					<Icon icon={<StarIcon />} size={isMobile ? IconSize.SIZE_16 : IconSize.SIZE_24} />
				</Button>
			))}
		</div>
	);
};

export default Rating;