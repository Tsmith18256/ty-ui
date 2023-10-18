import { COLORS } from '$lib/constants/colors.constants.js';

/**
 * @typedef {keyof typeof BUTTON_APPEARANCES} ButtonAppearance
 */

/**
 * Button appearances, to be used with the appearance prop for button components.
 */
export const BUTTON_APPEARANCES = /** @type {const} */ ({
  primary: 'primary',
  secondary: 'secondary',
  negative: 'negative',
  danger: 'danger',
  warning: 'warning',
});

/**
 * Button background colors. This is a map of button appearances to their respective background colors.
 */
export const BUTTON_BACKGROUND_COLORS = /** @type {const} */ ({
  [BUTTON_APPEARANCES.primary]: COLORS.primary,
  [BUTTON_APPEARANCES.secondary]: COLORS.secondary,
  [BUTTON_APPEARANCES.negative]: COLORS.negative,
  [BUTTON_APPEARANCES.danger]: COLORS.danger,
  [BUTTON_APPEARANCES.warning]: COLORS.warning,
});
