import Link from 'next/link';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Icon, IconSize } from '@shared/ui/Icon';
import { ContactsForm } from '@widgets/ContactsForm';
import { Routes } from '@shared/config/routes';
import styles from './SectionForm.module.scss';
import ArrowIcon from '@shared/assets/icons/arrow-to-left.svg';

type SectionFormProps = {
	className?: string;
};

const SectionForm = ({ className }: SectionFormProps) => {

	return (
		<section className={classNames(styles.form, {}, [className])}>
			<Container>
				<div className={styles.form__item}>
					<Link href={Routes.HOME} className={styles.form__back}>
						<Icon icon={<ArrowIcon />} size={IconSize.SIZE_24} />
						Atrás
					</Link>
					<div className={styles['form__item-inner']}>
						<h1 className={styles.form__title}>Formulario de solicitud de préstamo</h1>
						<ContactsForm />
					</div>
				</div>
			</Container>
		</section>
	);
};

export { SectionForm };