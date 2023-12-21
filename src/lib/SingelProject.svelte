<script lang="ts">
  export let heading: string;
  export let descriptions: string[];
  export let imageURL: string;
  export let projectLink: string;
  export let displayColor: string;
</script>

<div
  class="flex flex-col md:flex-row items-center my-4 rounded-lg p-4 shadow-2xl backshadow"
>
  <div class="md:w-3/5">
    <a href={projectLink} target="_blank" class={displayColor}>
      <p
        color={displayColor}
        class="flex text-2xl glowing"
        style="--intensity: 2px; --display-color: {displayColor};"
      >
        {heading}
      </p>
    </a>

    {#each descriptions as description}
      <p class="mt-3 font-semibold">{description}</p>
    {/each}
  </div>

  <div class="w-44 mx-auto my-8">
    <a href={projectLink} target="_blank">
      <img src={imageURL} alt={heading} class="rounded-3xl shadow-lg" />
    </a>
  </div>
</div>

<style>
  .backshadow:hover {
    --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
    box-shadow:
      var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000),
      var(--tw-shadow),
      0 0 10px rgba(0, 0, 0, 0.2);
  }
</style>
