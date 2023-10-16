/**
 * @typedef {keyof typeof BUTTON_APPEARANCES} ButtonAppearance
 */

import { COLORS } from '$lib/constants/colors.constants.js';

export const BUTTON_APPEARANCES = /** @type {const} */ ({
  primary: 'primary',
  secondary: 'secondary',
  negative: 'negative',
  danger: 'danger',
  warning: 'warning'
});

export const BUTTON_BACKGROUND_COLORS = /** @type {const} */ ({
  [BUTTON_APPEARANCES.primary]: COLORS.primary,
  [BUTTON_APPEARANCES.secondary]: COLORS.secondary,
  [BUTTON_APPEARANCES.negative]: COLORS.negative,
  [BUTTON_APPEARANCES.danger]: COLORS.danger,
  [BUTTON_APPEARANCES.warning]: COLORS.warning
});
