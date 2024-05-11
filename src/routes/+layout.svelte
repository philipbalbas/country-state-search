<script lang="ts">
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools';
	import type { PageData } from './$types';
	import '../app.css';

	export let data: PageData;
</script>

<QueryClientProvider client={data.queryClient}>
	<main>
		<header class="bg-gray-100 py-4 dark:bg-gray-800 flex flex-col justify-center items-center">
			<div class="container px-4 md:px-6">
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-4">
						<img src="/globe.svg" alt="Logo" class="h-6 w-6" />
						<h1 class="text-xl font-bold">Country Selector</h1>
					</div>
					<nav>
						<ul class="flex items-center gap-4">
							<li>
								<a
									class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
									href="/"
								>
									Home
								</a>
							</li>
							<li>
								<a
									class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
									href="/about"
								>
									About
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
		<section class="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
			<div class="container grid gap-8 px-4 md:px-6">
				<slot />
			</div>
		</section>
	</main>
	<SvelteQueryDevtools />
</QueryClientProvider>
