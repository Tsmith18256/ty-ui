<script context="module" lang="ts">
  import { type MetaProps, Story, Template } from '@storybook/addon-svelte-csf';
  import FloatingActionButton from './floating-action-button.svelte';
  import { ICON_IMAGES } from '$lib/components/icon/icon.constants.js';

  export const meta: MetaProps = {
    title: 'Floating Action Button',
    component: FloatingActionButton,
  };
</script>

<Template let:args>
  <FloatingActionButton {...args} />
</Template>

<Story name="Default" args={{ icon: ICON_IMAGES.plus }} />
