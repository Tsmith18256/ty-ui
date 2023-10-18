/**
 * @typedef {keyof typeof ICON_IMAGES} IconImage
 * @typedef {keyof typeof ICON_SIZES} IconSize
 */

/**
 * Icon images, to be used with the icon prop for the Icon component.
 */
export const ICON_IMAGES = /** @type {const} */ ({
  chartLine: 'fa-chart-line',
  chevronLeft: 'fa-chevron-left',
  cog: 'fa-cog',
  log: 'fa-clipboard-list',
  plus: 'fa-plus',
});

/**
 * Icon sizes, to be used with size prop for the Icon component.
 */
export const ICON_SIZES = /** @type {const} */ ({
  extraSmall: 'extra-small',
  small: 'small',
  medium: 'medium',
  large: 'large',
  extraLarge: 'extra-large',
});
