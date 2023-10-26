<script context="module" lang="ts">
  import { type MetaProps, Story, Template } from '@storybook/addon-svelte-csf';
  import Button from '$lib/components/button/button.svelte';
  import Modal from './modal.svelte';

  export const meta: MetaProps = {
    title: 'Modal',
    component: Modal,
  };
</script>

<script lang="ts">
  let isVisible = false;

  const openModal = () => {
    isVisible = true;
  };

  const closeModal = () => {
    isVisible = false;
  };
</script>

<Template>
  <Button label="Open modal" on:click={openModal} />
  <Modal bind:isVisible>
    <div>Hello world!</div>

    <Button label="Close modal" on:click={closeModal} />
  </Modal>
</Template>

<Story name="Hello World" />
