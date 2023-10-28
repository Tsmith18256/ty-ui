import type { IFont } from '$lib/constants/fonts/fonts.types.js';

export const FONTS: { [Key in FontPlacements]: IFont } = {
  body: {
    family: 'Roboto',
    weight: 'normal',
    style: 'normal',
  },
  heading: {
    family: 'Archivo',
    weight: '900',
    style: 'normal',
  },
};

type FontPlacements = 'body' | 'heading';
