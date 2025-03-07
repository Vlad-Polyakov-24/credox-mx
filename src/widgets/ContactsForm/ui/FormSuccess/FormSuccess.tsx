'use client';

import { useEffect, useState } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Icon, IconSize } from '@shared/ui/Icon';
import { endpoints } from '@shared/const/endpoints';
import styles from './FormSuccess.module.scss';
import CheckIcon from '@shared/assets/icons/check_02.svg';
import CounterIcon from '@shared/assets/icons/counter.svg';

type FormSuccessProps = {
	className?: string;
};

const FormSuccess = ({ className }: FormSuccessProps) => {
	const [counter, setCounter] = useState(3);

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter((prev) => prev - 1);
		}, 1000);

		if (counter === 0) {
			clearInterval(timer);
			window.location.href = endpoints.REDIRECT;
		}

		return () => clearInterval(timer);
	}, [counter]);

	return (
		<div className={classNames(styles.success, {}, [className])}>
			<Icon icon={<CheckIcon />} size={IconSize.SIZE_80} className={styles.success__icon} />
			<h1 className={styles.success__title}>¡Gracias!<br/>Su solicitud está siendo procesada</h1>
			<div className={styles.success__counter}>
				<p>Ver las mejores ofertas a través de</p>
				<p className={styles.counter}>{counter} segundos <Icon icon={<CounterIcon />} size={IconSize.SIZE_24} /></p>
			</div>
		</div>
	);
};

export { FormSuccess };