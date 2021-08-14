import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SolicitudesService } from '../../Servicios/Operaciones/solicitudes.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
solicitudes:any = []
mostrarTabla = false
mostrarDetalles = false

  constructor(
    private spinner: NgxSpinnerService,
    private sSolicitudes:SolicitudesService
    ) { }

  async ngOnInit() {
  await   this.cargarLoading()
  }


  async cargarLoading(){
    await this.spinner.show('loading', {

      bdColor :"rgba(10,83,165,0.63)",
      size : "medium",
      color : "#0a53a5",
      type : "ball-clip-rotate",
      fullScreen:true
    })
    this.solicitudes = await this.sSolicitudes.getSolicitudes()
     


    await this.spinner.hide('loading')
  }

desplegarTabla(pItem:any){
  pItem.mostrar = !pItem.mostrar
}

desplegarDetalles(pItem:any){
  pItem.mostrar = !pItem.mostrar
}


}
