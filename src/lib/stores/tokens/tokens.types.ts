import type { BREAKPOINTS, FONTS, THEMES } from '$lib/stores/tokens/tokens.constants.js';
import type { ObjectValues } from '$lib/types/utility.types.js';

/**
 * A union type that accepts one of the themes.
 */
export type Theme = ObjectValues<typeof THEMES>;

/**
 * An interface for all the colors used throughout the components.
 */
export interface IColors {
  // Brand colors.
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  // State colors.
  negative: string;
  danger: string;
  warning: string;
  // Core colors.
  background: string;
  text: string;
  border: string;
  overlayBackground: string;
  // Component colors.
  buttonText: string;
  placeholderText: string;
  inactiveToggleButtonColor: string;
  inactiveToggleButtonBackground: string;
}

/**
 * An interface for the different CSS properties for each font.
 */
export interface IFont {
  family: string;
  weight: string;
  style: string;
}

/**
 * An interface representing the object held in the tokens store.
 */
export interface ITokens {
  theme: Theme;
  colors: IColors;
  breakpoints: typeof BREAKPOINTS;
  fonts: typeof FONTS;
}
