'use client';

import { useCallback, useState, type MouseEvent } from 'react';
import { Form, Formik } from 'formik';
import { classNames } from '@shared/lib/classNames';
import { useToggle } from '@shared/hooks/useToggle';
import { FormikInput, MaskInput } from '@shared/ui/FormikInput';
import { FormikCheckbox } from '@shared/ui/FormikCheckbox';
import { Datepicker } from '@shared/ui/Datepicker';
import { Button } from '@shared/ui/Button';
import { ConditionsModal } from '@features/ConditionsModal';
import { contactsSchema } from '@shared/const/validationSchemas';
import { initialValues, inputs } from '../model/data/contactsForm.data';
import type { IUser } from '@entities/User';
import { ConditionsModalTheme } from '@features/ConditionsModal';
import styles from './ContactsForm.module.scss';

type ContactsFormProps = {
	className?: string;
};

const ContactsForm = ({ className }: ContactsFormProps) => {
	const { isOpen, open, close } = useToggle();
	const [modalTheme, setModalTheme] = useState<ConditionsModalTheme>(ConditionsModalTheme.CONDITIONS);

	const handleOpenModal = (e: MouseEvent, theme: ConditionsModalTheme) => {
		e.preventDefault();
		setModalTheme(theme);
		open();
	};

	const handleSubmit = useCallback((values: IUser) => {
		console.log('values: ', values);
	}, []);

	return (
		<>
			<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactsSchema}>
				{({ setFieldValue, values }) => (
					<Form className={classNames(styles.form, {}, [className])}>
						<div className={styles.form__inputs}>
							{inputs.map(({ name, placeholder, type }) => (
								type === 'date'
									? <Datepicker
										key={name}
										name={name}
										placeholder={placeholder}
										date={values.birthday}
										onChange={(date) => setFieldValue(name, date)}
									/>
									: <FormikInput key={name} name={name} placeholder={placeholder} type={type}/>
							))}
							<MaskInput name={'phone'} mask={'+52 (000) 000-0000'} placeholder={'+52 1 ___ ___ ____'}/>
						</div>
						<div className={styles.form__checkboxes}>
							<FormikCheckbox
								name={'mailing'}
								label={'Consiento estar al día de las últimas noticias y recibir ofertas especiales y descuentos por cualquier medio, incluidas las comunicaciones electrónicas o equivalentes de Credox.mx'}
							/>
							<FormikCheckbox
								name={'conditions'}
								label={
									<>
										Сonfirmo que he leído y acepto las <span className={styles.form__link} onClick={(e) => handleOpenModal(e, ConditionsModalTheme.CONDITIONS)}>condiciones generales</span>, <span
										className={styles.form__link} onClick={(e) => handleOpenModal(e, ConditionsModalTheme.PRIVACY)}>política de privacidad</span> y <span
										className={styles.form__link} onClick={(e) => handleOpenModal(e, ConditionsModalTheme.COOKIE)}>política de cookies</span>.
									</>
								}
							/>
						</div>
						<Button type={'submit'} text={'Continuar'} fluid shadow/>
					</Form>
				)}
			</Formik>
			{isOpen && <ConditionsModal isOpen={isOpen} onClose={close} theme={modalTheme} />}

		</>
	);
};

export default ContactsForm;