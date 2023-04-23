<script>
	import '../app.css';
	import '@fontsource/aleo';
</script>

<div class="bg-gray-200 h-screen">
	<nav class="flex px-6 max-w-7xl py-6 mx-auto justify-between">
		<a href="/" class="my-auto font-black text-4xl font-serif">Exemplary</a>
		<div class="flex px-2 py-6 space-x-6">
			<div class="hidden space-x-8 md:flex">
				<a href="/discover" class="hover:text-gray-500 my-auto">Discover</a>
				<a href="/pricing" class="hover:text-gray-500 my-auto">Pricing</a>
				<a href="/signin" class="hover:text-gray-500 my-auto">Sign In</a>
			</div>
			<a href="/app" class="btn" data-sveltekit-preload-data>Create your library</a>
		</div>
	</nav>
	<!--
	"bg-black text-gray-200 p-2 rounded-lg my-auto shadow-md hover:bg-gray-900 hover:shadow-lg"
-->
	<slot />
</div>
