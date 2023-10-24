import { BREAKPOINTS } from '$lib/stores/tokens/tokens.constants.js';

/**
 * Checks whether or not the given screen width falls under the mobile breakpoint.
 */
export const isMobileWidth = (width: number) => {
  return width < BREAKPOINTS.tablet;
};

/**
 * Checks whether or not the given screen width falls under any desktop breakpoint.
 */
export const isDesktopWidth = (width: number) => {
  return width >= BREAKPOINTS.desktopSmall;
};
