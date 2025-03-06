export const initialValues = {
	first_name: '',
	last_name: '',
	birthday: null,
	email: '',
	phone: '',
};

export const inputs = [
	{
		name: 'first_name',
    placeholder: 'Nombre',
	},
	{
		name: 'last_name',
		placeholder: 'Apellido paterno ',
	},
	{
		name: 'birthday',
		placeholder: 'DD/MM/YYYY',
		type: 'date',
	},
	{
		name: 'email',
		placeholder: 'Email',
		type: 'email',
	},
];