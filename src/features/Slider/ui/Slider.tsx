import type { Dispatch, SetStateAction } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

type SliderProps = {
	className?: string;
	min: number;
	max: number;
	step: number;
	value: number;
	setter: Dispatch<SetStateAction<number>>;
};

const CustomSlider = (props: SliderProps) => {
	const { className, min, max, step, value, setter } = props;

	return (
		<Slider
			min={min}
			max={max}
			step={step}
			value={value}
			onChange={(value) => setter(value as number)}
			className={className}
			styles={{
				rail: {
					height: 14,
					borderRadius: 0,
					backgroundColor: 'rgba(40, 109, 247, .2)',
				},
				track: {
					height: 14,
					borderRadius: 0,
					backgroundColor: 'var(--color-blue-primary)',
				},
				handle: {
					width: 24,
					height: 24,
					opacity: 1,
					backgroundColor: 'var(--color-blue-primary)',
					borderRadius: '4px',
					border: 'none',
					boxShadow: '0 0 4px rgba(0, 0, 0, .4)',
				},
			}}
		/>
	);
};

export default CustomSlider;