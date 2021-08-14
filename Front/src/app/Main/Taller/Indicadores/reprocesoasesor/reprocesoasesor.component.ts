import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from 'src/app/Services/Indicadores/indicadores.service';

@Component({
  selector: 'app-reprocesoasesor',
  templateUrl: './reprocesoasesor.component.html',
  styleUrls: ['./reprocesoasesor.component.css']
})
export class ReprocesoasesorComponent implements OnInit {

  totales:any = {}
  datosReproceso:any = []
  filtrosAplicados:any= {}
    constructor(
          private sIndicadores:IndicadoresService
    ) { }
  
    ngOnInit() {
    }
  async consultar(pEvento:any){
    console.log(JSON.stringify(pEvento));
    this.datosReproceso = await this.sIndicadores.consultarReprocesoAsesor(pEvento)
    let vCantidad =0, vCotizado=0, vNegociado=0, vFacturado=0, vConseguirRep=0 , vTot=0
    this.datosReproceso.forEach(element => { 
      vCotizado += element.cotizacion
      vNegociado += element.negociacion
      vFacturado += element.facturacion
      vConseguirRep += element.conseguir_repuesto
      vTot += element.total
    });
    this.totales.cantidad_vehiculo = vCantidad
    this.totales.cotizacion = vCotizado
    this.totales.negociacion = vNegociado
    this.totales.facturacion = vFacturado
    this.totales.conseguir_repuesto = vConseguirRep
    this.totales.total = vTot 
    console.log(this.datosReproceso);
    
    
   
  }

}
