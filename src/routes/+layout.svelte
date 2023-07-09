<script>
	// Your selected Skeleton theme:
	import '../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';
</script>

<div class="bg-surface-500 h-screen">
	<nav class="flex flex-col px-6 max-w-7xl py-6 mx-auto">
		<div class="flex justify-between">
			<a href="/" class="my-auto text-4xl font-medium">Exemplary</a>
			<div class="flex px-2 py-6 space-x-6">
				<div class="hidden space-x-8 md:flex">
					<a href="/signin" class="btn bg-initial hover:text-gray-800 my-auto">Sign In</a>
				</div>
				<a
					href="/app"
					class="btn btn-md variant-filled bg-secondary-500 text-on-primary-token"
					data-sveltekit-preload-data>Discover</a
				>
			</div>
		</div>
		<hr class="w-auto h-0.5 bg-primary" />
	</nav>

	<slot />
</div>
