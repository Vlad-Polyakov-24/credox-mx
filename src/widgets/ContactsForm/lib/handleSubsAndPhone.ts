import { setCookie } from 'cookies-next';

export const handleSubsAndPhone = (subs: Record<string, string>, phone: string) => {
	if (subs) {
		Object.entries(subs).forEach(([key, value]) => {
			if (value) {
				setCookie(key, value);
			}
		});
	}

	if (phone) {
		setCookie('phone', phone);
	}
};