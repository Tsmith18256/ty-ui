import type { LoaderFunction } from '@storybook/types';
import { COLORS, THEMES } from '../src/lib/stores/tokens/tokens.constants';
import { setTheme } from '../src/lib/stores/tokens/tokens.store';
import type { SvelteRenderer } from '@storybook/svelte';

/**
 * Sets the theme in the store when the background color is changed in Storybook.
 */
export const themeLoader: LoaderFunction<SvelteRenderer> = async opts => {
  const value = opts?.globals?.backgrounds?.value;

  // When Storybook first loads, the background value is `null`, even though it will be using dark theme by default. So
  // the default theme here is dark.
  if (value === COLORS[THEMES.light].background) {
    setTheme(THEMES.light);
  } else {
    setTheme(THEMES.dark);
  }

  return {};
};
