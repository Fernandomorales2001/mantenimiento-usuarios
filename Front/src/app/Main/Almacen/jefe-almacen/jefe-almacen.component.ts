import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import * as moment from 'moment'; // add this 1 of 4
import { DashboardGuardadoService } from '../Services/dashboard-guardado.service';

@Component({
  selector: 'app-jefe-almacen',
  templateUrl: './jefe-almacen.component.html',
  styleUrls: ['./jefe-almacen.component.css']
})
export class JefeAlmacenComponent implements OnInit {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  selected;
  desde;
  hasta;
  dataFill=[
    {
      "header": {
        "sucursal": "00",
        "titulo": "Fill Rate Prestamos",
        "mes_anio": "Diciembre 2019"
      },
      "fill": [
        {
          "semana": "50",
          "solicitud": "50",
          "entregado": "50",
          "diferencia":"45",
          "porcentaje": "98.69 %"
        }
      ],
      "fill_sumary": {
        "solicitado": 620,
        "entregado": 42,
        "diferencia": 6,
        "porcentaje":"98.69 %"
      },
      "causas": [{
        "causa": "Esta en cono",
        "cantidad": 20,
        "porcentaje": "70%",
        "acomulado":"50 %",
        "estado":"true",
        "id_causa":1
      },
      {
        "causa": "No Inv Teorico",
        "cantidad": 10,
        "porcentaje": "70%",
        "acomulado":"50 %",
        "estado":"true",
        "id_causa":2
      }
    ],
      "sumary_causas": {
        "cantidad": 30,
        "porcentaje": "100 %",
        "acomulado": "100 %",
        "status":true
      },
      "detalle_producto":
      [
        {
        "causa":"Esta en cono",
        "codigo":"01-4599",
        "cantidad":10,
        "id_causa":1,
        "status":true
        },
        {
          "causa":"Esta en cono",
          "codigo":"01-4599",
          "cantidad":10,
          "id_causa":1,
          "status":true
        },
        {
            "causa":"No Inv Teorico",
            "codigo":"01-4599",
            "cantidad":10,
            "id_causa":2,
            "status":true
        }
      ]
    }
  ]
  

  trOculto:any=false;

  // foods= [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  
  /**/
  
 
  /**/
  ranges: any = {
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }
  constructor(
              private documentos:DashboardGuardadoService

  ) { }

  public foros: Array<Object> = [
    { nombre: "foro1", checked: false },
    { nombre: "foro2", checked: false },
    { nombre: "foro3", checked: false },
    { nombre: "foro4", checked: false }
  ];

  async ngOnInit() {
        
        this.verificaFill()
  }

  verificaFill(){
    this.dataFill.forEach(element => {
      if(element.fill.length<4){
        while (element.fill.length < 4) {
          element.fill.push({
            "semana": " - ",
            "solicitud": " - ",
            "entregado": " - ",
            "diferencia":" - ",
            "porcentaje": " - "
        })
        }
      }
    }); 
  }

  mostrarOpcion(causa:any, index){
    this.dataFill[index].detalle_producto.forEach(item=>{
      if(item.id_causa==causa.id_causa){
         item.status=!item.status
         if(item.status==false){
          this.dataFill[index].sumary_causas.cantidad=this.dataFill[index].sumary_causas.cantidad-item.cantidad
        }else{
          this.dataFill[index].sumary_causas.cantidad=this.dataFill[index].sumary_causas.cantidad+item.cantidad
        }
      }
    })

    
  }

  

  
}
