<script lang="ts">
	import { selectedCountry, selectedState } from '$lib/store';
</script>

<section class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
	<div class="container px-4 md:px-6">
		<div class="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
			<div class="flex flex-col justify-center space-y-4">
				<div class="space-y-2">
					<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
						About the {$selectedState?.label}, {$selectedCountry?.label}
					</h2>
					<p
						class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
					>
						The country is known for its diverse geography, rich cultural heritage, and vibrant
						history. Situated in the heart of the region, the state is a unique blend of natural
						wonders and modern development.
					</p>
					<p
						class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
					>
						From the towering mountains in the north to the lush, rolling hills in the south, the
						country's landscape is truly breathtaking. The state is home to a diverse array of flora
						and fauna, with many endemic species found nowhere else in the world.
					</p>
					<p
						class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
					>
						Culturally, the country is a melting pot of influences, with a rich tapestry of
						traditions, art, and cuisine. The state is known for its vibrant festivals, lively music
						scene, and unique architectural styles that reflect the region's history.
					</p>
				</div>
			</div>
			<img
				alt="Scenic view of the country"
				class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
				height="310"
				src="/beach.jpg"
				width="550"
			/>
		</div>
	</div>
</section>
