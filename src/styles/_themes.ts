/* eslint-disable quotes, quote-props, max-len */

export interface Theme {
  name: 'light' | 'dark';
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--background-primary': '#FFFFFF',
    '--background-secondary': '#f0f0f0',
    '--background-tertiary': '#d4d4d4',
    '--tertiary-color': '#94aac5',

    '--text-color-1': '#3e3e3e',
    '--text-color-2': '#787878',
    '--text-color-3': '#b4b4b4',

    '--grey-1': '#f5f5f5',
    '--grey-1-rgb': '245,245,245',
    '--grey-2': '#dcdcdc',
    '--grey-3': '#b4b4b4',
    '--grey-4': '#989898',
    '--grey-4-rgb': '152,152,152',
    '--grey-5': '#707070',
    '--grey-5-rgb': '112,112,112',

    '--box-shadow':
      'rgba(200, 200, 200, 0.1) 0px 4px 4px, rgba(200, 200, 200, 0.2) 0px 4px 4px',
    '--button-shadow':
      'rgba(200, 200, 200, 0.4) 0px 4px 4px, rgba(220, 220, 220, 0.5) 0px 4px 4px',

    '--exam-background': 'rgba(148, 170, 197, 0.15)',
    '--theme-toggle-color': 'var(--secondary-color)',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--background-primary': '#292929',
    '--background-secondary': '#373737',
    '--background-tertiary': '#464646',
    '--tertiary-color': 'var(--tertiary-color-dark)',

    '--text-color-1': '#ffffff',
    '--text-color-2': '#d2d2d2',
    '--text-color-3': '#b4b4b4',

    '--grey-1': '#505050',
    '--grey-1-rgb': '80,80,80',
    '--grey-2': '#727272',
    '--grey-3': '#afafaf',
    '--grey-4': '#c3c3c3',
    '--grey-4-rgb': '190,190,190',
    '--grey-5': '#d2d2d2',
    '--grey-5-rgb': '200,200,200',

    '--box-shadow':
      'rgba(0, 0, 0, 0.1) 0px 4px 4px, rgba(0, 0, 0, 0.2) 0px 4px 4px',
    '--button-shadow':
      'rgba(0, 0, 0, 0.2) 0px 4px 4px, rgba(0, 0, 0, 0.3) 0px 4px 4px',

    '--exam-background': 'rgba(148, 170, 197, 0.3)',
    '--theme-toggle-color': 'var(--grey-2)',
  },
};
