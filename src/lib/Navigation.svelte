<script lang="ts">
	import DarkmodeToggle from './DarkmodeToggle.svelte';
</script>

<div class="navbar fixed bg-base-200 z-10">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost md:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
			<ul class="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
				<li><a href="#about-section">About me</a></li>
				<li><a href="#github-section">GitHub</a></li>
				<li><a href="#social-media-section">Social Media Sites</a></li>
				<li><a href="#projects-section">Projects</a></li>
				<li><a href="#contact-section">Contact</a></li>
			</ul>
		</div>
		<span class="btn btn-ghost text-xl">
			<img src="/favicon-fritz.png" alt="logo" class="w-5" />
			<a href="/">whosfritz</a>
		</span>
	</div>
	<div class="navbar-center hidden md:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a class="" href="#about-section">About me</a></li>
			<li><a class="" href="#github-section">GitHub</a></li>
			<li><a class="" href="#social-media-section">Social Media Sites</a></li>
			<li><a class="" href="#projects-section">Projects</a></li>
			<li><a class="" href="#contact-section">Contact</a></li>
		</ul>
	</div>
	<div class="navbar-end md:flex mr-6">
		<DarkmodeToggle />
	</div>
</div>
