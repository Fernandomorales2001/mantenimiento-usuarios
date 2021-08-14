import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from 'src/app/Services/Indicadores/indicadores.service';

@Component({
  selector: 'app-cumplimientotareas',
  templateUrl: './cumplimientotareas.component.html',
  styleUrls: ['./cumplimientotareas.component.css']
})
export class CumplimientotareasComponent implements OnInit {

  totales:any = {}
  datosReclamos:any = []
  filtrosAplicados:any= {}
    constructor(
          private sIndicadores:IndicadoresService
    ) { }
  
    ngOnInit() {
    }
  async consultar(pEvento:any){
    this.datosReclamos = await this.sIndicadores.consultarCumplimientoTareas(pEvento)
    let vTareas=0, vCumplidas=0, vPorCumolido=0, vNocumplido=0, vContador=0
    this.datosReclamos.forEach(element => {
      vContador +=1
      vTareas += element.total_tareas
      vCumplidas += element.tareas_cumplidas
      vPorCumolido += element.porcentaje_cumplidas
      vNocumplido += element.tiempo_no_cumplido
    });
    this.totales.total_tareas = vTareas
    this.totales.tareas_cumplidas = vCumplidas
    this.totales.porcentaje_cumplidas =  Math.round(vPorCumolido/vContador) 
    this.totales.tiempo_no_cumplido = vNocumplido
    console.log(JSON.stringify(pEvento));
    console.log(this.datosReclamos);
  }
}
