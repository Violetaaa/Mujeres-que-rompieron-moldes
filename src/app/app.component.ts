import { Component } from '@angular/core';
import { toggleThemeService } from './services/toggle-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cmv-final';

  constructor(private toggleThemeService: toggleThemeService) {
  }

  toggleTheme() {
    this.toggleThemeService.toggle();
  }

  // onToggle() {
  //   let body = document.getElementsByTagName('body')[0];
  //   // body.classList.remove("className");  
  //   // body.classList.add("theme-switch");
  //   body.classList.add("light-theme");
  // }
}