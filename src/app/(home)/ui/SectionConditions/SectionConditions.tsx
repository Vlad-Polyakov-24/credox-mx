import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Icon, IconSize } from '@shared/ui/Icon';
import { conditions } from '../../model/data/conditions.data';
import styles from './SectionConditions.module.scss';

type SectionConditionsProps = {
	className?: string;
};

const SectionConditions = ({ className }: SectionConditionsProps) => (
	<div className={classNames(styles.conditions, {}, [className])}>
		<Container>
			<ul className={styles.conditions__list}>
				{conditions.map(({ icon, text }, i) => (
					<li key={i} className={styles.conditions__item}>
						<Icon icon={icon} size={IconSize.SIZE_36} />
						{text}
					</li>
				))}
			</ul>
		</Container>
	</div>
);

export { SectionConditions };