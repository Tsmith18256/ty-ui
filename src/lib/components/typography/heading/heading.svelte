<script lang="ts">
  import { FONTS } from '$lib/constants/fonts/fonts.constants.js';
  import type { HeadingLevel } from './heading.types.js';
  import { tokens } from '$lib/stores/tokens/tokens.store.js';

  /**
   * The level/size of the heading.
   */
  export let level: HeadingLevel;
</script>

<svelte:element
  this={level}
  class="heading"
  style:--font-family={FONTS.heading.family}
  style:--font-weight={FONTS.heading.weight}
  style:--font-style={FONTS.heading.style}
  style:--color={$tokens.colors.text}
>
  <slot />
</svelte:element>

<style>
  .heading {
    font-family: var(--font-family);
    font-weight: var(--font-weight);
    font-style: var(--font-style);

    color: var(--color);
  }
</style>
