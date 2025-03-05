'use client';

import { useCallback, useState } from 'react';
import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from 'formik';
import { classNames } from '@shared/lib/classNames';
import { useToast } from '@shared/hooks/useToast';
import { Button } from '@shared/ui/Button';
import { Rating } from '@features/Rating';
import { OverlayLoader } from '@features/OverlayLoader';
import { ErrorIcon } from '../ErrorIcon/ErrorIcon';
import { ratingSchema } from '@shared/const/validationSchemas';
import { initialValues } from '../../model/data/ratingForm.data';
import type { IRatingForm } from '../../model/types/RatingForm.types';
import styles from './RatingForm.module.scss';

type RatingFormProps = {
	className?: string;
};

const RatingForm = ({ className }: RatingFormProps) => {
	const { success } = useToast();
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = useCallback(
		(_: IRatingForm, { resetForm }: FormikHelpers<IRatingForm>) => {
			setIsLoading(true);

			setTimeout(() => {
				success('¡Su comentario ha sido enviado!');
				resetForm();
				setIsLoading(false);
			}, 1000);
		},
		[success]
	);

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ratingSchema}>
			{({ values, setFieldValue }) => (
				<Form className={classNames(styles.form, {}, [className])}>
					<div className={styles.form__inner}>
						{isLoading && <OverlayLoader/>}
						<div className={styles.form__row}>
							<Field
								name={'name'}
								className={styles.form__input}
								placeholder={'Su nombre'}
							/>
							<ErrorMessage name={'name'} render={() => <ErrorIcon/>}/>
						</div>
						<div className={styles.form__row}>
							<Field
								as={'textarea'}
								name={'comment'}
								className={styles.form__textarea}
								placeholder={'Deja tu comentario aquí…'}
							/>
							<ErrorMessage name={'comment'} render={() => <ErrorIcon/>}/>
						</div>
						<div className={styles.form__row}>
							<Rating
								className={'ml-a'}
								rating={values.rating}
								onChange={(value) => setFieldValue('rating', value)}
							/>
							<ErrorMessage name={'rating'} render={() => <ErrorIcon/>}/>
						</div>
					</div>
					<Button type={'submit'} text={'Envía tu solicitud'} fluid shadow />
				</Form>
			)}
		</Formik>
	);
};

export default RatingForm;