import { Component, OnInit } from '@angular/core';
import { DashboardGuardadoService } from '../Services/dashboard-guardado.service';
import {UsuarioService} from '../../../Services/Usuario/usuario.service';
import {PlatformModule} from '@angular/cdk/platform';

@Component({
  selector: 'app-guardados',
  templateUrl: './guardados.component.html',
  styleUrls: ['./guardados.component.css']
})
export class GuardadosComponent implements OnInit {

  date=85

  dataGuardado:any;
  sucursales:any;
  trOculto:any=true;
  p_mes=11;
  p_sucursal='00';
  meses:any=
  [
    { "id":1, "descripcion":"Enero"},
    { "id":2, "descripcion":"Febrero"},
    { "id":3, "descripcion":"Marzo"},
    { "id":4, "descripcion":"Abril"},
    { "id":5, "descripcion":"Mayo"},
    { "id":6, "descripcion":"Junio"},
    { "id":7, "descripcion":"Julio"},
    { "id":8, "descripcion":"Agosto"},
    { "id":9, "descripcion":"Septiembre"},
    { "id":10, "descripcion":"Octubre"},
    { "id":11, "descripcion":"Noviembre"},
    { "id":12, "descripcion":"Diciembre"}
  ]
  constructor(
                public guardado:DashboardGuardadoService,
                public s_sucursales:UsuarioService
  ) { }

  async ngOnInit() {
    this.llenarServicios()


      //  this.dataGuardado= [
      //   {
      //   "header":
      //   {
      //   "sucursal":"00",
      //   "titulo":"Mercaderia",
      //   "mes_anio":"Diciembre 2019"
      //   },
      //   "fill":
      //   [
      //   {
      //   "semana":49,
      //   "guardado":153,
      //   "desaciertos":11,
      //   "error_porcentual":"98.69 %"
      //   },
      //   {
      //     "semana":49,
      //     "guardado":153,
      //     "desaciertos":11,
      //     "error_porcentual":"98.69 %"
      //     },
      //     {
      //       "semana":49,
      //       "guardado":153,
      //       "desaciertos":11,
      //       "error_porcentual":"98.69 %"
      //       }
      //   ],
      //   "fill_sumary":
      //   {
      //   "guardado":620,
      //   "desaciertos":42,
      //   "error_porcentual":"97.29 %"
      //   },
      //   "grafica":
      //   {
      //   "porcentaje":97,
      //   "guardado":10,
      //   "solicitudes":7,
      //   "devynula":7,
      //   "pendiente_guardar":128
      //   },
      //   "detalle_guardado":[
      //   {
      //   "nombre":"Maicol Lopez",
      //   "total_guardado":435,
      //   "desaciertos":36,
      //   "sin_sup":3,
      //   "error_porcentual":"8.5 %"
      //   },
      //   {
      //     "nombre":"Maicol Lopez",
      //     "total_guardado":435,
      //     "desaciertos":36,
      //     "sin_sup":3,
      //     "error_porcentual":"8.5 %"
      //     },
      //     {
      //       "nombre":"Maicol Lopez",
      //       "total_guardado":435,
      //       "desaciertos":36,
      //       "sin_sup":3,
      //       "error_porcentual":"8.5 %"
      //       },
      //       {
      //         "nombre":"Maicol Lopez",
      //         "total_guardado":435,
      //         "desaciertos":36,
      //         "sin_sup":3,
      //         "error_porcentual":"8.5 %"
      //         },
      //         {
      //           "nombre":"Maicol Lopez",
      //           "total_guardado":435,
      //           "desaciertos":36,
      //           "sin_sup":3,
      //           "error_porcentual":"8.5 %"
      //           }, {
      //             "nombre":"Maicol Lopez",
      //             "total_guardado":435,
      //             "desaciertos":36,
      //             "sin_sup":3,
      //             "error_porcentual":"8.5 %"
      //             }, {
      //               "nombre":"Maicol Lopez",
      //               "total_guardado":435,
      //               "desaciertos":36,
      //               "sin_sup":3,
      //               "error_porcentual":"8.5 %"
      //               }
      // ]
      //   }
      // ]

      this.verificaFill()
  }

    verificaFill(){
      this.dataGuardado.forEach(element => {
        if(element.fill.length<4){
          while (element.fill.length < 4) {
            element.fill.push({
              "semana":"-",
              "guardado":"-",
              "desaciertos":"-",
              "error_porcentual":"-"
          })
          }
        }
      });
    }

    async llenarServicios()
    {
      this.dataGuardado = await this.guardado.getDashboardGuardado(this.p_sucursal,this.p_mes);



      this.sucursales=await this.s_sucursales.getSucursales();
    }

    mostrarCausas()
    {
      this.trOculto=!this.trOculto;
      

    }

}
