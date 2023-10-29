<script lang="ts">
  import { DISPLAY_TEXT_SIZES, DISPLAY_TEXT_TAGS } from '$lib/components/typography/display-text/display-text.constants.js';
  import type { DisplayTextSize, DisplayTextTag } from '$lib/components/typography/display-text/display-text.types.js';
  import { tokens } from '$lib/stores/tokens/tokens.store.js';

  /**
   * The tag to use for this display text. Defaults to `<span />`.
   */
  export let tag: DisplayTextTag = DISPLAY_TEXT_TAGS.span;

  /**
   * The size of the text to display.
   */
  export let size: DisplayTextSize = DISPLAY_TEXT_SIZES.medium;
</script>

<svelte:element
  this={tag}
  class="display-text"
  style:--font-family={$tokens.fonts.body.family}
  style:--font-weight={tag === DISPLAY_TEXT_TAGS.strong ? 'bold' : $tokens.fonts.body.weight}
  style:--font-style={tag === DISPLAY_TEXT_TAGS.em ? 'italic' : $tokens.fonts.body.style}
  style:--font-size={size}
  style:--color={$tokens.colors.text}
>
  <slot />
</svelte:element>

<style>
  .display-text {
    font: var(--font-style) var(--font-weight) var(--font-size) var(--font-family);
    color: var(--color);
  }
</style>
