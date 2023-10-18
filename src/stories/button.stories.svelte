<script context="module">
  import Button from '$lib/components/button/button.svelte';

  /** @type { import('@storybook/addon-svelte-csf').MetaProps } */
  export const meta = {
    title: 'Button',
    component: Button,
  };
</script>

<script>
  import './assets/fonts/css/fontawesome.min.css';
  import './assets/fonts/css/regular.min.css';

  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { BUTTON_APPEARANCES } from '$lib/components/button/button.constants.js';
  import { ICON_IMAGES } from '$lib/components/icon/icon.constants.js';
</script>

<Template let:args>
  <Button {...args} />
</Template>

<Story name="Primary" args={{ label: 'Primary' }} />

<Story name="Secondary" args={{ label: 'Secondary', appearance: BUTTON_APPEARANCES.secondary }} />

<Story name="Negative" args={{ label: 'Negative', appearance: BUTTON_APPEARANCES.negative }} />

<Story name="Danger" args={{ label: 'Danger', appearance: BUTTON_APPEARANCES.danger }} />

<Story name="Warning" args={{ label: 'Warning', appearance: BUTTON_APPEARANCES.warning }} />

<Story name="Icon Button" args={{ label: 'Icon Button', icon: ICON_IMAGES.plus }} />
