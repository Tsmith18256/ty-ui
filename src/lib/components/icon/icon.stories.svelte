<script context="module" lang="ts">
  import type { MetaProps } from '@storybook/addon-svelte-csf';
  import Icon from '$lib/components/icon/icon.svelte';

  export const meta: MetaProps = {
    title: 'Icon',
    component: Icon,
  };
</script>

<script lang="ts">
  import '$lib/assets/fonts/css/fontawesome.min.css';
  import '$lib/assets/fonts/css/regular.min.css';

  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { ICON_IMAGES } from '$lib/components/icon/icon.constants.js';
</script>

<Template let:args>
  <Icon {...args} />
</Template>

<Story name="Default" args={{ icon: ICON_IMAGES.cog }} />
