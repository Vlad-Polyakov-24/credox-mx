'use client';

import { useState } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Button } from '@shared/ui/Button';
import { Icon, IconSize } from '@shared/ui/Icon';
import { CalculatorInput } from '../CalculatorInput/CalculatorInput';
import styles from './Calculator.module.scss';
import InfoIcon from '@shared/assets/icons/info.svg';

type CalculatorProps = {
	className?: string;
};

const Calculator = ({ className }: CalculatorProps) => {
	const [amount, setAmount] = useState(1000);
	const amountFixed = {
		min: 1000,
		max: 150000,
	};

	return (
		<div className={classNames(styles.calculator, {}, [className])}>
			<div className={styles.calculator__heading}>
				<div className={styles['calculator__heading-inner']}>
					<h2 className={styles.calculator__title}>Cantidad</h2>
				</div>
				<div className={styles['calculator__heading-inner']}>
					<p className={styles.calculator__amount}>$ {amount}</p>
				</div>
			</div>
			<CalculatorInput
				setter={setAmount}
				min={amountFixed.min}
				max={amountFixed.max}
				value={amountFixed.min}
				total={amount}
			/>
			<Button className={'m-centred'} text={'Envía tu solicitud'} fluid />
			<ul className={styles.calculator__info}>
				<li><p>Cantidad:</p> <p><span className={'fw-700'}>${amount}</span></p></li>
				<li>
					<p>Tasa de interés:</p>
					<p><span className={'fw-700'}>0%</span> <Icon icon={<InfoIcon/>} size={IconSize.SIZE_16} /></p>
				</li>
				<li><p>Cantidad a pagar:</p> <p><span className={'fw-700'}>${amount}</span></p></li>
			</ul>
			<p className={styles.calculator__desc}>
				<Icon icon={<InfoIcon/>} size={IconSize.SIZE_16} />
				Muchos de nuestros socios ofrecen microcréditos con una tasa de interés del 0% para nuevos usuarios. Las
				condiciones completas se pueden consultar en el sitio web de la oferta correspondiente.
			</p>
		</div>
	);
};

export default Calculator;