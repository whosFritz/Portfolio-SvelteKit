<script>
	import '../app.css';
</script>

<slot />

<style global lang="postcss">
	:global(.glowing) {
		color: var(--display-color);
	}

	:global(.growOnHover) {
		transition: all 0.2s ease-in-out;
	}

	:global(.growOnHover:hover) {
		transform: scale(1.05);
	}
</style>
