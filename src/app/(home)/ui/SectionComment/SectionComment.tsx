import { classNames } from '@shared/lib/classNames';
import styles from './SectionComment.module.scss';

type SectionCommentProps = {
	className?: string;
};

const SectionComment = ({ className }: SectionCommentProps) => (
	<section className={classNames(styles.comment, {}, [className])}>
		<h2>section comment</h2>
	</section>
);

export { SectionComment };