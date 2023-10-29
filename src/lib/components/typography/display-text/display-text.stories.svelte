<script context="module" lang="ts">
  import '$lib/assets/fonts/roboto/css/roboto.css';
  import { type MetaProps, Story, Template } from '@storybook/addon-svelte-csf';
  import { DISPLAY_TEXT_SIZES, DISPLAY_TEXT_TAGS } from './display-text.constants.js';
  import DisplayText from './display-text.svelte';

  export const meta: MetaProps = {
    title: 'Typography/Display Text',
    component: DisplayText,
  };
</script>

<Template let:args>
  <DisplayText {...args}>{args.text}</DisplayText>
</Template>

<Story name="Span" args={{ text: 'This text uses a span' }} />

<Story
  name="Paragraph"
  args={{
    tag: DISPLAY_TEXT_TAGS.p,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet massa enim, non tristique nibh semper sit amet. Proin magna erat, finibus at mollis eu, congue eu turpis. Donec dignissim enim volutpat, sodales lorem sed, fringilla nunc. Donec et ex bibendum libero tristique iaculis ac eget libero. Donec sollicitudin scelerisque urna et volutpat. Nulla vel sollicitudin lorem. Duis placerat vulputate justo, eget maximus nulla semper vel. Donec mollis eget tortor a facilisis. Nam eros arcu, lacinia fermentum metus ac, tristique dictum nulla. Aliquam erat volutpat. Pellentesque convallis, mi at interdum pellentesque, neque ante fringilla orci, eget tempus nisi mi sit amet mi. Aliquam erat volutpat. Donec vel mi metus. Duis eu condimentum elit. Sed sit amet condimentum quam. Mauris placerat mauris magna, vitae accumsan ipsum sollicitudin posuere.',
  }}
/>

<Story name="Strong" args={{ tag: DISPLAY_TEXT_TAGS.strong, text: 'This text is strong' }} />

<Story name="Emphasis" args={{ tag: DISPLAY_TEXT_TAGS.em, text: 'This text is emphasizing something' }} />

<Story name="Extra Small" args={{ size: DISPLAY_TEXT_SIZES.extraSmall, text: 'This text is extra small. Probably too small, I would not recommend using this.' }} />

<Story name="Small" args={{ size: DISPLAY_TEXT_SIZES.small, text: 'This text is small' }} />

<Story name="Large" args={{ size: DISPLAY_TEXT_SIZES.large, text: 'This text is large' }} />

<Story name="Extra Large" args={{ size: DISPLAY_TEXT_SIZES.extraLarge, text: 'This text is extra large' }} />
