import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from 'src/app/Services/Indicadores/indicadores.service';

@Component({
  selector: 'app-reprocesotecnico',
  templateUrl: './reprocesotecnico.component.html',
  styleUrls: ['./reprocesotecnico.component.css']
})
export class ReprocesotecnicoComponent implements OnInit {

  totales:any = {}
  datosTecnicos:any = []
  filtrosAplicados:any= {}
    constructor(
          private sIndicadores:IndicadoresService
    ) { }
  
    ngOnInit() {
    }
  async consultar(pEvento:any){
    this.datosTecnicos = await this.sIndicadores.consultarReprocesoTecnico(pEvento)
    let vCant=0, vInsp=0, vRep=0, vPrueba=0, vTot=0
    this.datosTecnicos.forEach(data => {
       
    vCant +=  data.cantidad_vehiculo 
    vInsp +=  data.inspecciones 
    vRep +=  data.reparacion  
    vPrueba +=  data.prueba_carretera 
    vTot +=  data.total 
    });
    this.totales.cantidad_vehiculo = vCant
    this.totales.inspecciones = vInsp
    this.totales.reparacion  = vRep
    this.totales.prueba_carretera = vPrueba
    this.totales.total = vTot
    console.log(JSON.stringify(pEvento));
    console.log(this.datosTecnicos);
  }
}
