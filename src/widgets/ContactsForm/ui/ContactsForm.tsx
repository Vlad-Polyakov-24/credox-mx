'use client';

import { useCallback } from 'react';
import { Form, Formik } from 'formik';
import { classNames } from '@shared/lib/classNames';
import { FormikInput, MaskInput } from '@shared/ui/FormikInput';
import { Datepicker } from '@shared/ui/Datepicker';
import { Button } from '@shared/ui/Button';
import { contactsSchema } from '@shared/const/validationSchemas';
import { initialValues, inputs } from '../model/data/contactsForm.data';
import type { IUser } from '@entities/User';
import styles from './ContactsForm.module.scss';

type ContactsFormProps = {
	className?: string;
};

const ContactsForm = ({ className }: ContactsFormProps) => {

	const handleSubmit = useCallback((values: IUser) => {
		console.log('values: ', values);
	}, []);

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactsSchema}>
			{({ setFieldValue, values }) => (
				<Form className={classNames(styles.form, {}, [className])}>
					<div className={styles.form__inner}>
						{inputs.map(({ name, placeholder, type }) => (
							type === 'date'
								? <Datepicker
									key={name}
									name={name}
									placeholder={placeholder}
									date={values.birthday}
									onChange={(date) => setFieldValue(name, date)}
								/>
								: <FormikInput key={name} name={name} placeholder={placeholder} type={type} />
						))}
						<MaskInput name={'phone'} mask={'+52 (000) 000-0000'} placeholder={'+52 1 ___ ___ ____'} />
					</div>
					<div className={styles.form__checkboxes}>

					</div>
					<Button type={'submit'} text={'Continuar'} fluid shadow />
					<Button type={'button'} text={'err'} fluid shadow onClick={() => { throw new Error }} />
				</Form>
			)}
		</Formik>
	);
};

export default ContactsForm;