<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { derived } from 'svelte/store';
	import Select from 'svelte-select';
	import { selectedCountryId, selectedState } from '$lib/store';
	import type { State } from '$lib/types';

	const states = createQuery(
		derived(selectedCountryId, ($selectedCountryId) => ({
			queryKey: ['states', $selectedCountryId],
			queryFn: async () => {
				if (!$selectedCountryId) {
					return [];
				}

				try {
					const response = await fetch(`/api/countries/${$selectedCountryId}`);

					if (!response.ok) {
						const errorText = await response.text();
						throw new Error(`API error: ${response.status} - ${errorText}`);
					}

					return await response.json();
				} catch (error: any) {
					const errorMessage = `Failed to fetch states'}`;
					throw new Error(error.message || errorMessage);
				}
			}
		}))
	);

	$: items =
		(!$states.error &&
			$states.data?.map((state: State) => ({
				value: state.id,
				label: state.value
			}))) ||
		[];
</script>

{#if $states.error}
	<div class="text-red-500">
		<p>{$states.error.message}</p>
	</div>
{:else}
	<Select
		{items}
		disabled={!$selectedCountryId}
		bind:value={$selectedState}
		placeholder="Select a state"
		class="w-full"
		id="state"
	/>
{/if}
