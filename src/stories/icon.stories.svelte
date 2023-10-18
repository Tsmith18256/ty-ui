<script context="module">
  import Icon from '$lib/components/icon/icon.svelte';

  /** @type { import('@storybook/addon-svelte-csf').MetaProps } */
  export const meta = {
    title: 'Icon',
    component: Icon,
  };
</script>

<script>
  import './assets/fonts/css/fontawesome.min.css';
  import './assets/fonts/css/regular.min.css';

  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { ICON_IMAGES } from '$lib/components/icon/icon.constants.js';
</script>

<Template let:args>
  <Icon {...args} />
</Template>

<Story name="Default" args={{ icon: ICON_IMAGES.cog }} />
