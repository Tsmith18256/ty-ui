import type { ICON_IMAGES, ICON_SIZES } from '$lib/components/icon/icon.constants.js';
import type { ObjectValues } from '$lib/types/utility.types.js';

/**
 * A union type that accepts one of any of the possible icon images.
 */
export type IconImage = ObjectValues<typeof ICON_IMAGES>;

/**
 * A union type that accepts one of any of the possible icon sizes.
 */
export type IconSize = ObjectValues<typeof ICON_SIZES>;
