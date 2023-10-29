<script lang="ts">
  import { BUTTON_APPEARANCES } from './button.constants.js';
  import type { ButtonAppearance } from './button.types.js';
  import Icon from '$lib/components/icon/icon.svelte';
  import type { IconImage } from '$lib/components/icon/icon.types.js';
  import { getButtonBackgroundColor } from './button.utils.js';
  import { tokens } from '$lib/stores/tokens/tokens.store.js';

  /**
   * The text to show inside the button.
   */
  export let label: string;
  /**
   * The appearance of the button, which impacts background color. If no appearance is provided, the primary color will
   * be used.
   */
  export let appearance: ButtonAppearance = BUTTON_APPEARANCES.primary;
  /**
   * The icon to display next to the label in the button. Only use if an icon button is desired.
   */
  export let icon: IconImage | undefined = undefined;
  /**
   * Whether or not the button is currently disabled.
   */
  export let disabled = false;
  /**
   * Test ID for the button.
   */
  export let testId: string | undefined = undefined;
</script>

<button
  class="button"
  style:--color={$tokens.colors.buttonText}
  style:--background-color={getButtonBackgroundColor(appearance, $tokens.colors)}
  style:--font-family={$tokens.fonts.body.family}
  style:--font-style={$tokens.fonts.body.style}
  {disabled}
  on:click|stopPropagation
  data-testid={testId}
>
  {#if icon}
    <span class="icon">
      <Icon {icon} />
    </span>
  {/if}
  {label}
</button>

<style>
  .button {
    flex: 1;

    min-width: 7rem;
    padding: 1rem 2rem;

    font: var(--font-style) 500 1rem var(--font-family);
    letter-spacing: 0.05rem;

    color: var(--color);
    background-color: var(--background-color);

    border: none;
    border-radius: 0.25rem;

    cursor: pointer;

    &[disabled] {
      opacity: 0.5;
    }

    &:hover {
      background-color: color-mix(in srgb, #000 15%, var(--background-color));
    }

    &:active {
      background-color: color-mix(in srgb, #000 35%, var(--background-color));
    }
  }

  .icon {
    padding-right: 0.25rem;
  }
</style>
