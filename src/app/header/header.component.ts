import { Component, OnInit } from '@angular/core';
import { toggleThemeService } from '../services/toggle-theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  translateValue: number = 0;

  constructor(private toggleThemeService: toggleThemeService) {
  }

  ngOnInit() {

  }

  toggleTheme() {
    this.toggleThemeService.toggle();

    // translateY switch
    if (this.translateValue == 0) {
      this.translateValue = 37
    } else {
      this.translateValue = 0;
    }
  }
}
