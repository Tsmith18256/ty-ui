import type { IColors, Theme } from '$lib/stores/tokens/tokens.types.js';

/**
 * The different themes available to use.
 */
export const THEMES = {
  dark: 'dark',
  light: 'light',
} as const;

const negative = '#777';

const darkColors = {
  primary: '#0e21a0',
  secondary: '#4d2db7',
  tertiary: '#9d44c0',
  quaternary: '#ec53b0',
  negative,
  danger: '#ff4242',
  warning: '#ff9142',
  background: '#030826',
  text: '#ddd',
  border: negative,
};

const lightColors = {
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
