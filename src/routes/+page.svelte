<script>
	import '@fontsource/aleo';
	import image1 from '$lib/images/image1.jpg';
	import image2 from '$lib/images/image2.jpg';
	import image3 from '$lib/images/image3.jpg';
	import image4 from '$lib/images/image4.jpg';
	import image5 from '$lib/images/image5.png';
	import image6 from '$lib/images/image6.jpg';
	import image7 from '$lib/images/image7.jpg';

	let images = [image1, image2, image3, image4, image5, image6, image7];
</script>

<div class="max-w-7xl mx-auto mt-4 md:mt-11">
	<div class="flex flex-col space-y-24">
		<section class="flex flex-col items-center space-y-14 md:space-y-0">
			<div class="flex flex-col space-y-8 px-6">
				<h1 class="text-5xl max-w-md font-bold text-center md:text-6xl md:max-w-lg">
					Empower Your Team With Audiobooks
				</h1>
				<p class="max-w-sm text-center md:max-w-lg md:text-lg">
					Offer your employees access to an audiobook library hand-curated for fostering growth and
					talent development.
				</p>
				<a
					href="/app"
					class="btn w-48 variant-filled bg-secondary-500 mx-auto text-on-primary-token">Discover</a
				>
			</div>
		</section>
		<section>
			<div
				class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10 items-center"
			>
				{#each images as image}
					<div class="snap-align-none shrink-0 card bg-transparent">
						<img src={image} alt="" class="rounded-3xl" />
					</div>
				{/each}
			</div>
		</section>
	</div>
</div>
