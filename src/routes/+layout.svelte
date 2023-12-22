<script>
  import "../app.css";
</script>

<slot />

<style global>
  :global(.glowing) {
    filter: drop-shadow(0 0 var(--intensity) var(--display-color));
    color: var(--display-color);
  }

  :global(.glowing2) {
    filter: drop-shadow(0 0 var(--intensity) var(--display-color));
  }
</style>
