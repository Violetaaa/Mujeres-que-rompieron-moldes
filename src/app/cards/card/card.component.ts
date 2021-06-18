import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  // card! ==> because TypeScript 2.7 includes a strict class checking where all the properties should be initialized in the constructor.A workaround is to add the! as a postfix to the variable name

  constructor() { }

  ngOnInit(): void {
    this.getRandomNumber()
  }

  // each random number generated corresponds to a SCSS class that assigns a certain color to the card
  getRandomNumber() {
    if ((this.card.backgroundColor == null) || (this.card.backgroundColor == undefined)) {
      this.card.backgroundColor = Math.floor((Math.random() * 4) + 1); // range 1-4 ==>> Math.random() * max-min) + min)

    }


  }

}




