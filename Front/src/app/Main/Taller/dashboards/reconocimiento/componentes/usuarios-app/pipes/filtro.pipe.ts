import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(array: any[], idUsuario: number){
    if (idUsuario != null) {
      return array.filter(resp => resp.id_app_usuario == idUsuario)
    } else {
      return array;
    }
   }

}
