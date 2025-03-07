import { localStorageVars } from '@shared/config/localStorage';

export const useLocalStorage = () => {

	const setStorage = (key: localStorageVars, value: string) => localStorage.setItem(key, value);

	const getStorage = (value: localStorageVars) => localStorage.getItem(value);

	const removeStorage = (value: localStorageVars) => localStorage.removeItem(value);

	return { setStorage, getStorage, removeStorage };
};