import type { BREAKPOINTS, THEMES } from '$lib/stores/tokens/tokens.constants.js';
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
  // Core element colors.
  background: string;
  text: string;
  buttonText: string;
  border: string;
  overlayBackground: string;
  // Specific component colors.
  inactiveToggleButtonColor: string;
  inactiveToggleButtonBackground: string;
}

export interface ITokens {
  colors: IColors;
  breakpoints: typeof BREAKPOINTS;
}
