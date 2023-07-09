<script>
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
</script>

<div>
	<nav class="flex flex-col px-6 max-w-7xl py-6 mx-auto">
		<div class="flex justify-between">
			<a href="/" class="my-auto text-4xl font-medium">Exemplary</a>
			<div class="flex px-2 py-6 space-x-6">
				<div class="hidden space-x-6 md:flex">
					<a href="/signin" class="btn bg-initial hover:text-gray-800 my-auto">Sign In</a>
				</div>
				<div>
					<form class="input bg-primary-400 flex flex-row space-x-3 p-2">
						<div class="w-5 h-5"><FaSearch /></div>
						<input
							class="hidden bg-primary-400 rounded-full md:block md:w-40"
							type="search"
							placeholder="Search…"
						/>
					</form>
				</div>
			</div>
		</div>
		<hr class="w-auto h-0.5 bg-primary-400" />
	</nav>
</div>
