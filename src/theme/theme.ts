export interface Theme {
    name: string;
    properties: any;
}

export const light: Theme = {
    name: 'light',
    properties: {
        "--background-primary": "#FFFFFF",
        "--background-secondary": "#f3f3f3",
        "--background-tertiary": "#d4d4d4",
        "--primary-color": "#eb6a1e",
        "--secondary-color": "#f4ac31",
        "--tertiary-color": "#94aac5",
        "--error-default": "#800600",

        "--text-color-1": "#000000",
        "--text-color-2": "#b4b4b4",

        "--grey-1": "#e6e6e6",
        "--grey-2": "#d4d4d4",
        "--grey-3": "#b4b4b4",
        "--grey-4": "#989898",
        "--grey-4-rgb": "152,152,152",
        "--grey-5": "#707070",
        "--grey-5-rgb": "112,112,112",

        "--box-shadow": "rgba(200, 200, 200, 0.1) 0px 4px 4px, rgba(220, 220, 220, 0.2) 0px 4px 4px",
        "--button-shadow": "rgba(200, 200, 200, 0.4) 0px 4px 4px, rgba(220, 220, 220, 0.5) 0px 4px 4px",

        "--exam-background": "rgba(148, 170, 197, 0.15)"
    }
};

export const dark: Theme = {
    name: 'dark',
    properties: {
        "--background-primary": "#000000",
        "--background-secondary": "#282828",
        "--background-tertiary": "#323232",
        "--primary-color": "#eb6a1e",
        "--secondary-color": "#f4ac31",
        "--tertiary-color": "#94aac5",
        "--error-default": "#800600",

        "--text-color-1": "#ffffff",
        "--text-color-2": "#b4b4b4",

        "--grey-1": "#808080",
        "--grey-2": "#989898",
        "--grey-3": "#afafaf",
        "--grey-4": "#c3c3c3",
        "--grey-4-rgb": "190,190,190",
        "--grey-5": "#d2d2d2",
        "--grey-5-rgb": "200,200,200",

        "--box-shadow": "rgba(15, 15, 15, 0.2) 0px 4px 4px, rgba(20, 20, 20, 0.3) 0px 4px 4px",
        "--button-shadow": "rgba(15, 15, 15, 0.4) 0px 4px 4px, rgba(15, 15, 15, 0.5) 0px 4px 4px",

        "--exam-background": "rgba(148, 170, 197, 0.3)"
    }
};
