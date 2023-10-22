<script lang="ts">
  import { BUTTON_APPEARANCES } from '$lib/components/button/button.constants.js';
  import type { ButtonAppearance } from '$lib/components/button/button.types.js';
  import { getButtonBackgroundColor } from '$lib/components/button/button.utils.js';
  import Icon from '$lib/components/icon/icon.svelte';
  import type { IconImage } from '$lib/components/icon/icon.types.js';
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
</script>

<button
  class="button"
  style:--color={$tokens.colors.buttonText}
  style:--background-color={getButtonBackgroundColor(appearance, $tokens.colors)}
  {disabled}
  on:click|stopPropagation
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
    padding: 1rem;

    border: none;
    border-radius: 0.25rem;

    color: var(--color);
    font-weight: bold;

    background-color: var(--background-color);

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
