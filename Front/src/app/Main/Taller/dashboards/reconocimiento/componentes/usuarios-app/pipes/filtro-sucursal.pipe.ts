import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroSucursal'
})
export class FiltroSucursalPipe implements PipeTransform {

  transform(array: any[], sucursal: string){
    if (sucursal != null) {
      return array.filter(resp => resp.sucursal_seleccionada == sucursal)
    } else {
      return array;
    }
   }
}
