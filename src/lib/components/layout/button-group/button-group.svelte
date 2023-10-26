<script lang="ts">
  import Button from '$lib/components/button/button.svelte';
  import type { ComponentProps } from 'svelte';

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
