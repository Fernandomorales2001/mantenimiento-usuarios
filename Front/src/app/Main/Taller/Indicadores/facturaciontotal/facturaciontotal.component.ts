import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from 'src/app/Services/Indicadores/indicadores.service';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-facturaciontotal',
  templateUrl: './facturaciontotal.component.html',
  styleUrls: ['./facturaciontotal.component.css']
})
export class FacturaciontotalComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    maintainAspectRatio: false,
    
    scales: {
      yAxes: [{
        stacked: true,
        gridLines: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [ 
    { data: [0, 0, 0],  label: '', stack: 'a' }
  ];
  public barChartLabels: string[] = [
    'Mano obra', 
    'Repuestos', 
    'Lubricantes',
    'Baterias', 
    'Llantas', 
    'Otros', 
  ];

   datosFacturacion:any =[] 
   totales:any = {}
   filtrosAplicados:any= {}
  constructor(
        private sIndicadores:IndicadoresService
  ) { }

  ngOnInit() {
  }

  async consultar(pDatos){
    this.datosFacturacion = await this.sIndicadores.consultarFacturacionTotal(pDatos)
    console.log(this.datosFacturacion);
    console.log(JSON.stringify(pDatos) );
    
    let vManoObra=0, 
        vRepuestos=0, 
        vLubricantes=0,  
        vBaterias=0, 
        vLlantas=0, 
        vOtros=0,
        vTotal =0
    let vObjetoData:any = []
    let vDatosChart:any =[]
    let vDatos:any
    try {
      this.datosFacturacion.forEach( (elemento:any) => {
        vManoObra  += Number( elemento.mano_obra)
        vRepuestos += Number(elemento.repuestos)  
        vLubricantes += Number(elemento.lubricantes ) 
        vBaterias += Number(elemento.baterias)  
        vLlantas += Number(elemento.llantas)  
        vOtros += Number(elemento.otros)  
        vTotal += Number(elemento.total)  
        let vData:any =[]
        vData.push(elemento.mano_obra) 
        vData.push(elemento.repuestos) 
        vData.push(elemento.lubricantes) 
        vData.push(elemento.baterias) 
        vData.push(elemento.llantas ) 
        vData.push(elemento.otros)
        vDatos = { data: vData , label: elemento.descripcion, stack: 'a' }  
        vDatosChart.push(vDatos)
      });
      this.barChartData = vDatosChart
  
      this.totales.mano_obra = vManoObra
      this.totales.repuestos = vRepuestos
      this.totales.lubricantes = vLubricantes
      this.totales.baterias = vBaterias
      this.totales.llantas = vLlantas
      this.totales.otros = vOtros
      this.totales.otros = vOtros
      this.totales.total = vTotal
    } catch (error) {
      this.datosFacturacion = []
      this.datosFacturacion.forEach( (elemento:any) => {
        vManoObra  += elemento.mano_obra
        vRepuestos += elemento.repuestos 
        vLubricantes += elemento.lubricantes 
        vBaterias += elemento.baterias 
        vLlantas += elemento.llantas 
        vOtros += elemento.otros 
        vTotal += elemento.total 
        let vData:any =[]
        vData.push(elemento.mano_obra) 
        vData.push(elemento.repuestos) 
        vData.push(elemento.lubricantes) 
        vData.push(elemento.baterias) 
        vData.push(elemento.llantas ) 
        vData.push(elemento.otros)
        vDatos = { data: vData , label: elemento.descripcion, stack: 'a' }  
        vDatosChart.push(vDatos)
      });
      this.barChartData = vDatosChart
  
      this.totales.mano_obra = 0
      this.totales.repuestos = 0
      this.totales.lubricantes = 0
      this.totales.baterias = 0
      this.totales.llantas = 0
      this.totales.otros = 0
      this.totales.otros = 0
      this.totales.total = 0
    }

  
 
  }
}
