<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { derived } from 'svelte/store';
	import Select from 'svelte-select';
	import { selectedCountryId, selectedState } from '$lib/store';
	import type { State } from '$lib/types';

	$: states = createQuery(
		derived(selectedCountryId, ($selectedCountryId) => ({
			queryKey: ['states', $selectedCountryId],
			queryFn: async () =>
				await fetch(`/api/countries/${$selectedCountryId}`).then((res) => res.json())
		}))
	);

	$: items = $states.data?.map((state: State) => ({
		value: state.id,
		label: state.value
	}));
</script>

<Select
	{items}
	disabled={!$selectedCountryId}
	bind:value={$selectedState}
	placeholder="Select a state"
	class="w-full"
	id="state"
/>
