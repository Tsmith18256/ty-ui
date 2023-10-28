<script context="module" lang="ts">
  import '$lib/assets/fonts/roboto/css/roboto.css';
  import { type MetaProps, Story, Template } from '@storybook/addon-svelte-csf';
  import { BUTTON_APPEARANCES } from '$lib/components/buttons/button/button.constants.js';
  import ButtonGroup from './button-group.svelte';

  export const meta: MetaProps = {
    title: 'Button Group',
    component: ButtonGroup,
  };
</script>

<Template let:args>
  <ButtonGroup {...args} />
</Template>

<Story
  name="Default"
  args={{
    buttons: [
      { label: 'Save' },
      { label: 'Cancel', appearance: BUTTON_APPEARANCES.negative },
      { label: 'Delete', appearance: BUTTON_APPEARANCES.danger },
    ],
  }}
/>
