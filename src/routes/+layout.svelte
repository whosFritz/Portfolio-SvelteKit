<script>
	import '../app.css';
</script>

<slot />

<style global lang="postcss">
	:global(.fade-in) {
		opacity: 0;
		transition: opacity 1s ease-in-out;
	}
	:global(.fade-in.intersecting) {
		opacity: 1;
	}
	:global(.fade-in-bottom) {
		opacity: 0;
		transform: translateY(50px);
		animation: fadeInBottom 1s ease forwards;
	}
	@keyframes fadeInBottom {
		0% {
			opacity: 0;
			transform: translateY(50px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
	:global(.delay1) {
		animation-delay: 0.5s;
	}
	:global(.delay2) {
		animation-delay: 1s;
	}
	:global(.delay3) {
		animation-delay: 1.5s;
	}
</style>
