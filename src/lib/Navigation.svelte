<script lang="ts">
  import { onMount } from 'svelte';
  import { THEMES } from '$lib/index';

  let current_theme: string;
  let isDarkTheme = false;

  onMount(() => {
    const saved_theme = document.documentElement.getAttribute('data-theme');
    if (saved_theme && Object.values(THEMES).includes(saved_theme)) {
      current_theme = saved_theme;
      isDarkTheme = current_theme === THEMES.DARK;
      return;
    }

    const preference_is_dark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const theme = preference_is_dark ? THEMES.DARK : THEMES.LIGHT;
    set_theme(theme);
    isDarkTheme = theme === THEMES.DARK;
  });

  function set_theme(theme: string) {
    if (!Object.values(THEMES).includes(theme)) return;
    const one_year = 60 * 60 * 24 * 365;
    document.cookie = `theme=${theme}; max-age=${one_year}; path=/`;
    document.documentElement.setAttribute('data-theme', theme);
    current_theme = theme;
    isDarkTheme = current_theme === THEMES.DARK;
    console.log(`Checkbox is now: ${isDarkTheme ? 'checked' : 'unchecked'}`);
  }

  function toggle_theme(): void {
    const theme = current_theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    set_theme(theme);
  }
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
      <img src="/favicon-fritz.png" alt="" class="w-5" />
      <a href="/">whosfritz</a>
    </span>
  </div>
  <div class="navbar-center hidden md:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="#about-section">About me</a></li>
      <li><a href="#github-section">GitHub</a></li>
      <li><a href="#social-media-section">Social Media Sites</a></li>
      <li><a href="#projects-section">Projects</a></li>
      <li><a href="#contact-section">Contact</a></li>
    </ul>
  </div>
  <div class="navbar-end md:flex mr-6">
    <label class="flex cursor-pointer gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path
          d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
        />
      </svg>
      <input
        type="checkbox"
        class="toggle"
        aria-label="toggle theme"
        on:click={toggle_theme}
        bind:checked={isDarkTheme}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"> </path>
      </svg>
    </label>
  </div>
</div>
