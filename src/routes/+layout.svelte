<script>
  import "../app.css";
</script>

<slot />

<style global lang=postcss>
  :global(.glowing) {
    color: var(--display-color);
  }
</style>
