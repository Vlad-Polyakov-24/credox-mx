import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { SectionTitle } from '@shared/ui/SectionTitle';
import { anchors } from '@shared/const/anchors';
import { reasons } from '../../model/data/reasons.data';
import styles from './SectionReasons.module.scss';

type SectionReasonsProps = {
	className?: string;
};

const SectionReasons = ({ className }: SectionReasonsProps) => (
	<section id={anchors.REASONS} className={classNames(styles.reasons, {}, [className])}>
		<Container>
			<SectionTitle className={styles.reasons__title} title={'Razones para elegirnos'} />
			<ul className={styles.reasons__list}>
				{reasons.map(({ caption, desc }, i) => (
					<li key={i} className={styles.reasons__item}>
						<p className={styles.caption}>{caption}</p>
						<p className={styles.desc}>{desc}</p>
					</li>
				))}
			</ul>
		</Container>
	</section>
);

export { SectionReasons };