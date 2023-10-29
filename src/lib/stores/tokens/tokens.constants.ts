import type { IColors, IFont, Theme } from '$lib/stores/tokens/tokens.types.js';

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
  background: '#030826',
  get border() {
    return this.negative;
  },
  overlayBackground: '#000000dd',
  buttonText: '#eee',
  placeholderText: '#aaa',
  inactiveToggleButtonColor: '#aaa',
  inactiveToggleButtonBackground: '#555'
};

const lightColors: IColors = {
  ...darkColors,
  background: '#f1f3ff',
  text: '#222',
  inactiveToggleButtonColor: '#ddd',
  inactiveToggleButtonBackground: '#999'
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
  desktopLarge: 1201,
} as const;

type FontPlacements = 'body' | 'heading';

/**
 * The different fonts used.
 */
export const FONTS: { [Key in FontPlacements]: IFont } = {
  body: {
    family: 'Roboto',
    weight: 'normal',
    style: 'normal',
  },
  heading: {
    family: 'Archivo',
    weight: '900',
    style: 'normal',
  },
};
