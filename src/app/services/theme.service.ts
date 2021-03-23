import {Injectable} from '@angular/core';
import {dark, light, Theme} from '../../theme/theme';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private active: Theme = light;

    getActiveTheme(): Theme {
        return this.active;
    }

    isDarkTheme(): boolean {
        return this.active.name === dark.name;
    }

    setDarkTheme(): void {
        this.setActiveTheme(dark);
    }

    setLightTheme(): void {
        this.setActiveTheme(light);
    }

    setActiveTheme(theme: Theme): void {
        this.active = theme;

        Object.keys(this.active.properties).forEach(property => {
            document.documentElement.style.setProperty(
                property,
                this.active.properties[property]
            );
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
