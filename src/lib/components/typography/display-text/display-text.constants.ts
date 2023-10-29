/**
 * An object containing all the HTML tags that the display text component supports.
 */
export const DISPLAY_TEXT_TAGS = {
  em: 'em',
  p: 'p',
  span: 'span',
  strong: 'strong',
} as const;

/**
 * All the accepted text sizes for display text.
 */
export const DISPLAY_TEXT_SIZES = {
  extraSmall: '0.5rem',
  small: '0.75rem',
  medium: '1rem',
  large: '1.5rem',
  extraLarge: '2rem',
} as const;
