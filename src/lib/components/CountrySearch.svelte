<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import Select from 'svelte-select';
	import { selectedCountry, selectedState } from '$lib/store';
	import type { Country } from '$lib/types';

	const countries = createQuery({
		queryKey: ['countries'],
		queryFn: async () => await fetch('/api/countries').then((res) => res.json())
	});

	$: items = $countries.data?.map((country: Country) => ({
		value: country.id,
		label: country.value
	}));
</script>

<Select
	{items}
	bind:value={$selectedCountry}
	placeholder="Select a country"
	on:select={() => ($selectedState = null)}
	class="w-full"
	id="country"
/>
