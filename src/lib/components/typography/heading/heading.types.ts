import type { HEADING_LEVELS } from '$lib/components/typography/heading/heading.constants.js';
import type { ObjectValues } from '$lib/types/utility.types.js';

/**
 * A union type that accepts one of any of the possible heading levels.
 */
export type HeadingLevel = ObjectValues<typeof HEADING_LEVELS>;
