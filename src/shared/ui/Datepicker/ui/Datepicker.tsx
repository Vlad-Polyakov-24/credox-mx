import DatePicker from 'react-datepicker';
import { ErrorMessage, useField } from 'formik';
import { classNames } from '@shared/lib/classNames';
import { ErrorIcon } from '@shared/ui/ErrorIcon';
import styles from './Datepicker.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

interface DatepickerProps {
	className?: string;
	name: string;
	label?: string;
	placeholder?: string;
	date?: Date | null;
	onChange?: (date: Date | null) => void;
}

const Datepicker = (props: DatepickerProps) => {
	const { className, name, label, placeholder, date, ...rest } = props;
	const [, meta] = useField(name);
	const isError = meta.touched && meta.error;

	return (
		<label className={classNames(styles.datepicker, { [styles['datepicker--error']]: isError }, [className])}>
			{label && <p className={styles.datepicker__caption}>{label}</p>}
			<span className={styles.datepicker__wrapper}>
				<DatePicker
					className={styles.datepicker__field}
					placeholderText={placeholder}
					dateFormat={'dd/MM/yyyy'}
					isClearable={true}
					selected={date}
					showIcon
					calendarIconClassName={styles['datepicker__calendar-icon']}
					{...rest}
				/>
				{isError && <ErrorMessage name={name} render={() => <ErrorIcon />} />}
			</span>
		</label>
	);
};

export { Datepicker };