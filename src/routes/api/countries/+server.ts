import { api } from '$lib/api';
import { json, type RequestHandler } from '@sveltejs/kit';
import { API_KEY, BASE_URL } from '$env/static/private';

export const GET: RequestHandler = async () => {
	const countries = await api().getCountries({
		url: BASE_URL,
		apiKey: API_KEY
	});
	return json(countries);
};
