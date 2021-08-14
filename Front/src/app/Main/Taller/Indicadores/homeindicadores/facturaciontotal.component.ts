import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { IndicadoresService } from 'src/app/Services/Indicadores/indicadores.service';

@Component({
  selector: 'app-facturaciontotal',
  templateUrl: './facturaciontotal.component.html',
  styleUrls: ['./facturaciontotal.component.css']
})
export class HomeIndicadoresComponent implements OnInit {
  barChartOptions: ChartOptions = {responsive: true};
  barChartLabels: Label[] = ['Facturacion total'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [0], label: 'Total facturado' }, 
    { data: [0], label: 'Meta' }
  ];

  //VEHICULOS INGERSADOS
  labelsVehiculosIngresados: Label[] = ['Veh. Normal', 'Veh. Reclamo'];
  vehiculosIngresadosData: MultiDataSet = [ [0, 0]];
  doughnutChartType: ChartType = 'doughnut';
  
  //Total reprocesos
  labelsReprocesos: Label[] = ['Procesos', 'Reprocesos'];
  reprocesoData: MultiDataSet = [ [0, 0]]; 
  
  //HorasHombre
  labelsHorasHombre: Label[] = ['Ocupadas', 'Desocupadas'];
  horasHombresData: MultiDataSet = [ [0, 0]]; 
  






  graficaDatos:any =
  {
    "meta_sucursal": 0,
    "total_vehiculos_ingresados": 0,
    "total_facturado": 0,
    "promedio_facturado_por_vehiculo": 0,
    "cantidad_reclamos_aplicaron": 0,
    "indice_reclamos_aplicaron": 0,
    "total_procesos": 0,
    "reprocesos": 0,
    "indice_reprocesos": 0,
    "total_horas_facturadas": 0,
    "promedio_horas_facurada_por_vehiculo": 0,
    "total_horas_disponible_hombre": 0,
    "porcentaje_hora_ocupo": 0,
    "porcentaje_hora_desocupo": 0,
    "paso_indice_reprocesos": false,
    "paso_indice_reclamos_aplicaron": false,
    "indicador_horas_hombre": false,
    "indicador_procesos": false,
    "indicador_total_facturado": false,
    "indicador_vehiculos_ingresados": false
  }
  
  constructor(
      private sIndicadores:IndicadoresService
  ) { }

  async ngOnInit() {
  }

  async cosultar(pDatos:any){
    let vDatosEmpleado = await this.sIndicadores.getDecodedAccessToken()
    pDatos.codigoempleado =vDatosEmpleado.data_empleado.codigo_empleado
    this.graficaDatos = await this.sIndicadores.consultarDatosHome(pDatos)
    console.log( this.graficaDatos );

    //GRAFICA DE META SUCURSAL
    this.barChartData = [
      { data: [(this.graficaDatos.total_facturado)], label: 'Total facturado' }, 
      { data: [(this.graficaDatos.meta_sucursal)], label: 'Meta' }
    ];

    //GRAFICA DE VEHICULOS INGERSADOS
    this.vehiculosIngresadosData = [[
      this.graficaDatos.total_vehiculos_ingresados,
      this.graficaDatos.cantidad_reclamos_aplicaron
    ]]
    // this.labelsVehiculosIngresados = [
    //   ['Veh. Normal ' +this.graficaDatos.total_vehiculos_ingresados , 'Veh. Reclamo '+ this.graficaDatos.cantidad_reclamos_aplicaron]
    // ]

    //GRAFICA DE REPROCESOS
    this.reprocesoData = [[
      this.graficaDatos.total_procesos,
      this.graficaDatos.reprocesos
    ]]
    // this.labelsReprocesos = [[
    //   'Procesos '+this.graficaDatos.total_procesos , 'Reprocesos '+this.graficaDatos.reprocesos
    // ]]
 
    //GRAFICA DE HORAS HOMBRE
    
    this.horasHombresData = [[
      this.graficaDatos.porcentaje_hora_ocupo,
      this.graficaDatos.porcentaje_hora_desocupo
    ]]
    // this.labelsHorasHombre = [[
    //   'Ocupadas '+this.graficaDatos.porcentaje_hora_ocupo , 'Desocupadas '+this.graficaDatos.porcentaje_hora_desocupo
    // ]]
  }

  
}
