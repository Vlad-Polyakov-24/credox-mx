import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { ContactsForm } from '@widgets/ContactsForm';
import styles from './SectionForm.module.scss';

type SectionFormProps = {
	className?: string;
};

const SectionForm = ({ className }: SectionFormProps) => (
	<section className={classNames(styles.form, {}, [className])}>
		<Container>
			<ContactsForm />
		</Container>
	</section>
);

export { SectionForm };