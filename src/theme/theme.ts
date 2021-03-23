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
        "--box-shadow": "rgba(200, 200, 200, 0.1) 0px 4px 4px, rgba(220, 220, 220, 0.2) 0px 4px 4px",

        "--text-color-1": "#000000",
        "--text-color-2": "#b4b4b4",

        "--grey-1": "#e6e6e6",
        "--grey-2": "#d4d4d4",
        "--grey-3": "#b4b4b4",
        "--grey-4": "#989898",

        "--exam-background": "rgba(148, 170, 197, 0.15)"
    }
};

export const dark: Theme = {
    name: 'dark',
    properties: {
        "--background-primary": "#000000",
        "--background-secondary": "#141619",
        "--background-tertiary": "#1e2023",
        "--primary-color": "#eb6a1e",
        "--secondary-color": "#f4ac31",
        "--tertiary-color": "#94aac5",
        "--error-default": "#800600",
        "--box-shadow": "rgba(15, 15, 15, 0.2) 0px 4px 4px, rgba(20, 20, 20, 0.3) 0px 4px 4px",

        "--text-color-1": "#ffffff",
        "--text-color-2": "#b4b4b4",

        "--grey-1": "#989898",
        "--grey-2": "#b4b4b4",
        "--grey-3": "#d4d4d4",
        "--grey-4": "#e6e6e6",

        "--exam-background": "rgba(148, 170, 197, 0.3)"
    }
};
