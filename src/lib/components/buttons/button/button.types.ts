import type { BUTTON_APPEARANCES } from './button.constants.js';
import type { ObjectValues } from '$lib/types/utility.types.js';

/**
 * A union type that accepts one of any of the possible button appearances.
 */
export type ButtonAppearance = ObjectValues<typeof BUTTON_APPEARANCES>;
