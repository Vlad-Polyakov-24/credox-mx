import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { SectionTitle } from '@shared/ui/SectionTitle';
import { Icon, IconSize } from '@shared/ui/Icon';
import { advantages } from '../../model/data/advantages.data';
import styles from './SectionAdvantages.module.scss';

type SectionAdvantagesProps = {
	className?: string;
};

const SectionAdvantages = ({ className }: SectionAdvantagesProps) => (
	<section className={classNames(styles.advantages, {}, [className])}>
		<Container>
			<SectionTitle className={styles.advantages__title} title={'6 ventajas que recibirás'} />
			<ul className={styles.advantages__list}>
				{advantages.map(({ icon, caption }) => (
					<li key={caption} className={styles.advantages__item}>
						<Icon icon={icon} size={IconSize.SIZE_80} className={'m-centred'} style={{ color: 'var(--color-white)' }} />
						<p>{caption}</p>
					</li>
				))}
			</ul>
		</Container>
	</section>
);

export { SectionAdvantages };