// Utils
import { API_URL } from '$env/static/private';
import HttpClient from '$lib/utils/HttpClient';
import { redirect } from '@sveltejs/kit';

const getUser = async () => {
	try {
		const url = `${API_URL}/user`;
		const service = new HttpClient(undefined).setConfig({ credentials: 'include' });
		const data = await service.get(url);
		return data.json();
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const load = async ({ cookies }) => {
	// request the user data
	const userData = await getUser();
	// if (!userData || !userData.OK) throw redirect(307, '/login');
	return {};
};
