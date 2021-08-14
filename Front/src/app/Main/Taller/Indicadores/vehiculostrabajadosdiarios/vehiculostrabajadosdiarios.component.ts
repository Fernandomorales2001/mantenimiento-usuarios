import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from 'src/app/Services/Indicadores/indicadores.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-vehiculostrabajadosdiarios',
  templateUrl: './vehiculostrabajadosdiarios.component.html',
  styleUrls: ['./vehiculostrabajadosdiarios.component.css']
})
export class VehiculostrabajadosdiariosComponent implements OnInit {

  barChartOptions: ChartOptions = {responsive: true};
  barChartLabels: Label[] = ['Vehiculos diarios'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [0], label: 'Dias' } 
  ];

totales:any = {}
datosVehiculos:any = [
  {
    tabla_detalle_vehiculos:[]
  }
]
filtrosAplicados:any= {}
  constructor(
        private sIndicadores:IndicadoresService
  ) { }

  ngOnInit() {
  }
async consultar(pEvento:any){
  this.datosVehiculos = await this.sIndicadores.consultarVehiculosTrabajadosDiarios(pEvento)
  let vTotCant =0 , vTotPorcentaje=0 , vIterador=0
  let dataChart:any = []

  this.datosVehiculos[0].tabla_estadistica_vehiculos.forEach(element => {
    vIterador +=1 
    let vObjeto = {
      data:[element.total],
      label:element.dia_semana
    }
    dataChart.push(vObjeto) 
  });

  this.datosVehiculos[0].tabla_detalle_vehiculos.forEach(element => {
    vTotCant += element.cantidad_vehiculos_dia
    vTotPorcentaje += element.porcentaje_del_total
  });


  this.totales.cantidad_vehiculos_dia = Math.round(vTotCant) 
  this.totales.porcentaje_del_total = Math.round(vTotPorcentaje) 
  this.barChartData = dataChart 
  console.log(JSON.stringify(pEvento));
  console.log(this.datosVehiculos);
  
  
  
}

}
