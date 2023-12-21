<script lang="ts">
  import Spotify from "./Spotify.svelte";

  export let songs: [...any];

  let term_map = new Map([
    ["short_term", "last 4 weeks"],
    ["medium_term", "last 6 months"],
    ["long_term", "all Time"],
  ]);
  let carouselElement;

  function carouselScroll(toImage) {
    console.log("scrolling to image", toImage);

    // Scroll to takes 2 arguments. One is the pixel in the x axis, the second is the pixel in the y axis
    // We take the clientWidth of the carousel element and add 1 pixel to scroll to the given image
    carouselElement.scrollTo(
      carouselElement.clientWidth * (toImage - 1) + 1,
      0
    );
  }
</script>

<section id="social-media-section" class="my-8">
  <p class="text-center text-3xl font-bold">
    Connect with me on social media
    <span class="glowing" style="--intensity:4px; --display-color: #eacf39 "
      >🥳</span
    >
  </p>
  <p class="text-center text-lg font-medium my-3">
    Get to know me better and connect with me on:
  </p>
  <div class="flex justify-center mt-4 gap-8">
    <a
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/fritz-schubert-616a00246/"
      target="_blank"
      class="glowing"
      style="--intensity: 4px; --display-color: #0A66C2;"
    >
      <img
        src="images/linkedin-ico.ico"
        alt="linkedin"
        width="48"
        class="rounded-full"
      />
    </a>

    <a
      rel="noopener noreferrer"
      href="https://www.instagram.com/whosfritz"
      target="_blank"
      class="glowing"
      style="--intensity: 4px; --display-color: #E1306C;"
    >
      <img
        src="images/ig64-ico.ico"
        alt="instagram"
        width="48"
        class="rounded-full"
      />
    </a>
  </div>
  <p class="text-center mt-4">
    Find me on Instagram to see my hobbies including hiking, skiing, traveling,
    visiting bars and cafes.
  </p>
  <p class="text-center mt-4">
    On LinkedIn, I am a becoming software developer constantly looking to expand
    my network and collaborate with other engineers.
  </p>
  <p class="text-center mt-8 font-medium">Check out my fav spotify songs...</p>
  <div class="flex justify-center w-full py-2 gap-2 mt-4">
    {#each songs as item, i}
      <button class="btn btn-xs" on:click={() => carouselScroll(i + 1)}
        >{term_map.get(item.scope)}</button
      >
      <!-- Use anonymous event handling call to pass custom argument (the image number)-->
    {/each}
  </div>
  <div class="carousel w-full" bind:this={carouselElement}>
    <!-- Bind this to carousel element to call scrollTo()-->
    {#each songs as item, i}
      <!-- content here -->
      <div id="item{i}" class="carousel-item w-full">
        <Spotify favSongID={item.spotify_id} />
      </div>
    {/each}
  </div>
</section>
