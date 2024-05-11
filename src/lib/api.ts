import type { Country, State } from './types';

export const api = (customFetch = fetch) => ({
	getCountries: async ({ url, apiKey }: { url: string; apiKey: string }) => {
		const response = await customFetch(url, {
			headers: { 'x-api-key': apiKey }
		});
		if (!response.ok) {
			console.error('Failed to fetch countries:', response.statusText);
			return [];
		}
		const countries = (await response.json()) as Country[];

		return countries;
	},
	getStates: async (countryId: number, { url, apiKey }: { url: string; apiKey: string }) => {
		if (!countryId) {
			return [];
		}

		const response = await customFetch(`${url}/${countryId}/states`, {
			headers: { 'x-api-key': apiKey }
		});
		if (!response.ok) {
			console.error('Failed to fetch states:', response.statusText);
			return [];
		}
		const states = (await response.json()) as State[];
		return states;
	}
});
