<script lang="ts">
	import Spotify from './Spotify.svelte';
	import type { Song } from '../lib/types';

	export let songs: Song[];

	const term_map = new Map([
		['short_term', 'last 4 weeks'],
		['medium_term', 'last 6 months'],
		['long_term', 'over the years']
	]);

	let carouselElement: HTMLElement;
	let selectedIndex = 0;

	function carouselScroll(toImage: number) {
		selectedIndex = toImage;
		carouselElement.scrollTo(carouselElement.clientWidth * toImage + 1, 0);
	}

	function handleScroll() {
		const scrollLeft = carouselElement.scrollLeft;
		const scrollWidth = carouselElement.scrollWidth;
		const clientWidth = carouselElement.clientWidth;

		if (scrollLeft === 0) {
			selectedIndex = 0;
		} else if (scrollLeft + clientWidth === scrollWidth) {
			selectedIndex = songs.length - 1;
		} else {
			selectedIndex = Math.round(scrollLeft / clientWidth);
		}
	}
</script>

<section id="social-media-section" class="my-8">
	<p class="text-center text-3xl font-bold">
		Connect with me on social media
		<span>🥳</span>
	</p>
	<p class="text-center text-lg font-medium my-3">Get to know me better and connect with me on:</p>
	<div class="flex justify-center mt-4 gap-8">
		<a
			rel="noopener noreferrer"
			href="https://www.linkedin.com/in/fritz-schubert-616a00246/"
			target="_blank"
			class="glowing"
			style="--intensity: 4px; --display-color: #0A66C2;"
		>
			<img src="images/linkedin-ico.ico" alt="linkedin" width="48" class="rounded-full" />
		</a>

		<a
			rel="noopener noreferrer"
			href="https://www.instagram.com/whosfritz"
			target="_blank"
			class="glowing"
			style="--intensity: 4px; --display-color: #E1306C;"
		>
			<img src="images/ig64-ico.ico" alt="instagram" width="48" class="rounded-full" />
		</a>
	</div>
	<p class="text-center mt-4">
		Find me on Instagram to see my hobbies including hiking, skiing, traveling, visiting bars and
		cafes.
	</p>
	<p class="text-center mt-4">
		On LinkedIn, I am a becoming software developer constantly looking to expand my network and
		collaborate with other engineers.
	</p>
	<p class="text-center mt-8 font-medium">Check out my fav spotify songs...</p>
	{#if songs.length > 0}
		<div class="flex justify-center w-full py-2 gap-2 mt-4">
			{#each songs as item, i}
				<button
					class="btn btn-xs font-semibold growOnHover"
					class:glowing={i === selectedIndex}
					class:active={i === selectedIndex}
					on:click={() => carouselScroll(i)}>{term_map.get(item.time_range)}</button
				>
			{/each}
		</div>
		<div class="carousel w-full" bind:this={carouselElement} on:scroll={handleScroll}>
			{#each songs as song, i}
				<div id="item{i}" class="carousel-item w-full">
					<Spotify favSongID={song.spotify_id} />
				</div>
			{/each}
		</div>
	{:else}
		<p class="text-center mt-4">No songs found</p>
	{/if}
</section>

<style>
	.active {
		color: rgb(53, 188, 53);
		border: 1px solid rgb(53, 188, 53);
	}
	.carousel-item {
		transition: transform 0.3s ease-in-out;
	}
</style>
