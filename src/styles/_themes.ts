/* eslint-disable quotes, quote-props, max-len */

import { Theme } from '@models/user';

export interface CssTheme {
  name: Theme;
  properties?: any;
}

export const lightTheme: CssTheme = {
  name: Theme.LIGHT,
  properties: {
    '--background-primary': '#FFFFFF',
    '--background-secondary': '#dddddd',
    '--background-tertiary': '#d4d4d4',
    '--tertiary-color': '#94aac5',

    '--text-color-1': '#3C3C3C',
    '--text-color-2': '#787878',
    '--text-color-3': '#969696',

    '--grey-1': '#E6E6E6',
    '--grey-1-rgb': '230,230,230',
    '--grey-2': '#D7D7D7',
    '--grey-3': '#C8C8C8',
    '--grey-4': '#B9B9B9',
    '--grey-4-rgb': '185,185,185',
    '--grey-5': '#AAAAAA',
    '--grey-5-rgb': '170,170,170',

    '--box-shadow': 'rgba(200, 200, 200, 0.1) 0px 4px 4px, rgba(200, 200, 200, 0.2) 0px 4px 4px',
    '--button-shadow': 'rgba(200, 200, 200, 0.4) 0px 4px 4px, rgba(220, 220, 220, 0.5) 0px 4px 4px',

    '--exam-background': 'rgba(148, 170, 197, 0.15)',
    '--theme-toggle-color': 'var(--secondary-color)',
  },
};

export const darkTheme: CssTheme = {
  name: Theme.DARK,
  properties: {
    '--background-primary': '#222222',
    '--background-secondary': '#333333',
    '--background-tertiary': '#464646',
    '--tertiary-color': 'var(--tertiary-color-dark)',

    '--text-color-1': '#F0F0F0',
    '--text-color-2': '#B4B4B4',
    '--text-color-3': '#969696',

    '--grey-1': '#323232',
    '--grey-1-rgb': '50,50,50',
    '--grey-2': '#414141',
    '--grey-3': '#505050',
    '--grey-4': '#5F5F5F',
    '--grey-4-rgb': '95,95,95',
    '--grey-5': '#8C8C8C',
    '--grey-5-rgb': '110,110,110',

    '--box-shadow': 'rgba(0, 0, 0, 0.1) 0px 4px 4px, rgba(0, 0, 0, 0.2) 0px 4px 4px',
    '--button-shadow': 'rgba(0, 0, 0, 0.2) 0px 4px 4px, rgba(0, 0, 0, 0.3) 0px 4px 4px',

    '--exam-background': 'rgba(148, 170, 197, 0.3)',
    '--theme-toggle-color': 'var(--grey-2)',
  },
};
