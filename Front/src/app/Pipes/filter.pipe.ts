import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    let data: any[] = [];
    var chars = {
      "á": "a", "é": "e", "í": "i", "ó": "o", "ú": "u",
      "à": "a", "è": "e", "ì": "i", "ò": "o", "ù": "u",
      "Á": "A", "É": "E", "Í": "I", "Ó": "O", "Ú": "U",
      "À": "A", "È": "E", "Ì": "I", "Ò": "O", "Ù": "U"
    }
    var remplazador = /[áàéèíìóòúùñ]/ig;
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    let comparador = String(searchText).replace(remplazador, function(valor) { return chars[valor] })
    comparador = comparador.replace(/[^0-9A-Za-z]/g, '')
    comparador = comparador.toLowerCase()
    items.forEach(i => {
      Object.keys(i).forEach(async function(k, v) {
        let posicion = String(i[k]).replace(remplazador, function(valor) { return chars[valor] })
        posicion = posicion.replace(/[^0-9A-Za-z]/g, '')
        if (await _.includes(String(posicion).toLowerCase(), comparador)) {
          if (!data.includes(i)) {
            data.push(i)
          }
        }
      });
    })
    return data
  }
}
