import { classNames } from '@shared/lib/classNames';
import styles from './CTATags.module.scss';

type CTATagsProps = {
	className?: string;
	tags: string[];
};

const CTATags = (props: CTATagsProps) => {
	const { className, tags } = props;

	return (
		<ul className={classNames(styles.tags, {}, [className])}>
			{tags.map(tag => (
				<li key={tag} className={styles.tags__item}>
          <span className={styles.tag}>#{tag}</span>
        </li>
			))}
		</ul>
	);
};

export { CTATags };