import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from 'src/app/Services/Indicadores/indicadores.service';

@Component({
  selector: 'app-facturacionhora',
  templateUrl: './facturacionhora.component.html',
  styleUrls: ['./facturacionhora.component.css']
})
export class FacturacionhoraComponent implements OnInit {
totales:any = {}
datosFacturacion:any = []
mostrarColumna = true
filtrosAplicados:any ={}
  constructor(
        private sIndicadores:IndicadoresService
  ) { }

  ngOnInit() {
  }

  async consultar(pDatos:any){
 
    this.datosFacturacion = await this.sIndicadores.consultarFacturacionHora(pDatos)
    console.log(pDatos);
    //POR ASESOR
    if (pDatos.origenes_datos == 2) {
      this.mostrarColumna = false
    }else{
      this.mostrarColumna = true
    }
    let vHorasFacturadas=0, vHorasOcupadas=0,
     vValorFacturado=0, vPromedioHora=0, vHorasDisponibles=0, 
     vOcupacion=0, vContador=0
    this.datosFacturacion.forEach((data:any) => {
       vContador +=1
      vHorasFacturadas += data.horas_facturadas
      vHorasOcupadas += data.horas_ocupadas
      vValorFacturado += data.valor_facturado
      vPromedioHora += data.promedio_hora
      vHorasDisponibles += data.horas_disponibles
      vOcupacion += data.ocupacion

    });
    this.totales.horas_facturadas = Math.round(vHorasFacturadas) 
    this.totales.horas_ocupadas = Math.round(vHorasOcupadas) 
    this.totales.valor_facturado = Math.round(vValorFacturado) 
    this.totales.promedio_hora = Math.round(vPromedioHora) 
    this.totales.horas_disponibles = Math.round(vHorasDisponibles) 
    this.totales.ocupacion = Math.round(vOcupacion /vContador) 
  }


}
