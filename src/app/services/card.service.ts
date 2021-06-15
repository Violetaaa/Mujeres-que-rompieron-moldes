import { Injectable } from '@angular/core';
// @ts-ignore
import xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})

export class CardService {

  private cards: Card[] = [
    new Card(
      1,
      'Ada Lovelace 1',
      'La primera programadora',
      './assets/img1.jpg',
      '(1) Lorem ipsum dolor sit amet consectetur adipiscing elit orci iaculis mattis sociosqu, malesuada cras aliquam feugiat sem ut id viverra faucibus. Vulputate etiam laoreet himenaeos diam quisque nibh interdum urna, ridiculus conubia erat habitant vivamus hac curae leo, enim aenean mollis gravida tempor aptent tempus. Tempor eu sagittis sollicitudin ullamcorper integer eleifend, convallis nisi quisque ultricies aenean rutrum, dis per quis neque nibh. Vivamus convallis pulvinar facilisi duis laoreet nunc aptent penatibus ornare potenti diam, cras in habitant tincidunt fermentum etiam ut neque taciti. Mauris iaculis eu gravida malesuada quam donec elementum himenaeos condimentum, torquent etiam eget pellentesque neque lacus tortor lobortis risus ad, congue a sapien leo montes nascetur posuere mattis. Netus pellentesque vehicula proin sagittis faucibus inceptos tempor, sodales natoque semper maecenas mus litora, cum sapien enim habitant integer torquent.'
    ),
    new Card(
      2,
      'Ada Lovelace 2',
      'La primera programadora',
      './assets/img1.jpg',
      '(2) Lorem ipsum dolor sit amet consectetur adipiscing elit orci iaculis mattis sociosqu, malesuada cras aliquam feugiat sem ut id viverra faucibus. Vulputate etiam laoreet himenaeos diam quisque nibh interdum urna, ridiculus conubia erat habitant vivamus hac curae leo, enim aenean mollis gravida tempor aptent tempus. Tempor eu sagittis sollicitudin ullamcorper integer eleifend, convallis nisi quisque ultricies aenean rutrum, dis per quis neque nibh. Vivamus convallis pulvinar facilisi duis laoreet nunc aptent penatibus ornare potenti diam, cras in habitant tincidunt fermentum etiam ut neque taciti. Mauris iaculis eu gravida malesuada quam donec elementum himenaeos condimentum, torquent etiam eget pellentesque neque lacus tortor lobortis risus ad, congue a sapien leo montes nascetur posuere mattis. Netus pellentesque vehicula proin sagittis faucibus inceptos tempor, sodales natoque semper maecenas mus litora, cum sapien enim habitant integer torquent.'
    ),
    new Card(
      3,
      'Ada Lovelace 3',
      'La primera programadora',
      './assets/img1.jpg',
      '(3 )Lorem ipsum dolor sit amet consectetur adipiscing elit orci iaculis mattis sociosqu, malesuada cras aliquam feugiat sem ut id viverra faucibus. Vulputate etiam laoreet himenaeos diam quisque nibh interdum urna, ridiculus conubia erat habitant vivamus hac curae leo, enim aenean mollis gravida tempor aptent tempus. Tempor eu sagittis sollicitudin ullamcorper integer eleifend, convallis nisi quisque ultricies aenean rutrum, dis per quis neque nibh. Vivamus convallis pulvinar facilisi duis laoreet nunc aptent penatibus ornare potenti diam, cras in habitant tincidunt fermentum etiam ut neque taciti. Mauris iaculis eu gravida malesuada quam donec elementum himenaeos condimentum, torquent etiam eget pellentesque neque lacus tortor lobortis risus ad, congue a sapien leo montes nascetur posuere mattis. Netus pellentesque vehicula proin sagittis faucibus inceptos tempor, sodales natoque semper maecenas mus litora, cum sapien enim habitant integer torquent.'
    ),
    new Card(
      4,
      'Ada Lovelace 4',
      'La primera programadora',
      './assets/img1.jpg',
      '(4) Lorem ipsum dolor sit amet consectetur adipiscing elit orci iaculis mattis sociosqu, malesuada cras aliquam feugiat sem ut id viverra faucibus. Vulputate etiam laoreet himenaeos diam quisque nibh interdum urna, ridiculus conubia erat habitant vivamus hac curae leo, enim aenean mollis gravida tempor aptent tempus. Tempor eu sagittis sollicitudin ullamcorper integer eleifend, convallis nisi quisque ultricies aenean rutrum, dis per quis neque nibh. Vivamus convallis pulvinar facilisi duis laoreet nunc aptent penatibus ornare potenti diam, cras in habitant tincidunt fermentum etiam ut neque taciti. Mauris iaculis eu gravida malesuada quam donec elementum himenaeos condimentum, torquent etiam eget pellentesque neque lacus tortor lobortis risus ad, congue a sapien leo montes nascetur posuere mattis. Netus pellentesque vehicula proin sagittis faucibus inceptos tempor, sodales natoque semper maecenas mus litora, cum sapien enim habitant integer torquent.'
    ),
    new Card(
      5,
      'Ada Lovelace 5',
      'La primera programadora',
      './assets/img1.jpg',
      '(5) Lorem ipsum dolor sit amet consectetur adipiscing elit orci iaculis mattis sociosqu, malesuada cras aliquam feugiat sem ut id viverra faucibus. Vulputate etiam laoreet himenaeos diam quisque nibh interdum urna, ridiculus conubia erat habitant vivamus hac curae leo, enim aenean mollis gravida tempor aptent tempus. Tempor eu sagittis sollicitudin ullamcorper integer eleifend, convallis nisi quisque ultricies aenean rutrum, dis per quis neque nibh. Vivamus convallis pulvinar facilisi duis laoreet nunc aptent penatibus ornare potenti diam, cras in habitant tincidunt fermentum etiam ut neque taciti. Mauris iaculis eu gravida malesuada quam donec elementum himenaeos condimentum, torquent etiam eget pellentesque neque lacus tortor lobortis risus ad, congue a sapien leo montes nascetur posuere mattis. Netus pellentesque vehicula proin sagittis faucibus inceptos tempor, sodales natoque semper maecenas mus litora, cum sapien enim habitant integer torquent.'
    ),
    new Card(
      6,
      'Ada Lovelace 6',
      'La primera programadora',
      './assets/img1.jpg',
      '(6) Lorem ipsum dolor sit amet consectetur adipiscing elit orci iaculis mattis sociosqu, malesuada cras aliquam feugiat sem ut id viverra faucibus. Vulputate etiam laoreet himenaeos diam quisque nibh interdum urna, ridiculus conubia erat habitant vivamus hac curae leo, enim aenean mollis gravida tempor aptent tempus. Tempor eu sagittis sollicitudin ullamcorper integer eleifend, convallis nisi quisque ultricies aenean rutrum, dis per quis neque nibh. Vivamus convallis pulvinar facilisi duis laoreet nunc aptent penatibus ornare potenti diam, cras in habitant tincidunt fermentum etiam ut neque taciti. Mauris iaculis eu gravida malesuada quam donec elementum himenaeos condimentum, torquent etiam eget pellentesque neque lacus tortor lobortis risus ad, congue a sapien leo montes nascetur posuere mattis. Netus pellentesque vehicula proin sagittis faucibus inceptos tempor, sodales natoque semper maecenas mus litora, cum sapien enim habitant integer torquent.'
    ),
  ]


  public xmlNumber: any;

  public xmlItems: any;
  constructor(private _http: HttpClient) { this.loadXML(); }


  // getCards() {
  //   return this.cards;
  // }

  loadXML() {
    // Change the file's name here.
    this._http.get('/assets/35191148595219000107550020000118331880067064.xml',
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
          .then((data) => {
            this.xmlItems = data;
          });
      });
  }

  parseXML(data: any) {
    return new Promise(resolve => {
      var k: string | number,
        arr: any = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function (err: any, result: any) {
        console.log('Objeto gerado do xml:', result);
        var obj = result.nfeProc.NFe[0].infNFe[0].det;
        console.log(obj);
        for (k in obj) {
          var item = obj[k];
          arr.push({
            codigo_barras: item.prod[0].cEAN[0],
            descricao: item.prod[0].xProd[0]
          });
        }
        resolve(arr);
      });
    });
  }

}
