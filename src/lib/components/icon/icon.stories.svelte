<script context="module" lang="ts">
  import '$lib/assets/fonts/fontawesome/css/fontawesome.min.css';
  import '$lib/assets/fonts/fontawesome/css/regular.min.css';
  import { type MetaProps, Story, Template } from '@storybook/addon-svelte-csf';
  import { ICON_IMAGES } from '$lib/components/icon/icon.constants.js';
  import Icon from '$lib/components/icon/icon.svelte';

  export const meta: MetaProps = {
    title: 'Components/Icon',
    component: Icon,
  };
</script>

<Template let:args>
  <Icon {...args} />
</Template>

<Story name="Default" args={{ icon: ICON_IMAGES.cog }} />
