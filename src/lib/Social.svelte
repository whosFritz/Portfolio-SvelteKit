<script>
  import Spotify from "./Spotify.svelte";
  export let favSongID;
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
  <p class="text-center mt-8 font-medium">
    Last 4 weeks, my favorite song was...
  </p>
  <Spotify {favSongID} />
</section>
