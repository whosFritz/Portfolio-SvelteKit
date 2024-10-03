<script lang="ts">
	import IntroAnimation from './IntroAnimation.svelte';
</script>

<section id="about-section" class="about-section pt-24 fade-in-bottom delay1">
	<div class="flex flex-wrap">
		<div class="w-full md:w-3/5 m-auto md:pr-6">
			<p class="text-3xl font-bold">About Me</p>
			<p class="font-semibold my-2 text-2xl">
				Greetings, visitor!
				<span>👋</span>
			</p>
			<IntroAnimation />
			<p class="mb-4 text-lg">
				Recently graduated with a Bachelor's in Computer Science 🎓. Experienced in software
				development and actively contributing to projects on GitHub. Passionate about dynamic web
				and mobile app development using Java, HTML, CSS, and JavaScript. Frameworks: Flutter,
				Spring Boot, Vaadin, SvelteKit. Aspiring fullstack developer, always eager to learn and stay
				updated on tech trends. Outside of coding, I enjoy hiking 🥾 and exploring Leipzig's
				restaurants 🍴 and bars 🍸.
			</p>
		</div>

		<div class="md:w-2/5 m-auto p-4">
			<img
				alt="fritzfoto.jpg"
				class="rounded-3xl m-auto w-64 md:w-96"
				src="/images/fritzfoto.jpg"
			/>
		</div>
	</div>
</section>

<style>
	/* Keyframes for fade-in-bottom animation */
</style>
