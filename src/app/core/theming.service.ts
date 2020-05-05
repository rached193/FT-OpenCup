import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  constructor() { }


  activeNightMode() {
    document.documentElement.style.setProperty('--background-color', '#696969');
    document.documentElement.style.setProperty('--main-color', '#f2f2f2');
    document.documentElement.style.setProperty('--primary-color-1', '#272a2d');
  }

  activeLightMode() {
    document.documentElement.style.setProperty('--background-color', '#f2f2f2');
    document.documentElement.style.setProperty('--main-color', '#696969');
    document.documentElement.style.setProperty('--primary-color-1', '#fff');
  }
}
