import { api } from '$lib/api';
import { json, type RequestHandler, error } from '@sveltejs/kit';
import { API_KEY, BASE_URL } from '$env/static/private';

export const GET: RequestHandler = async () => {
	try {
		const { data: countries, error: fetchError } = await api().getCountries({
			url: BASE_URL,
			apiKey: API_KEY
		});

		if (fetchError) {
			return error(fetchError.status, {
				message: fetchError.message
			});
		}
		return json(countries, { status: 200 });
	} catch (catchError: any) {
		const errorMessage = `An unexpected error occurred while fetching countries`;
		return error(catchError.status || 500, {
			message: catchError.message || catchError.body.message || errorMessage
		});
	}
};
