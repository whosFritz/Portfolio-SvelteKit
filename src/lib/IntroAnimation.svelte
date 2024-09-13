<script>
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	const words = ['My', 'name', 'is', 'Fritz', 'Schubert'];
	let animate = false;

	onMount(() => {
		setTimeout(() => {
			animate = true;
		}, 2000); // Verzögerung von 2000 Millisekunden (2 Sekunden)
	});
</script>

<p class="min-h-8 font-semibold my-3 text-2xl">
	{#if animate}
		{#each words as word, i}
			<span
				class="text-emerald-500"
				in:fly|global={{
					delay: 400 * i,
					duration: 500,
					easing: backOut,
					y: 100
				}}
			>
				{word}
			</span>
		{/each}
	{/if}
</p>
