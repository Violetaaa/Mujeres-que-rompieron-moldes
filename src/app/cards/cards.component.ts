import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards!: Card[];

  // caption: string = 'eso es el caption';
  // name: string = 'esto es el name';
  // path: string = './assets/img1.jpg';
  // description: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  // randomColor: number = Math.floor((Math.random() * 4) + 1); // range 1-4 ==>> Math.random() * max-min) + min)


  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cards = this.cardService.getCards()
  }

}
