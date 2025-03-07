import { classNames } from '@shared/lib/classNames';
import { Icon, IconSize } from '@shared/ui/Icon';
import { Button, ButtonSize, ButtonTheme, ButtonType } from '@shared/ui/Button';
import { Form } from '../Form/Form';
import { Routes } from '@shared/config/routes';
import { FormStatus } from '../../model/types/ContactsForm.types';
import styles from './FormDefault.module.scss';
import ArrowIcon from '@shared/assets/icons/arrow-to-left.svg';

type FormDefaultProps = {
	className?: string;
	setFormStatus: (status: FormStatus) => void;
};

const FormDefault = ({ className, setFormStatus }: FormDefaultProps) => (
	<div className={classNames(styles.default, {}, [className])}>
		<Button
			as={ButtonType.LINK}
			to={Routes.HOME}
			theme={ButtonTheme.CLEAR}
			size={ButtonSize.TEXT}
			className={styles.default__back}
		>
			<Icon icon={<ArrowIcon />} size={IconSize.SIZE_24} />
			Atrás
		</Button>
		<div className={styles.default__inner}>
			<h1 className={styles.default__title}>Formulario de solicitud de préstamo</h1>
			<Form setFormStatus={setFormStatus} />
		</div>
	</div>
);

export { FormDefault };