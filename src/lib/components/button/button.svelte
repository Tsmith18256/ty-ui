<script>
  import { BUTTON_APPEARANCES, BUTTON_BACKGROUND_COLORS } from './button.constants.js';

  /**
   * The text to show inside the button.
   *
   * @type {string}
   */
  export let label;

  /**
   * The appearance of the button, which impacts background color.
   *
   * @type { import('./button.constants.js').ButtonAppearance
   */
  export let appearance = BUTTON_APPEARANCES.primary;

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
  {label}
</button>

<style>
  .button {
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
</style>
