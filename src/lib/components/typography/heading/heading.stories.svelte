<script context="module" lang="ts">
  import '$lib/assets/fonts/archivo/css/archivo.css';
  import { type MetaProps, Story, Template } from '@storybook/addon-svelte-csf';
  import { HEADING_LEVELS } from './heading.constants.js';
  import Heading from './heading.svelte';

  export const meta: MetaProps = {
    title: 'Typography/Heading',
    component: Heading,
  };
</script>

<Template let:args>
  <Heading {...args}>{args.text}</Heading>
</Template>

<Story name="Heading 1" args={{ level: HEADING_LEVELS.h1 , text: 'This is an h1 heading'}} />

<Story name="Heading 2" args={{ level: HEADING_LEVELS.h2 , text: 'This is an h2 heading'}} />

<Story name="Heading 3" args={{ level: HEADING_LEVELS.h3 , text: 'This is an h3 heading'}} />

<Story name="Heading 4" args={{ level: HEADING_LEVELS.h4 , text: 'This is an h4 heading'}} />

<Story name="Heading 5" args={{ level: HEADING_LEVELS.h5 , text: 'This is an h5 heading'}} />

<Story name="Heading 6" args={{ level: HEADING_LEVELS.h6 , text: 'This is an h6 heading'}} />
