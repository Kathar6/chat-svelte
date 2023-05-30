import { API_URL } from '$env/static/private';

// Utils
import HttpClient from '$lib/utils/HttpClient';
import { fail, redirect } from '@sveltejs/kit';

import type { Actions } from './$types';

export const load = () => ({});

type LoginPayload = {
	email: string;
	password: string;
};
const login = async (payload: LoginPayload) => {
	try {
		const url = `${API_URL}/login`;
		const body = JSON.stringify(payload);
		const service = new HttpClient(body).setConfig({ credentials: 'include' });
		const response = await service.post(url);
		return response.json();
	} catch (error) {
		return false;
	}
};

export const actions = {
	auth: async ({ request }) => {
		const form = await request.formData();
		const email = form.get('email') as string;
		const password = form.get('password') as string;

		if (!email || !password) {
			return fail(400, {
				message: 'Invalid email or password'
			});
		}
		const data = await login({ email, password });
		console.log(data);
		if (data.OK) {
			throw redirect(303, '/chat');
		}
	}
} satisfies Actions;
