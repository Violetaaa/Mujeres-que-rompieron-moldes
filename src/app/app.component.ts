import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cmv-final';

  onToggle() {
    let body = document.getElementsByTagName('body')[0];
    // body.classList.remove("className");  
    // body.classList.add("theme-switch");
    body.classList.add("light-theme");
  }
}