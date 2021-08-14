import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from 'src/app/Services/Indicadores/indicadores.service';

@Component({
  selector: 'app-reclamosporsistema',
  templateUrl: './reclamosporsistema.component.html',
  styleUrls: ['./reclamosporsistema.component.css']
})
export class ReclamosporsistemaComponent implements OnInit {

  totales:any = {}
  datosReclamos:any = []
  filtrosAplicados:any= {}
    constructor(
          private sIndicadores:IndicadoresService
    ) { }
  
    ngOnInit() {
    }
  async consultar(pEvento:any){
    this.datosReclamos = await this.sIndicadores.consultarReclamosPorSistema(pEvento)
    let vFreno =0 , vTren=0, vDireccion=0, vSuspencion=0, vIgnicion=0, vCombustion=0, vMotor=0, vLubricacion=0, vBateria=0, vOtros=0, vTotal=0
    this.datosReclamos.forEach(data => {
     vFreno += data.frenos
     vTren +=  data.tren_manejo
     vDireccion += data.direccion 
     vSuspencion += data.suspension
     vIgnicion += data.ignicion
     vCombustion += data.combustion 
     vMotor += data.motor 
     vLubricacion += data.lubricacion 
     vBateria += data.bateria 
     vOtros += data.otros 
     vTotal += data.total
    });
    this.totales.frenos = vFreno
    this.totales.tren_manejo =vTren
    this.totales.direccion = vDireccion
    this.totales.suspension = vSuspencion
    this.totales.ignicion = vIgnicion
    this.totales.combustion = vCombustion
    this.totales.motor = vMotor
    this.totales.lubricacion = vLubricacion
    this.totales.bateria = vBateria
    this.totales.otros = vOtros
    this.totales.total = vTotal
    console.log(JSON.stringify(pEvento));
    console.log(this.datosReclamos);
    
    
   
  }
}
