<script lang="ts">
	import CountrySearch from '$lib/components/CountrySearch.svelte';
	import ProvinceCard from '$lib/components/ProvinceCard.svelte';
	import StateSearch from '$lib/components/StateSearch.svelte';
</script>

<div class="grid gap-4 sm:grid-cols-2">
	<div>
		<label class="block text-sm font-medium" for="country">Country</label>
		<CountrySearch />
	</div>
	<div>
		<label class="block text-sm font-medium" for="state">State/Province</label>
		<StateSearch />
	</div>
</div>
<ProvinceCard />
