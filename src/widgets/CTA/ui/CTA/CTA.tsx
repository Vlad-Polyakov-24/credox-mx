import Image from 'next/image';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Button } from '@shared/ui/Button';
import { CTATags } from '../CTATags/CTATags';
import { data } from '../../model/data/CTA.data';
import { CTATheme } from '../../model/types/CTA.types';
import styles from './CTA.module.scss';

type CTAProps = {
	className?: string;
	theme?: CTATheme;
	tags?: {
		top?: string[];
		bottom?: string[];
	};
};

const CTA = (props: CTAProps) => {
	const { className, theme = CTATheme.FIRST, tags } = props;

	return (
		<section className={classNames(styles.cta, {}, [className, styles[theme]])}>
			<div className={styles.cta__inner}>
				<Container>
					<div className={styles.cta__row}>
						<Image src={data[theme].img} alt={'cta image'} className={styles.cta__img} />
						<Image src={data[theme].img_bg} alt={'cta image'} className={styles['cta__img-bg']} />
						<div className={styles.cta__content}>
							{tags?.top && <CTATags tags={tags?.top} className={classNames(styles.cta__tags, {}, [styles.top])} />}
							<div className={styles['cta__content-inner']}>
								<h2 className={styles.title}>{data[theme].title}</h2>
								<p className={styles.subtitle}>{data[theme].subtitle}</p>
								<Button className={styles.cta__btn} text={'Envía tu solicitud'} fluid shadow />
							</div>
							{tags?.bottom && <CTATags tags={tags?.bottom} className={classNames(styles.cta__tags, {}, [styles.bottom])} />}
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
};

export default CTA;