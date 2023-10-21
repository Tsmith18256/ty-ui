<script lang="ts">
  import { ICON_SIZES } from '$lib/components/icon/icon.constants.js';
  import type { IconImage, IconSize } from '$lib/components/icon/icon.types.js';
  import { tokens } from '$lib/stores/tokens/tokens.store.js';

  /**
   * The image to be displayed for this icon.
   */
  export let icon: IconImage;
  /**
   * The size of the icon.
   */
  export let size: IconSize = ICON_SIZES.medium;
</script>

<i class="icon far {icon}" style:--color={$tokens.colors.text} style:--size={size} />

<style>
  .icon {
    color: var(--color);
    font-size: var(--size);
  }
</style>
