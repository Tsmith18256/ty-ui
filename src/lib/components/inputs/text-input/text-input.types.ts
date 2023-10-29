import type { ObjectValues } from '$lib/types/utility.types.js';
import type { TEXT_INPUT_TYPES } from '$lib/components/inputs/text-input/text-input.constants.js';

/**
 * A type that accepts any of the valid text input types.
 */
export type TextInputType = ObjectValues<typeof TEXT_INPUT_TYPES>;
