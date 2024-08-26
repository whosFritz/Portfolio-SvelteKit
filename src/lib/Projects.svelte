<script lang="ts">
	import SingelProject from './ProjectCard.svelte';
	import Divider from './Divider.svelte';
	import { projects } from './projects';
</script>

<section id="projects-section" class="my-12">
	<p class="text-center text-3xl font-bold my-8">
		<span> Projects </span>
		<span> 🚀 </span>
	</p>
	{#each projects as project, i}
		<SingelProject {project} />
		{#if i < projects.length - 1}
			<Divider />
		{/if}
	{/each}
</section>
