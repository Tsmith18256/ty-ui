import type { ButtonAppearance } from '$lib/components/button/button.types.js';
import type { IColors } from '$lib/stores/tokens/tokens.types.js';

/**
 * Gets the background color that corresponds to the given appearance. Uses the provided colors, which should come from
 * the tokens store.
 */
export const getButtonBackgroundColor = (appearance: ButtonAppearance, colors: IColors) => {
  return colors[appearance];
};
