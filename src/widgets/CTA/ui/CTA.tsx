import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Button } from '@shared/ui/Button';
import { data } from '../model/data/CTA.data';
import { CTATheme } from '../model/types/CTA.types';
import styles from './CTA.module.scss';

type CTAProps = {
	className?: string;
	theme?: CTATheme;
};

const CTA = (props: CTAProps) => {
	const { className, theme = CTATheme.FIRST } = props;

	return (
		<section className={classNames(styles.cta, {}, [className, styles[theme]])}>
			<div className={styles.cta__inner}>
				<Container>
					<div className={styles.cta__row}>
						<div className={styles.cta__content}>
							<h2 className={styles.title}>{data[theme].title}</h2>
							<p className={styles.subtitle}>{data[theme].subtitle}</p>
							<Button className={styles.cta__btn} text={'Envía tu solicitud'} fluid />
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
};

export default CTA;