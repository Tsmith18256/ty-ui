<script context="module" lang="ts">
  import '$lib/assets/fonts/roboto/css/roboto.css';
  import { type MetaProps, Story, Template } from '@storybook/addon-svelte-csf';
  import ToggleButtons from './toggle-buttons.svelte';

  export const meta: MetaProps = {
    title: 'Components/Inputs/Toggle Buttons',
    component: ToggleButtons,
  };
</script>

<Template let:args>
  <ToggleButtons {...args} />
</Template>

<Story name="Two Buttons" args={{
  groupName: 'twoToggleButtons',
  toggleButtons: [
    {
      label: 'YES',
      value: 'yes'
    },
    {
      label: 'NO',
      value: 'no'
    }
  ],
  value: 'yes'
}} />
