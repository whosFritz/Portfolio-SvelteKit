<script lang="ts">
	import type { Project } from './types';
	export let project: Project;
</script>

<div
	class="flex flex-col md:flex-row items-center my-4 rounded-3xl p-4 shadow-2xl backshadow growOnHover border border-slate-500"
>
	<div class="md:w-3/5">
		<a href={project.projectLink} target="_blank" class={project.displayColor}>
			<p
				color={project.displayColor}
				class="flex text-2xl glowing"
				style="--intensity: 2px; --display-color: {project.displayColor};"
			>
				{project.heading}
			</p>
		</a>

		{#each project.descriptions as description}
			<p class="mt-3 leading-8 font-semibold">{description}</p>
		{/each}
	</div>

	<div class="w-44 mx-auto my-8">
		<a href={project.projectLink} target="_blank">
			<img src={project.imageURL} alt={project.heading} class="rounded-3xl shadow-lg" />
		</a>
	</div>
</div>

<style>
	.backshadow:hover {
		--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
		--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
		box-shadow:
			var(--tw-ring-offset-shadow, 0 0 #0000),
			var(--tw-ring-shadow, 0 0 #0000),
			var(--tw-shadow),
			0 0 10px rgba(0, 0, 0, 0.2);
	}
	.growOnHover {
		transition: all 0.2s ease-in-out;
	}

	.growOnHover:hover {
		transform: scale(1.05);
	}
</style>
