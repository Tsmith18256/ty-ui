<script lang="ts">
  import { ICON_SIZES } from '$lib/components/icon/icon.constants.js';
  import Icon from '$lib/components/icon/icon.svelte';
  import type { IconImage } from '$lib/components/icon/icon.types.js';
  import { tokens } from '$lib/stores/tokens/tokens.store.js';

  /**
   * The icon to display in the floating action button.
   */
  export let icon: IconImage;
  /**
   * Test ID for the button.
   */
  export let testId: string | undefined = undefined;
</script>

<button
  class="button"
  style:--background-color={$tokens.colors.quaternary}
  on:click|stopPropagation
  data-testid={testId}
>
  <Icon {icon} size={ICON_SIZES.extraLarge} />
</button>

<style>
  .button {
    --button-width: 5rem;

    position: fixed;
    bottom: 6rem;
    right: 1rem;

    width: var(--button-width);
    height: var(--button-width);

    background-color: var(--background-color);
    border: none;
    border-radius: 50%;
  }
</style>
