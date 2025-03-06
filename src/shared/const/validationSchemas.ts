import * as yup from 'yup';

export const ratingSchema = yup.object().shape({
	name: yup.string().trim().required('El nombre es obligatorio'),
	comment: yup.string().trim().required('Se requiere comentario'),
	rating: yup
		.number()
		.required('Se requiere calificación')
		.min(1, 'La calificación debe ser al menos 1')
		.max(5, 'La calificación no puede ser mayor a 5'),
});

export const contactsSchema = yup.object().shape({
	first_name: yup
		.string()
		.trim()
		.required('El campo es obligatorio')
		.max(24, 'El primer nombre debe tener menos de 24 caracteres'),
	last_name: yup
		.string()
		.trim()
		.required('El campo es obligatorio')
		.max(24, 'El apellido debe tener menos de 24 caracteres'),
	birthday: yup
		.date()
		.required('La fecha de nacimiento es obligatoria'),
	email: yup
		.string()
		.trim()
		.email('Dirección de correo electrónico no válida')
		.required('El correo electrónico es obligatorio'),
	phone: yup
		.string()
		.required('Introduzca el número de teléfono')
		.matches(
			/^\+52\s\(\d{3}\)\s\d{3}-\d{4}$/,
			'Formato de número incorrecto. Debe ser +52 (000) 000-0000'
		),
});
