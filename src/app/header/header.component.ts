import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.onToggle
  }

  onToggle() {
    let body = document.getElementsByTagName('body')[0];
    // body.classList.remove("className");  
    // body.classList.add("theme-switch");
    body.classList.add("backg");
  }




}
