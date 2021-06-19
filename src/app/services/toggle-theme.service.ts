import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { StorageService } from "./local-storage.service";

export enum ThemeMode {
  DARK, LIGHT
}

@Injectable()
export class toggleThemeService {

  public theme$ = new BehaviorSubject<ThemeMode>(ThemeMode.LIGHT);
  private readonly THEME_KEY = 'THEME';
  private readonly DARK_THEME_VALUE = 'DARK';
  private readonly LIGHT_THEME_VALUE = 'LIGHT';
  private readonly DARK_THEME_CLASS_NAME = 'theme-dark';

  // private darkThemeSelected = false;
  private lightThemeSelected = false;
  constructor(private storage: StorageService) {

  }

  // public setThemeOnStart() {
  //   if (this.isDarkThemeSelected()) {
  //     this.setDarkTheme();
  //   } else {
  //     this.setLightTheme();
  //   }
  //   setTimeout(() => {
  //     document.body.classList.add('animate-colors-transition');
  //   }, 500);
  // }


  public setThemeOnStart() {
    if (this.isLightThemeSelected()) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
    setTimeout(() => {
      document.body.classList.add('animate-colors-transition');
    }, 500);
  }



  public toggle() {
    if (this.lightThemeSelected) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }

  // private isDarkThemeSelected(): boolean {
  //   this.darkThemeSelected = this.storage.get(this.THEME_KEY) === this.DARK_THEME_VALUE;
  //   return this.darkThemeSelected;
  // }

  private isLightThemeSelected(): boolean {
    this.lightThemeSelected = this.storage.get(this.THEME_KEY) === this.LIGHT_THEME_VALUE;
    return this.lightThemeSelected;
  }


  private setLightTheme() {
    this.storage.set(this.THEME_KEY, this.LIGHT_THEME_VALUE);
    document.body.classList.remove(this.DARK_THEME_CLASS_NAME);
    this.lightThemeSelected = true;
    this.theme$.next(ThemeMode.LIGHT);
  }

  private setDarkTheme() {
    this.storage.set(this.THEME_KEY, this.DARK_THEME_VALUE);
    document.body.classList.add(this.DARK_THEME_CLASS_NAME);
    this.lightThemeSelected = false;
    this.theme$.next(ThemeMode.DARK);
  }
}