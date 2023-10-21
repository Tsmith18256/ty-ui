import type { LoaderFunction } from '@storybook/types';
import { COLORS, THEMES } from '../src/lib/stores/tokens/tokens.constants';
import { setTheme } from '../src/lib/stores/tokens/tokens.store';
import type { SvelteRenderer } from '@storybook/svelte';

export const themeLoader: LoaderFunction<SvelteRenderer> = async opts => {
  const value = opts?.globals?.backgrounds?.value;

  if (value === COLORS[THEMES.dark].background) {
    setTheme(THEMES.dark);
  } else {
    setTheme(THEMES.light);
  }

  return {};
};
