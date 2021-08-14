import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from 'src/app/Services/Indicadores/indicadores.service';

@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.component.html',
  styleUrls: ['./reclamos.component.css']
})
export class ReclamosComponent implements OnInit {
 
totales:any = {}
datosReclamos:any = []
filtrosAplicados:any= {}
  constructor(
        private sIndicadores:IndicadoresService
  ) { }

  ngOnInit() {
  }
async consultar(pEvento:any){
  this.datosReclamos = await this.sIndicadores.consultarReclamos(pEvento)
  let vVehiculos=0, vReclamos=0, vHoras=0, vCosto=0
  this.datosReclamos.forEach(element => {
    vVehiculos += element.cantidad_vehiculos
    vReclamos += element.cantidad_reclamo
    vHoras += element.horas
    vCosto += element.costo
  });
  this.totales.cantidad_vehiculos = vVehiculos
  this.totales.cantidad_reclamo =vReclamos
  this.totales.horas = vHoras
  this.totales.costo = vCosto

  console.log(JSON.stringify(pEvento));
  console.log(this.datosReclamos);
  
  
 
}

}
