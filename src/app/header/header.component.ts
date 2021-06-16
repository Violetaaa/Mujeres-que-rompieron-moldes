import { Component, OnInit } from '@angular/core';
import { toggleThemeService } from '../services/toggle-theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  flag: boolean = false;
  constructor(private toggleThemeService: toggleThemeService) {
  }

  ngOnInit() {

  }

  toggleTheme() {


    this.toggleThemeService.toggle();

    this.flag = !this.flag;
    // document.getElementsByClassName('theme-switch')[0].classList.toggle('switch__clicked');
    // document.getElementsByClassName('switch')[0].classList.toggle('switch__clicked');


  }
}
