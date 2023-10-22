<script context="module" lang="ts">
  import type { MetaProps } from '@storybook/addon-svelte-csf';
  import ButtonGroup from './button-group.svelte';

  export const meta: MetaProps = {
    title: 'Button Group',
    component: ButtonGroup,
  };
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { BUTTON_APPEARANCES } from '$lib/components/button/button.constants.js';
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
