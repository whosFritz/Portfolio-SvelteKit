<script lang="ts">
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";
  let theme: string | null;
  let spam_counter = 0;

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false);
    theme = document.documentElement.getAttribute("data-theme");
  });

  function toggleTheme() {
    spam_counter++;
    theme = document.documentElement.getAttribute("data-theme");
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
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </div>
      <ul
        class="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="#about-section">About me</a></li>
        <li><a href="#github-section">GitHub</a></li>
        <li><a href="#social-media-section">Social Media Sites</a></li>
        <li><a href="#projects-section">Projects</a></li>
        <li><a href="#contact-section">Contact</a></li>
      </ul>
    </div>
    <span class="btn btn-ghost text-xl">
      <img src="/favicon-fritz.png" alt="" class="w-5">
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
    {#if spam_counter < 10}      
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
          ><circle cx="12" cy="12" r="5" /><path
            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
          /></svg
        >
        <input
          type="checkbox"
          value={theme}
          class="toggle theme-controller"
          data-toggle-theme="dark,winter"
          on:change={toggleTheme}
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
          ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"> </path>
        </svg>
      </label>
    {/if}
  </div>
</div>
