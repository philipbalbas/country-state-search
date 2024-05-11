<script>
	import { selectedCountry, selectedState } from '$lib/store';
</script>

{#if $selectedCountry && $selectedState}
	<a href="/country/{$selectedCountry.value}/state/{$selectedState.value}">
		<div class="bg-white shadow hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg">
			<div class="flex items-center gap-4">
				<div>
					<h3 class="text-lg font-semibold">{$selectedCountry?.label}</h3>
					<p class="text-gray-500 dark:text-gray-400">{$selectedState?.label}</p>
				</div>
			</div>
		</div>
	</a>
{/if}
