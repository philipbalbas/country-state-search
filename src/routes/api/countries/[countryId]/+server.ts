import { api } from '$lib/api';
import { json, type RequestHandler } from '@sveltejs/kit';
import { API_KEY, BASE_URL } from '$env/static/private';

export const GET: RequestHandler = async ({ params }) => {
	if (!params.countryId || Number(params.countryId) === 0) {
		return json([]);
	}
	const countries = await api().getStates(Number(params.countryId), {
		url: BASE_URL,
		apiKey: API_KEY
	});
	return json(countries);
};
