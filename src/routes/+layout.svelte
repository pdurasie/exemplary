<script>
	import '../app.css';
	import '@fontsource/aleo';
</script>

<div class="bg-gray-200 h-screen">
	<nav class="flex flex-col px-6 max-w-7xl py-6 mx-auto">
		<div class="flex justify-between">
			<a href="/" class="my-auto font-black text-4xl font-serif text-primary">Exemplary</a>
			<div class="flex px-2 py-6 space-x-6">
				<div class="hidden space-x-8 md:flex">
					<a href="/discover" class="text-primary hover:text-gray-500 my-auto">Discover</a>
					<a href="/pricing" class="text-primary hover:text-gray-500 my-auto">Pricing</a>
					<a href="/signin" class="text-primary hover:text-gray-500 my-auto">Sign In</a>
				</div>
				<a
					href="/app"
					class="btn bg-primary hover:bg-primary-dark text-gray-100 hover:text-gray-200"
					data-sveltekit-preload-data>Create your library</a
				>
			</div>
		</div>
		<hr class="w-auto h-0.5 bg-primary" />
	</nav>

	<slot />
</div>
