<script lang="ts">
  import Navigation from "../lib/Navigation.svelte";

  import About from "../lib/About.svelte";
  import Footer from "../lib/Footer.svelte";
  import Github from "../lib/Github.svelte";
  import Social from "../lib/Social.svelte";
  import Projects from "../lib/Projects.svelte";
  import CookieBanner from "../lib/CookieBanner.svelte";
  import Contact from "../lib/Contact.svelte";
  import Divider from "../lib/Divider.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
  let { favSongs, consentCookie } = data;
</script>

<Navigation />
<section class="container mx-auto px-4 md:px-6 lg:px-8">
  <About />
  <Divider />
  <Github />
  <Divider />
  <Social
  songs={favSongs}
  />
  <Divider />
  <Projects />
  <Divider />
  <Contact />
</section>
<CookieBanner acceptedCookies={consentCookie} />
<Footer />
