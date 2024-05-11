import { derived, writable } from 'svelte/store';

export const selectedCountry = writable<{ value: number; label: string } | null>(null);
export const selectedState = writable<{ value: number; label: string } | null>(null);
export const selectedCountryId = derived(selectedCountry, ($selectedCountry) => {
	return $selectedCountry?.value || 0;
});
