import { Component, OnInit } from '@angular/core';
import { GuardadoService } from '../../Servicios/Operaciones/guardado.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-guardado',
  templateUrl: './guardado.component.html',
  styleUrls: ['./guardado.component.css']
})
export class GuardadoComponent implements OnInit {
  mostrarDetalle = false
  opcionesVer = {
    mas:"VER MAS ",
    menos:"VER MENOS "
  }

  guardados = []
  constructor(
    private spinner: NgxSpinnerService,
    private sGuardado:GuardadoService


  ) { }

  async ngOnInit() {
    await this.getGuardado()
  }
  desplegarDetalles(pItem:any){
    pItem.mostrar = !pItem.mostrar
  }


  async getGuardado(){
    await this.spinner.show('loading', {

      bdColor :"rgba(10,83,165,0.63)",
      size : "medium",
      color : "#0a53a5",
      type : "ball-clip-rotate",
      fullScreen:true
    })
    this.guardados = await this.sGuardado.getGuardados()
    

    await this.spinner.hide('loading')
  }
}
