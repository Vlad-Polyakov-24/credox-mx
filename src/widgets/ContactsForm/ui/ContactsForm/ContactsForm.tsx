'use client';

import { useState } from 'react';
import { classNames } from '@shared/lib/classNames';
import { FormDefault } from '../FormDefault/FormDefault';
import { FormSuccess } from '../FormSuccess/FormSuccess';
import { FormStatus } from '../../model/types/ContactsForm.types';
import styles from './ContactsForm.module.scss';

type ContactsFormProps = {
	className?: string;
};

const ContactsForm = ({ className }: ContactsFormProps) => {
	const [status, setStatus] = useState<FormStatus>(FormStatus.DEFAULT);

	const contentMap = {
		[FormStatus.DEFAULT]: <FormDefault setFormStatus={setStatus} />,
		[FormStatus.SUCCESS]: <FormSuccess />,
	};

	return (
		<div className={classNames(styles.card, {}, [className])}>
			{contentMap[status]}
		</div>
	);
};

export default ContactsForm;