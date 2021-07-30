import { Injectable } from '@angular/core';
import { dark, light, Theme } from '../../sass/_themes';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private theme: Theme = light;

    constructor() {
        this.setActiveTheme(this.getActiveTheme());
    }

    getActiveTheme(): Theme {
        return this.theme;
    }

    getActiveThemeTranslated(): string {
      return this.theme.name === 'light' ? 'Hell' : 'Dunkel';
    }

    isDarkTheme(): boolean {
        return this.theme.name === dark.name;
    }

    setDarkTheme(): void {
        this.setActiveTheme(dark);
    }

    setLightTheme(): void {
        this.setActiveTheme(light);
    }

    setActiveTheme(theme: Theme): void {
        this.theme = theme;

        Object.keys(this.theme.properties).forEach(prop => {
            document.documentElement.style.setProperty(prop, this.theme.properties[prop]);
        });
    }

    toggleTheme(): void {
        if (this.isDarkTheme()) {
            this.setLightTheme();
        } else {
            this.setDarkTheme();
        }
    }
}
