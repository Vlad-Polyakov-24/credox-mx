import Image from 'next/image';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { SectionTitle } from '@shared/ui/SectionTitle';
import styles from './SectionComment.module.scss';
import Img from '@shared/assets/images/comment/img_01.png';

type SectionCommentProps = {
	className?: string;
};

const SectionComment = ({ className }: SectionCommentProps) => (
	<section className={classNames(styles.comment, {}, [className])}>
		<Container className={styles.comment__container}>
			<div className={classNames(styles.comment__inner, {}, [styles.left])}>
				<SectionTitle className={styles.comment__title} title={'Deje su comentario'} />
				<Image src={Img} alt={'Comment img'} className={styles.comment__img} />
			</div>
			<div className={classNames(styles.comment__inner, {}, [styles.right])}>

			</div>
		</Container>
	</section>
);

export { SectionComment };