/**
 * @typedef {keyof typeof COLORS} Color
 */

const negative = '#777';

export const COLORS = /** @type {const} */ ({
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
});
