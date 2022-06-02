import { Injectable } from '@angular/core';
import { dark, light, Theme } from '../../styles/_themes';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: Theme = light;

  constructor() {
    this.setActiveTheme(this.getActiveTheme());
  }

  public getActiveTheme(): Theme {
    return this.theme;
  }

  private getActiveThemeTranslated(): string {
    return this.theme.name === 'light' ? 'Hell' : 'Dunkel';
  }

  public isDarkTheme(): boolean {
    return this.theme.name === dark.name;
  }

  private setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  private setLightTheme(): void {
    this.setActiveTheme(light);
  }

  private setActiveTheme(theme: Theme): void {
    this.theme = theme;

    Object.keys(this.theme.properties).forEach((prop) => {
      document.documentElement.style.setProperty(
        prop,
        this.theme.properties[prop],
      );
    });
  }

  public toggleTheme(): void {
    if (this.isDarkTheme()) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }
}
