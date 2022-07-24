import { Injectable } from '@angular/core';

import { Theme } from '@models/user';
import { CssTheme, darkTheme, lightTheme } from '@styles/_themes';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: CssTheme = lightTheme;

  constructor() {
    this.injectThemeCss();
  }

  public get activeTheme(): Theme {
    return this.theme.name;
  }

  public get activeThemeTranslated(): string {
    return this.theme.name === Theme.LIGHT ? 'Hell' : 'Dunkel';
  }

  public toggleTheme(): void {
    if (this.activeTheme === Theme.DARK) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  private setDarkTheme(): void {
    this.setActiveTheme(darkTheme);
  }

  private setLightTheme(): void {
    this.setActiveTheme(lightTheme);
  }

  private setActiveTheme(theme: CssTheme): void {
    this.theme = theme;

    this.injectThemeCss();
  }

  private injectThemeCss(): void {
    Object.keys(this.theme.properties).forEach((prop) => {
      document.documentElement.style.setProperty(prop, this.theme.properties[prop]);
    });
  }
}
