import { api } from '$lib/api';
import { json, error, type RequestHandler } from '@sveltejs/kit';
import { API_KEY, BASE_URL } from '$env/static/private';

export const GET: RequestHandler = async ({ params }) => {
	const countryId = Number(params.countryId);
	if (isNaN(countryId) || countryId === 0) {
		return error(400, {
			message: 'A valid country ID must be provided.'
		});
	}

	try {
		const { data: states, error: fetchError } = await api().getStates(countryId, {
			url: BASE_URL,
			apiKey: API_KEY
		});

		if (fetchError) {
			const errorMessage = `Failed to fetch states: ${fetchError}`;
			return error(500, {
				message: errorMessage
			});
		}

		return json(states, { status: 200 });
	} catch (catchError: any) {
		const errorMessage = `An unexpected error occurred while fetching states: ${catchError.message}`;
		return error(500, {
			message: errorMessage
		});
	}
};
