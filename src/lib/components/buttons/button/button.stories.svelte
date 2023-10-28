<script context="module" lang="ts">
  import '$lib/assets/fonts/css/fontawesome.min.css';
  import '$lib/assets/fonts/css/regular.min.css';
  import { type MetaProps, Story, Template } from '@storybook/addon-svelte-csf';
  import { BUTTON_APPEARANCES } from './button.constants.js';
  import Button from './button.svelte';
  import { ICON_IMAGES } from '$lib/components/icon/icon.constants.js';

  export const meta: MetaProps = {
    title: 'Button',
    component: Button,
  };
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
