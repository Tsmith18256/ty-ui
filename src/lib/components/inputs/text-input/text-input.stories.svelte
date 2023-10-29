<script context="module" lang="ts">
  import { type MetaProps, Story, Template } from '@storybook/addon-svelte-csf';
  import { TEXT_INPUT_TYPES } from '$lib/components/inputs/text-input/text-input.constants.js';
  import TextInput from './text-input.svelte';

  export const meta: MetaProps = {
    title: 'Components/Inputs/Text Input',
    component: TextInput,
  };
</script>

<Template let:args>
  <TextInput {...args} />
</Template>

<Story
  name="Text"
  args={{ id: 'textField', label: 'Full name', type: TEXT_INPUT_TYPES.text, placeholder: 'Miles Morales' }}
/>

<Story
  name="Number"
  args={{ id: 'numberField', label: 'Weight (lbs)', type: TEXT_INPUT_TYPES.number, placeholder: '172.5' }}
/>

<Story
  name="Date"
  args={{ id: 'dateField', label: 'Birthday', type: TEXT_INPUT_TYPES.date }}
/>
