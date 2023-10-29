<script lang="ts">
  import { fade } from 'svelte/transition';
  import { isMobileWidth } from '$lib/stores/tokens/tokens.utils.js';
  import { tokens } from '$lib/stores/tokens/tokens.store.js';

  export let isVisible = false;
  export let testId: string | undefined = undefined;

  const mobileFadeDuration = 0;
  let innerWidth: number;

  // Setting duration to undefined tells Svelte to use the default duration.
  $: fadeDuration = isMobileWidth(innerWidth) ? mobileFadeDuration : undefined;

  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      hideModal();
    }
  };

  const hideModal = () => {
    isVisible = false;
  };
</script>

{#if isVisible}
  <div
    class="background"
    style:--color={$tokens.colors.text}
    style:--overlay-background={$tokens.colors.overlayBackground}
    style:--background-color={$tokens.colors.background}
    transition:fade={{ duration: fadeDuration }}
    on:click|stopPropagation|self={hideModal}
    on:keyup={onKeyUp}
    role="presentation"
    data-testid={testId}
  >
    <div class="modal" role="dialog">
      <slot />
    </div>
  </div>
{/if}

<svelte:window bind:innerWidth />

<style>
  .background {
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    background-color: var(--overlay-background);

    z-index: 1000;
  }

  .modal {
    width: 100%;
    height: 100%;
    padding: 2rem;

    overflow-y: scroll;
    scrollbar-width: none;

    background-color: var(--background-color);
    color: var(--color);

    @media (min-width: 1025px) {
      width: 80%;
      height: auto;
      max-height: 80%;
      min-width: 40rem;
      min-height: 5rem;

      border-radius: 2rem;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>
