import type { THEMES } from '$lib/stores/tokens/tokens.constants.js';
import type { ObjectValues } from '$lib/types/utility.types.js';

/**
 * A union type that accepts one of the themes.
 */
export type Theme = ObjectValues<typeof THEMES>;

/**
 * An interface for all the colors used throughout the components.
 */
export interface IColors {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  negative: string;
  danger: string;
  warning: string;
  background: string;
  text: string;
  border: string;
}

export interface ITokens {
  colors: IColors;
}
