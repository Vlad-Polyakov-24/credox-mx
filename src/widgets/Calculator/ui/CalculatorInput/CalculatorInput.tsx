import type { Dispatch, SetStateAction } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Slider } from '@features/Slider';
import styles from './CalculatorInput.module.scss';

type CalculatorInputProps = {
	className?: string;
	min: number;
	max: number;
	value: number;
	total: number;
	setter: Dispatch<SetStateAction<number>>;
};

const CalculatorInput = (props: CalculatorInputProps) => {
	const { className, min, max, value, total, setter } = props;

	return (
		<div className={classNames(styles.input, {}, [className])}>
			<Slider
				min={min}
				max={max}
				step={value}
				value={total}
				setter={setter}
			/>
			<div className={styles.input__info}>
				<p>${min}</p>
				<p>${max}</p>
			</div>
		</div>
	);
};

export { CalculatorInput };