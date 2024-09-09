<script>
	import '../app.css';
</script>

<slot />

<style global lang="postcss">
	:global(.growOnHover) {
		transition: all 0.2s ease-in-out;
	}

	:global(.growOnHover:hover) {
		transform: scale(1.05);
	}

	:global(.fade-in) {
		opacity: 0;
		transition: opacity 1s ease-in-out;
	}
	:global(.fade-in.intersecting) {
		opacity: 1;
	}
</style>
