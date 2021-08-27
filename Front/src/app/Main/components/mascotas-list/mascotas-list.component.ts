import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { Mascotas } from '../../interfaces/interface';
import { ModalMantenimientoUsuariosAppComponent } from '../../Modals/modal-mantenimiento-usuarios-app/modal-mantenimiento-usuarios-app.component';
import { MascotasServiceService } from '../../services/mascotas-service.service';

@Component({
  selector: 'app-mascotas-list',
  templateUrl: './mascotas-list.component.html',
  styleUrls: ['./mascotas-list.component.css']
})
export class MascotasListComponent implements OnInit {
  @ViewChild('controlUsuario', {static: false}) controlUsuario: ModalMantenimientoUsuariosAppComponent
  mascotas: Mascotas[];
  constructor(private mascotasServiceService: MascotasServiceService) {
   }

   @HostBinding('class') clases = 'row';

   listaMascotas: Mascotas[] | undefined;
 
  ngOnInit () {
 
   this.mascotasServiceService.getMascotas().subscribe(
     data => {
       this.listaMascotas = data;
       console.log(this.listaMascotas);
     }
   )
  }

  abrirModalUsuario(){
    this.controlUsuario.abrirModal();
  }

}
