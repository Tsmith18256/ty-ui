<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import Button from '$lib/components/button/button.svelte';

  export let buttons: ComponentProps<Button>[];
</script>

<div class="container">
  {#each buttons as button}
    <Button {...button} />
  {/each}
</div>

<style>
  .container {
    display: flex;
    flex: 1;

    gap: 0.5rem;
  }
</style>
