'use client';

import { useCallback, useState, useEffect, type MouseEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { Form as FormikForm, Formik } from 'formik';
import { classNames } from '@shared/lib/classNames';
import { cleanPhoneNumber } from '@shared/lib/clearPhoneNumber';
import { handleSubsAndPhone } from '../../lib/handleSubsAndPhone';
import { useToggle } from '@shared/hooks/useToggle';
import { useToast } from '@shared/hooks/useToast';
import { useLocalStorage } from '@shared/hooks/useLocalStorage';
import { FormikInput, MaskInput } from '@shared/ui/FormikInput';
import { FormikCheckbox } from '@shared/ui/FormikCheckbox';
import { Datepicker } from '@shared/ui/Datepicker';
import { Button } from '@shared/ui/Button';
import { OverlayLoader } from '@features/OverlayLoader';
import { ConditionsModal, ConditionsModalTheme } from '@features/ConditionsModal';
import { userApi } from '@entities/User';
import { localStorageVars } from '@shared/config/localStorage';
import { contactsSchema } from '@shared/const/validationSchemas';
import { initialValues, inputs } from '../../model/data/contactsForm.data';
import { FormStatus, IContactForm } from '../../model/types/ContactsForm.types';
import styles from './Form.module.scss';

type FormProps = {
	className?: string;
	setFormStatus: (status: FormStatus) => void;
};

const Form = ({ className, setFormStatus }: FormProps) => {
	const [modalTheme, setModalTheme] = useState<ConditionsModalTheme>(ConditionsModalTheme.CONDITIONS);
	const [isLoading, setIsLoading] = useState(false);
	const [subParams, setSubParams] = useState<Record<string, string>>({
		sub3: 'empty',
	});
	const { isOpen, open, close } = useToggle();
	const { error } = useToast();
	const { setStorage } = useLocalStorage();
	const searchParams = useSearchParams();

	useEffect(() => {
		const subs: Record<string, string> = {};

		searchParams.forEach((value, key) => {
			if (key.startsWith('sub')) {
				subs[key] = value;
			}
		});

		if (!subs.sub3) {
			subs.sub3 = 'empty';
		}

		setSubParams(subs);
	}, [searchParams]);

	const buildPayload = ({ contact_number, birthday, first_name, last_name, email  }: IContactForm) => ({
		contact_number: cleanPhoneNumber(contact_number),
		birthday: birthday ? birthday.toISOString() : '',
		first_name,
		last_name,
		email,
		...subParams,
	});

	const handleOpenModal = (e: MouseEvent, theme: ConditionsModalTheme) => {
		e.preventDefault();
		setModalTheme(theme);
		open();
	};

	const handleSubmit = useCallback(
		async (values: IContactForm) => {
			try {
				setIsLoading(true);
				await userApi.sendUserData(buildPayload(values));
				handleSubsAndPhone(subParams, cleanPhoneNumber(values.contact_number));
				setStorage(localStorageVars.IS_SEND, 'true');
				setFormStatus(FormStatus.SUCCESS);
			} catch (e) {
				console.error('Error in handleSubmit:', e);
				error('Algo salió mal, ¡inténtalo de nuevo!');
			} finally {
				setIsLoading(false);
			}
		},
		[setFormStatus, error, setStorage, subParams]
	);

	return (
		<>
			<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactsSchema}>
				{({ setFieldValue, values }) => (
					<FormikForm className={classNames(styles.form, {}, [className])}>
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
							<MaskInput name={'contact_number'} mask={'+52 (000) 000-0000'} placeholder={'+52 1 ___ ___ ____'} />
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
										Сonfirmo que he leído y acepto las <span className={styles.form__link}
										                                         onClick={(e) => handleOpenModal(e, ConditionsModalTheme.CONDITIONS)}>condiciones generales</span>, <span
										className={styles.form__link} onClick={(e) => handleOpenModal(e, ConditionsModalTheme.PRIVACY)}>política de privacidad</span> y <span
										className={styles.form__link} onClick={(e) => handleOpenModal(e, ConditionsModalTheme.COOKIE)}>política de cookies</span>.
									</>
								}
							/>
						</div>
						<Button type={'submit'} text={'Continuar'} fluid shadow />
					</FormikForm>
				)}
			</Formik>
			{isLoading && <OverlayLoader />}
			{isOpen && <ConditionsModal isOpen={isOpen} onClose={close} theme={modalTheme}/>}
		</>
	);
};

export { Form };