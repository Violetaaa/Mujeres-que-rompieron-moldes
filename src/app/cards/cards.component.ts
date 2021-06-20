import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

// Next line solves xml2js error, don't remove!!
// @ts-ignore
import xml2js from 'xml2js';
import { ReadXmlService } from '../services/read-xml.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {

  cards!: Card[];

  constructor(private readXML: ReadXmlService) { }

  ngOnInit(): void {
    this.readXML.loadXML().subscribe((data: any) => {
      this.readXML.parseXML(data)
        .then((data: any) => {
          this.cards = data;
        });
    });
  }

}