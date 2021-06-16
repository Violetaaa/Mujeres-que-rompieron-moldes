import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

// Next line solves xml2js error, don't remove!!
// @ts-ignore
import xml2js from 'xml2js';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {

  cards!: Card[];

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.loadXML();
  }

  loadXML() {
    this._http.get('/assets/datos_galeria.xml',
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
        responseType: 'text'
      })
      .subscribe((data) => {
        this.parseXML(data)
          .then((data: any) => {
            this.cards = data;
          });
      });
  }

  parseXML(data: any) {
    return new Promise(resolve => {

      let k: string | number,
        cardList: any = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });

      parser.parseString(data, function (err: any, result: any) {
        let obj = result.orla;

        for (k in obj.elemento) {
          var item = obj.elemento[k];

          cardList.push(new Card(item.id[0], item.nombre[0], item.foto[0], item.pie[0], item.detalle[0]))

          // arr.push({
          //   id: item.id[0]
          //   nombre: item.nombre[0],
          //   foto: item.foto[0],
          //   pie: item.pie[0],
          //   detalle: item.detalle[0],
          // });
        };
        resolve(cardList);
      });
    });
  }
}