import type { IColors, Theme } from '$lib/stores/tokens/tokens.types.js';

/**
 * The different themes available to use.
 */
export const THEMES = {
  dark: 'dark',
  light: 'light',
} as const;

const darkColors: IColors = {
  primary: '#0e21a0',
  secondary: '#4d2db7',
  tertiary: '#9d44c0',
  quaternary: '#ec53b0',
  negative: '#777',
  danger: '#ff4242',
  warning: '#ff9142',
  text: '#ddd',
  buttonText: '#eee',
  background: '#030826',
  get border() { return this.negative },
  overlayBackground: '#000000dd',
};

const lightColors: IColors = {
  ...darkColors,
  background: '#f1f3ff',
  text: '#222',
};

/**
 * All the colors used.
 */
export const COLORS: { [Property in Theme]: IColors } = {
  [THEMES.dark]: darkColors,
  [THEMES.light]: lightColors,
};

/**
 * An object containing the inclusive minimum width that each breakpoint starts at.
 */
export const BREAKPOINTS = {
  tablet: 769,
  desktopSmall: 1025,
  desktopLarge: 1201
} as const;
