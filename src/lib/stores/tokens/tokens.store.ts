import { COLORS, THEMES } from '$lib/stores/tokens/tokens.constants.js';
import type { ITokens, Theme } from '$lib/stores/tokens/tokens.types.js';
import { readonly, writable } from 'svelte/store';

const writableTokens = writable<ITokens>({
  colors: COLORS[THEMES.dark]
});

/**
 * A store that contains the tokens used throughout the design system. This is a store that needs subscribed to because
 * the user can change their theme.
 */
export const tokens = readonly(writableTokens);

/**
 * Sets the theme currently being used for all components.
 */
export const setTheme = (theme: Theme) => {
  writableTokens.update(tokens => ({
    ...tokens,
    colors: COLORS[theme]
  }));
};