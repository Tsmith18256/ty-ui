<script>
  import Icon from '$lib/components/icon/icon.svelte';
  import { BUTTON_APPEARANCES, BUTTON_BACKGROUND_COLORS } from './button.constants.js';

  /**
   * The text to show inside the button.
   *
   * @type {string}
   */
  export let label;

  /**
   * The appearance of the button, which impacts background color. If no appearance is provided, the primary color will
   * be used.
   *
   * @type {import('./button.constants.js').ButtonAppearance}
   */
  export let appearance = BUTTON_APPEARANCES.primary;

  /**
   * The icon to display next to the label in the button. Only use if an icon button is desired.
   *
   * @type {import('$lib/components/icon/icon.constants.js').IconImage | undefined}
   */
  export let icon = undefined;

  /**
   * Whether or not the button is currently disabled.
   */
  export let disabled = false;
</script>

<button
  class="button"
  style:--background-color={BUTTON_BACKGROUND_COLORS[appearance]}
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
    min-width: 7rem;
    padding: 1rem;

    border: none;
    border-radius: 0.25rem;

    color: #eee;
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
