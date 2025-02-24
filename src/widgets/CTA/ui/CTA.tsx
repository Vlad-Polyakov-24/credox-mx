import { classNames } from '@shared/lib/classNames';
import styles from './CTA.module.scss';

type CTAProps = {
	className?: string;
};

const CTA = (props: CTAProps) => {
	const { className } = props;

	return (
		<section className={classNames(styles.cta, {}, [className])}></section>
	);
};

export default CTA;