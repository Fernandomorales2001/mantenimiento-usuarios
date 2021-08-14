import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from 'src/app/Services/Indicadores/indicadores.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-vehiculostrabajados',
  templateUrl: './vehiculostrabajados.component.html',
  styleUrls: ['./vehiculostrabajados.component.css']
})
export class VehiculostrabajadosComponent implements OnInit {
  barChartOptions: ChartOptions = {responsive: true};
  barChartLabels: Label[] = ['Facturacion total'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [0], label: 'Empleados' } 
  ];

totales:any = {}
datosVehiculos:any =[]
filtrosAplicados:any= {}
  constructor(
        private sIndicadores:IndicadoresService
  ) { }

  ngOnInit() {
  }
async consultar(pEvento:any){
 
  this.datosVehiculos = await this.sIndicadores.consultarVehiculosTrabajados(pEvento)
  let vTotCant =0 , vTotPorcentaje=0 , vContador=0
  let dataChart:any = []
  this.datosVehiculos.forEach(element => {
    let vObjeto = {
      data:[element.conos_atentidos],
      label:element.nombre_empleado
    }
    dataChart.push(vObjeto)
    vContador +=1
    vTotCant += element.conos_atentidos
    vTotPorcentaje += element.porcentaje_total
  });
  this.totales.conos_atentidos = Math.round(vTotCant) 
  this.totales.porcentaje_total = Math.round(vTotPorcentaje / vContador) 
  this.barChartData = dataChart 
 
  
}

}
