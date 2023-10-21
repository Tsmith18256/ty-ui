import type { Preview } from '@storybook/svelte';
import { COLORS, THEMES } from '../src/lib/stores/tokens/tokens.constants.js';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: THEMES.dark,
      values: [
        {
          name: THEMES.dark,
          value: COLORS[THEMES.dark].background
        },
        {
          name: THEMES.light,
          value: COLORS[THEMES.light].background
        },
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
