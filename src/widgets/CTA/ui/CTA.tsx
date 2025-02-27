import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import styles from './CTA.module.scss';

type CTAProps = {
	className?: string;
};

const CTA = (props: CTAProps) => {
	const { className } = props;

	return (
		<section className={classNames(styles.cta, {}, [className])}>
			<Container>
				<h2>CTA will be here</h2>
			</Container>
		</section>
	);
};

export default CTA;