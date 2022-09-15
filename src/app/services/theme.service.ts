import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme: Themes | string = Themes.DARK
  currentThemeChange = new EventEmitter<Themes | string>();

  setTheme(theme: Themes | string): void {
    this.currentTheme = theme;
    this.currentThemeChange.emit(theme);
  }
}

export enum Themes {
  DARK = 'dark',
  LIGHT = 'light'
}
