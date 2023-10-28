<script lang="ts">
  import { FONTS } from '$lib/constants/fonts/fonts.constants.js';
  import type { IToggleButton } from './toggle-buttons.types.js';
  import { tokens } from '$lib/stores/tokens/tokens.store.js';

  export let groupName: string;
  export let toggleButtons: IToggleButton[];
  /**
   * @todo How to use a generic to ensure this is always one of the IToggleButton values?
   */
  export let value: string;
</script>

<div class="container">
  {#each toggleButtons as toggleButton, index}
    <div
      class="toggle-button"
      class:toggle-button-first={index === 0}
      class:toggle-button-last={index === toggleButtons.length - 1}
      class:toggle-button-active={value === toggleButton.value}
      style:--font-family={FONTS.body.family}
      style:--font-style={FONTS.body.style}
      style:--background-color={value === toggleButton.value
        ? $tokens.colors.primary
        : $tokens.colors.inactiveToggleButtonBackground}
    >
      <input
        class="input"
        type="radio"
        id="{groupName}.{toggleButton.value}"
        name={groupName}
        value={toggleButton.value}
        bind:group={value}
      />
      <label
        class="label"
        style:--color={value === toggleButton.value
          ? $tokens.colors.buttonText
          : $tokens.colors.inactiveToggleButtonColor}
        for="{groupName}.{toggleButton.value}">{toggleButton.label}</label
      >
    </div>
  {/each}
</div>

<style>
  .container {
    display: flex;
  }

  .input {
    display: none;
  }

  .label {
    /* Label needs to take up the whole button to make the whole button clickable. */
    display: block;
    height: 100%;
    width: 100%;

    font: var(--font-style) 500 1rem var(--font-family);
    letter-spacing: 0.05rem;

    color: var(--color);
  }

  .toggle-button {
    width: 7rem;

    margin-bottom: 0.3rem;
    padding: 0.5rem;

    text-align: center;

    background-color: var(--background-color);
  }

  .toggle-button-active {
    background-color: #0e21a0;
  }

  .toggle-button-first {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .toggle-button-last {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
</style>
