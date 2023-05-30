import { API_URL } from '$env/static/private';

// Utils
import HttpClient from '$lib/utils/HttpClient';

import type { Actions } from '@sveltejs/kit';

export const load = () => ({});

type RegisterPayload = {
	email: string;
	password: string;
	'confirm-password': string;
};

const register = async (payload: RegisterPayload) => {
	try {
		const url = `${API_URL}/register`;
		const body = JSON.stringify(payload);
		const service = new HttpClient(body);
		const response = await service.post(url);
		return response.json();
	} catch (error) {
		return false;
	}
};

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const confirmPassword = formData.get('confirm-password') as string;
		const data = await register({ email, password, 'confirm-password': confirmPassword });
	}
} satisfies Actions;
