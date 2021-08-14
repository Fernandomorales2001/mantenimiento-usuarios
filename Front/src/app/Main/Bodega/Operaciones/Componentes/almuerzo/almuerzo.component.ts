import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../Servicios/Operaciones/solicitudes.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-almuerzo',
  templateUrl: './almuerzo.component.html',
  styleUrls: ['./almuerzo.component.css']
})
export class AlmuerzoComponent implements OnInit {

trabajadores = []

  constructor(
    private sSolicitudes:SolicitudesService,
    private spinner:NgxSpinnerService


  ) { }

  async ngOnInit() {
    await this.obtenerAlmuerzos()
  }

  async obtenerAlmuerzos(){
    await this.spinner.show('loading', {
      
      bdColor :"rgba(10,83,165,0.63)",
      size : "medium",
      color : "#0a53a5",
      type : "ball-clip-rotate",
      fullScreen:true
    })
    this.trabajadores = await this.sSolicitudes.getAlmuerzos()
    await this.spinner.hide('loading')
  }

}
