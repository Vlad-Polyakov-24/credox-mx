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
