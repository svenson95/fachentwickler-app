import { Injectable } from '@angular/core';

import { Theme } from '@models/user';
import { CssTheme, darkTheme, lightTheme } from '@styles/_themes';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: CssTheme = lightTheme;

  public getActiveTheme(): Theme {
    return this.theme.name;
  }

  public getActiveThemeTranslated(): string {
    return this.theme.name === Theme.LIGHT ? 'Hell' : 'Dunkel';
  }

  private setDarkTheme(): void {
    this.setActiveTheme(darkTheme);
  }

  private setLightTheme(): void {
    this.setActiveTheme(lightTheme);
  }

  private setActiveTheme(theme: CssTheme): void {
    this.theme = theme;

    Object.keys(this.theme.properties).forEach((prop) => {
      document.documentElement.style.setProperty(prop, this.theme.properties[prop]);
    });
  }

  public toggleTheme(): void {
    if (this.getActiveTheme() === Theme.DARK) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }
}
