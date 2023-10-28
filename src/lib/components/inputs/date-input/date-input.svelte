<script lang="ts">
  import { tokens } from '$lib/stores/tokens/tokens.store.js';

  /**
   * The ID to apply to the input field. This is required so the <label /> tag can work properly.
   */
  export let id: string;
  /**
   * The label text to display.
   */
  export let label: string;
  /**
   * The current value of the date field.
   */
  export let value: string | undefined = undefined;
  /**
   * Test ID for the date input. Will be applied to the <div /> tag that surrounds the <input /> and <label /> tags.
   */
  export let testId: string | undefined = undefined;
</script>

<div class="input-container" data-testid={testId}>
  <label class="label" for={id}>{label}</label>
  <input
    {id}
    class="input"
    style:--background-color={$tokens.colors.background}
    style:--border-color={$tokens.colors.border}
    type="date"
    bind:value
  />
</div>

<style>
  .label {
    display: inline-block;
    width: 10rem;
  }

  .input {
    flex: 1;

    padding: 0.5rem;

    background-color: var(--background-color);
    border: var(--border-color);
    border-radius: 0.25rem;

    &::-webkit-calendar-picker-indicator {
      color-scheme: dark;
    }
  }

  .input-container {
    display: flex;
    align-items: center;
  }
</style>
