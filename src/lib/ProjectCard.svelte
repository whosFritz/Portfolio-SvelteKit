<script lang="ts">
	import type { Project } from './types';
	export let project: Project;

	import IntersectionObserver from 'svelte-intersection-observer';
	let elementOnce: HTMLDivElement;
	let intersectOnce: boolean;
	let threshold = 0.5;
</script>

<IntersectionObserver
	once
	element={elementOnce}
	bind:intersecting={intersectOnce}
	rootMargin="0px 0px -100px 0px"
	{threshold}
>
	<div
		bind:this={elementOnce}
		class:intersecting={intersectOnce}
		class="flex flex-col md:flex-row items-center my-4 rounded-3xl p-4 shadow-2xl backshadow border border-slate-500 fade-in growOnHover"
	>
		<div class="md:w-3/5">
			<a href={project.projectLink} target="_blank" class={project.displayColor}>
				<p
					color={project.displayColor}
					class="flex text-2xl"
					style="color: {project.displayColor};"
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
</IntersectionObserver>

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
</style>
