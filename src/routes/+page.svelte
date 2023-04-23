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
	<section class="flex flex-col items-center space-y-14 md:space-y-0 md:space-x-12 md:flex-row">
		<div class="flex flex-col space-y-6 px-6">
			<h1 class="text-4xl max-w-md font-bold text-center font-serif md:text-left md:text-5xl">
				Empower Your Team With Audiobooks
			</h1>
			<p class="max-w-sm text-center text-blue-950 font-serif md:text-left">
				Offer your employees a tailored audiobook library to foster growth and strengthen your brand
				identity.
			</p>
			<a href="/app" class="hidden btn w-56 mx-auto md:flex md:mx-0">Create your library</a>
		</div>

		<div class="flex flex-col items-center md:ml-6">
			<div class="carousel carousel-center space-x-2">
				{#each images as image}
					<div class="carousel-item">
						<img src={image} alt="" class="rounded-3xl" />
					</div>
				{/each}
			</div>
		</div>
		<a href="/app" class="flex btn md:hidden">Create your library</a>
	</section>
</div>
