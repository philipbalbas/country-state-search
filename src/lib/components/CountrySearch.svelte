<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import Select from 'svelte-select';
	import { selectedCountry, selectedState } from '$lib/store';
	import type { Country } from '$lib/types';

	const countries = createQuery({
		queryKey: ['countries'],
		queryFn: async () => {
			try {
				const response = await fetch('/api/countries');

				if (!response.ok) {
					const errorText = await response.text();

					const parseError = await JSON.parse(errorText);

					throw new Error(parseError.message || errorText);
				}

				return await response.json();
			} catch (error: any) {
				const errorMessage = `Failed to fetch countries'}`;
				throw new Error(error.message || errorMessage);
			}
		}
	});

	$: items =
		(!$countries.error &&
			$countries.data?.map((country: Country) => ({
				value: country.id,
				label: country.value
			}))) ||
		[];
</script>

{#if $countries.error}
	<div class="text-red-500">
		<p>{$countries.error.message}</p>
	</div>
{:else}
	<Select
		{items}
		bind:value={$selectedCountry}
		placeholder="Select a country"
		on:select={() => ($selectedState = null)}
		class="w-full"
		id="country"
	/>
{/if}
