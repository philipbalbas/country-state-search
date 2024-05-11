import type { Country, State } from './types';

type ApiResult<T> = {
	data: T | [];
	error: {
		message: string;
		status: number;
	} | null;
};

export const api = (customFetch = fetch) => ({
	async getCountries({
		url,
		apiKey
	}: {
		url: string;
		apiKey: string;
	}): Promise<ApiResult<Country[]>> {
		try {
			const response = await customFetch(url, {
				headers: { 'x-api-key': apiKey }
			});

			if (!response.ok) {
				const errorMessage = `Failed to fetch countries: ${response.statusText} (${response.status})`;
				console.error(errorMessage);
				return {
					data: [],
					error: {
						message: errorMessage,
						status: response.status
					}
				};
			}

			const countries = (await response.json()) as Country[];
			return { data: countries, error: null };
		} catch (error: any) {
			const errorMessage = `An error occurred while fetching countries: ${error.message}`;
			console.error(errorMessage);
			return { data: [], error: { message: errorMessage, status: error.status } };
		}
	},

	async getStates(
		countryId: number,
		{ url, apiKey }: { url: string; apiKey: string }
	): Promise<ApiResult<State[]>> {
		if (!countryId) {
			const errorMessage = 'A valid country ID must be provided to fetch states.';
			console.error(errorMessage);
			return {
				data: [],
				error: {
					message: errorMessage,
					status: 400
				}
			};
		}

		try {
			const response = await customFetch(`${url}/${countryId}/states`, {
				headers: { 'x-api-key': apiKey }
			});

			if (!response.ok) {
				const errorMessage = `Failed to fetch states: ${response.statusText} (${response.status})`;
				console.error(errorMessage);
				return {
					data: [],
					error: {
						message: errorMessage,
						status: response.status
					}
				};
			}

			const states = (await response.json()) as State[];
			return { data: states, error: null };
		} catch (error: any) {
			const errorMessage = `An error occurred while fetching states: ${error.message}`;
			console.error(errorMessage);
			return {
				data: [],
				error: {
					message: errorMessage,
					status: error.status
				}
			};
		}
	}
});
