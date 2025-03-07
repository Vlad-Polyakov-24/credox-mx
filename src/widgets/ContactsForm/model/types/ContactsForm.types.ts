import type { IUser } from '@entities/User';

export interface IContactForm extends IUser {
	mailing: boolean;
	conditions: boolean;
}

export enum FormStatus {
	DEFAULT = 'default',
	SUCCESS = 'success',
}