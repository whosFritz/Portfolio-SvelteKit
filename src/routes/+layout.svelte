<script>
  import "../app.css";
</script>

<slot />

<style global lang=postcss>
  :global(.glowing) {
    filter: drop-shadow(0 0 var(--intensity) var(--display-color));
    color: var(--display-color);
  }
</style>
