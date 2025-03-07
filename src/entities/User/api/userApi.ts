import axios from 'axios';
import { endpoints } from '@shared/const/endpoints';

type IPayload = {
	first_name: string;
	last_name: string;
	contact_number: string;
	email: string;
	birthday: string;
	[subKey: `sub${number}`]: string | undefined;
};

export const userApi = {
	sendUserData: async (payload: IPayload) => {
		const headers = {
			'Content-Type': 'application/json',
		};
		const body = {
			source: 'credox',
			...payload,
		};

		return await axios.post(endpoints.CONTACTS, body, { headers });
	},
};