import { Component, OnInit } from '@angular/core';
import { PendientesService } from '../../Servicios/Operaciones/pendientes.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {
pendientes: any = {"facturas":[{"descripcion":"Facturas","cantidad":0},{"descripcion":"Domicilio","cantidad":0},{"descripcion":"Otras sucursales","cantidad":0}],"devoluciones_anulaciones":[{"descripcion":"Devoluciones","cantidad":0},{"descripcion":"Anulaciones","cantidad":0}],"transferencias_pendientes":{"transferecias":[{"numerotransferencia":"","fecha":"","origen":"","cantidad":0}],"cantidad":0}}
  consultando: boolean;
 
  constructor(
    private sPendientes: PendientesService,
    private spinner: NgxSpinnerService
  ) { }

  async ngOnInit() {
    await this.consultarPendientes()
  }


  async consultarPendientes(){
      this.consultando = true
    await this.spinner.show('loading', {
      
      bdColor :"rgba(10,83,165,0.63)",
      size : "medium",
      color : "#0a53a5",
      type : "ball-clip-rotate",
      fullScreen:true
    })
    this.pendientes =  await this.sPendientes.getPendientes()
    await this.spinner.hide('loading')
  this.consultando = false



  }

}
