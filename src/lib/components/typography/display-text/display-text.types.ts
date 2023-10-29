import type { DISPLAY_TEXT_SIZES, DISPLAY_TEXT_TAGS } from '$lib/components/typography/display-text/display-text.constants.js';
import type { ObjectValues } from '$lib/types/utility.types.js';

/**
 * A type that accepts any of the accepted tags for the display text component.
 */
export type DisplayTextTag = ObjectValues<typeof DISPLAY_TEXT_TAGS>;

/**
 * A type that accepts any of the available sizes for the display text component.
 */
export type DisplayTextSize = ObjectValues<typeof DISPLAY_TEXT_SIZES>;
