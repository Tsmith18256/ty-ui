<script context="module">
	import Button from './button.svelte';

	/** @type { import('@storybook/addon-svelte-csf').MetaProps } */
	export const meta = {
		title: 'Button',
		component: Button
	};
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import { BUTTON_APPEARANCES } from './button.constants.js';
</script>

<Template let:args>
	<Button {...args} />
</Template>

<Story name="Primary" args={{ label: 'Primary' }} />

<Story name="Secondary" args={{ label: 'Secondary', appearance: BUTTON_APPEARANCES.secondary }} />

<Story name="Negative" args={{ label: 'Negative', appearance: BUTTON_APPEARANCES.negative }} />

<Story name="Danger" args={{ label: 'Danger', appearance: BUTTON_APPEARANCES.danger }} />

<Story name="Warning" args={{ label: 'Warning', appearance: BUTTON_APPEARANCES.warning }} />
