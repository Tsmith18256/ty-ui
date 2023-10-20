<script lang="ts">
  import { ICON_SIZES } from '$lib/components/icon/icon.constants.js';
  import type { IconImage, IconSize } from '$lib/components/icon/icon.types.js';

  /**
   * The image to be displayed for this icon.
   */
  export let icon: IconImage;
  /**
   * The size of the icon.
   */
  export let size: IconSize = ICON_SIZES.medium;
</script>

<i class="far {icon} {size}" />

<style>
  .extra-small {
    font-size: 0.5rem;
  }

  .small {
    font-size: 0.75rem;
  }

  .medium {
    font-size: 1rem;
  }

  .large {
    font-size: 1.5rem;
  }

  .extra-large {
    font-size: 2rem;
  }
</style>
