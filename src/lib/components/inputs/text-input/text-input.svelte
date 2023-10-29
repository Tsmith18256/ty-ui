<script lang="ts">
  import type { FormEventHandler } from 'svelte/elements';
  import { TEXT_INPUT_TYPES } from '$lib/components/inputs/text-input/text-input.constants.js';
  import type { TextInputType } from '$lib/components/inputs/text-input/text-input.types.js';
  import { THEMES } from '$lib/stores/tokens/tokens.constants.js';
  import { tokens } from '$lib/stores/tokens/tokens.store.js';

  type T = $$Generic<TextInputType>;

  /**
   * The accepted types for the value prop. This is derived from the value of the type prop.
   */
  type ValueType<U extends TextInputType> = U extends typeof TEXT_INPUT_TYPES.number
    ? number | undefined
    : string | undefined;

  /**
   * The type accepted for the placeholder. This type is needed because input type date doesn't support placeholder:
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder
   */
  type PlaceholderType<U extends TextInputType> = U extends typeof TEXT_INPUT_TYPES.date
    ? undefined
    : string | undefined;

  /**
   * The ID to apply to the input field. This is required so the <label /> tag can work properly.
   */
  export let id: string;
  /**
   * The label text to display.
   */
  export let label: string;
  /**
   * The current value of the field.
   */
  export let type: T;
  /**
   * Test ID for the input. Will be applied to the `<div />` tag that surrounds the `<input />` and `<label />` tags.
   */
  export let value: ValueType<T> = undefined;
  /**
   * The placeholder text to show in the input field when there is no value.
   */
  export let placeholder: PlaceholderType<T> = undefined;
  /**
   * Test ID for the date input. Will be applied to the <div /> tag that surrounds the <input /> and <label /> tags.
   */
  export let testId: string | undefined = undefined;

  /**
   * Updates the value prop. This is needed because Svelte won't allow you to bind to `value` on `<input />` when `type`
   * is dynamic.
   */
  const updateValue: FormEventHandler<HTMLInputElement> = e => {
    if (isNumber(value)) {
      // @ts-expect-error - Can't figure out how to make TS happy here. The generic type is working correctly for the
      // props.
      value = parseFloat(e.currentTarget.value);
    } else {
      // @ts-expect-error - See above.
      value = e.currentTarget.value;
    }
  };

  /**
   * Utility function to check if the `value` prop should be a number instead of a string. This is supposed to allow
   * `updateValue` to work properly, but it still isn't working.
   *
   * @todo Figure out how to make TS happy.
   */
  const isNumber = (_v: ValueType<TextInputType>): _v is ValueType<'number'> => {
    return type === TEXT_INPUT_TYPES.number;
  };

  /**
   * Gets the text color to show in the field. This will usually just be the normal text color.
   *
   * Input type date doesn't support the normal `::placeholder` selector, so this function will return the placeholder
   * text color if the field is an empty date field.
   */
  const getColor = () => {
    return type === TEXT_INPUT_TYPES.date && !value ? $tokens.colors.placeholderText : $tokens.colors.text
  };
</script>

<div class="container" data-testid={testId}>
  <label
    class="label"
    style:--font-family={$tokens.fonts.body.family}
    style:--font-weight={$tokens.fonts.body.weight}
    style:--font-style={$tokens.fonts.body.style}
    style:--color={$tokens.colors.text}
    for={id}>{label}</label
  >
  <input
    {id}
    class="input"
    class:input-dark={$tokens.theme === THEMES.dark}
    style:--font-family={$tokens.fonts.body.family}
    style:--font-weight={$tokens.fonts.body.weight}
    style:--font-style={$tokens.fonts.body.style}
    style:--color={getColor()}
    style:--placeholder-color={$tokens.colors.placeholderText}
    style:--invalid-color={$tokens.colors.danger}
    style:--border-color={$tokens.colors.border}
    style:--background-color={$tokens.colors.background}
    {type}
    {placeholder}
    on:input={updateValue}
  />
</div>

<style>
  .container {
    display: flex;
    align-items: center;

    flex: 1;
  }

  .label {
    display: inline-block;
    width: 10rem;

    font: var(--font-style) var(--font-weight) 1rem var(--font-family);
    color: var(--color);
  }

  .input {
    flex: 1;

    padding: 0.5rem;

    font: var(--font-style) var(--font-weight) 1rem var(--font-family);
    color: var(--color);

    background-color: var(--background-color);
    border: 1px solid var(--border-color);
    border-radius: 0.25rem;

    -moz-appearance: textfield;
    appearance: none;
  }

  .input:invalid {
    color: var(--invalid-color);
    border-color: var(--invalid-color);
  }

  .input::placeholder {
    color: var(--placeholder-color);
  }

  .input::-webkit-outer-spin-button,
  .input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .input-dark::-webkit-calendar-picker-indicator {
    color-scheme: dark;
  }
</style>
