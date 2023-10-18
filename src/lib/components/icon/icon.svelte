<script>
  import { ICON_SIZES } from './icon.constants.js';

  /**
   * @type {import('./icon.constants.js').IconImage}
   */
  export let icon;
  /**
   * @type {import('./icon.constants.js').IconSize}
   */
  export let size = ICON_SIZES.medium;
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
