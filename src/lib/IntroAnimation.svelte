<script>
  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import { onMount } from "svelte";
  const words = ["My", "", "name", "", "is", "", "Fritz Schubert"];
  let animate = false;

  onMount(() => {
    animate = true;
  });
</script>

<p
  class="min-h-8 font-semibold my-3 text-2xl glowing"
  style="--intensity:2px; --display-color: #01B9C5"
>
  {#if animate}
    {#each words as word, i}
      <span
        in:fly|global={{
          delay: 300 * i,
          duration: 300,
          easing: backOut,
          y: 100,
        }}
      >
        {word}
      </span>
    {/each}
  {/if}
</p>
