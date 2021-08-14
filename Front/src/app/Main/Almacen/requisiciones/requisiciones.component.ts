import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label, ThemeService } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import * as moment from 'moment'; // add this 1 of 4
import { DashboardGuardadoService } from '../Services/dashboard-guardado.service';
import { UsuarioService } from '../../../Services/Usuario/usuario.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NgxSpinnerService } from 'ngx-spinner';
// import Swal from 'sweetalert';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-requisiciones',
  templateUrl: './requisiciones.component.html',
  styleUrls: ['./requisiciones.component.css']
})
export class RequisicionesComponent implements OnInit {



  @ViewChild(`tableSolicitudes`) tableSolicitudes: ElementRef
  @ViewChild(`tableCausas`) tableCausas: ElementRef
  @ViewChild(`tableProductos`) tableProductos: ElementRef


  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  selected;
  desde;
  hasta;

  // sucursales;
  sucursal = "Seleccion";
  requisiciones: any;
  dataFill: any = [];
  esMobil = false;
  mostrarDetalle: any = false;
  mes = 0;
  serialId = 0;
  filtros: any;
  sucursales: any = [
    { "id": "00" }
  ]


  meses: any =
    [
      { "id": 1, "descripcion": "Enero" },
      { "id": 2, "descripcion": "Febrero" },
      { "id": 3, "descripcion": "Marzo" },
      { "id": 4, "descripcion": "Abril" },
      { "id": 5, "descripcion": "Mayo" },
      { "id": 6, "descripcion": "Junio" },
      { "id": 7, "descripcion": "Julio" },
      { "id": 8, "descripcion": "Agosto" },
      { "id": 9, "descripcion": "Septiembre" },
      { "id": 10, "descripcion": "Octubre" },
      { "id": 11, "descripcion": "Noviembre" },
      { "id": 12, "descripcion": "Diciembre" }
    ]

  constructor(
    private s_requisiciones: DashboardGuardadoService,
    private s_sucursales: UsuarioService,
    private deviceService: DeviceDetectorService,
    private spinner: NgxSpinnerService,
    private s_suc: UsuarioService

  ) { }

  public foros: Array<Object> = [
    { nombre: "foro1", checked: false },
    { nombre: "foro2", checked: false },
    { nombre: "foro3", checked: false },
    { nombre: "foro4", checked: false }
  ];

  async ngOnInit() {
    this.llamarService();
  }

  verificaFill() {
    this.dataFill.forEach(element => {
      if (element.fill.length < 4) {
        while (element.fill.length < 4) {
          element.fill.push({
            "semana": " - ",
            "solicitud": " - ",
            "entregado": " - ",
            "diferencia": " - ",
            "porcentaje": " - "
          })
        }
      }
    });
  }

  mostrarOpcion(causa: any, index) {
    this.dataFill[index].detalle_producto.forEach(item => {
      if (item.id_causa == causa.id_causa) {
        item.status = !item.status
        if (item.status == false) {
          this.dataFill[index].sumary_causas.cantidad = this.dataFill[index].sumary_causas.cantidad - item.cantidad
        } else {
          this.dataFill[index].sumary_causas.cantidad = this.dataFill[index].sumary_causas.cantidad + item.cantidad
        }
      }
    })
  }

  async llamarService() {

    var mesActual = moment().format("MM")
    this.mes = Number(mesActual);
    this.sucursal = this.s_suc.getSucursal()
    await this.spinner.show('loading', {

      bdColor: "rgba(10,83,165,0.63)",
      size: "medium",
      color: "#0a53a5",
      type: "ball-clip-rotate",
      fullScreen: true
    })
    this.validardispositivo()
    this.sucursales = await this.s_sucursales.getSucursales();
    this.dataFill = await this.s_requisiciones.getDashboardRequisicones(mesActual, this.s_suc.getSucursal());
    console.log("*********");

    console.log(this.dataFill)
    console.log("*********");


    await this.spinner.hide('loading')
  }

  verDetalle(posicion, tabla) {

    this.dataFill[posicion].header.mostrar = !this.dataFill[posicion].header.mostrar;

  }

  validardispositivo() {
    this.esMobil = this.deviceService.isMobile()

  }

  causaDetalle(posicion) {
    let cantidadDetalle = 0;

    this.dataFill[posicion].causas_detalle.forEach(item => {
      if (item.ver_causa == true) {
        cantidadDetalle = cantidadDetalle + item.pendientes
      }
    })
    return cantidadDetalle;
  }

  mostrarCausa(posicion, causa) {

    this.dataFill[posicion].causas_detalle.forEach(item => {
      if (item.codigoobservacion == causa.codigoobservacion) {
        item.ver_causa = !item.ver_causa
      }
    })

  }

  async buscar_fill_rate() {
    if (this.mes == 0 || this.sucursal == "Seleccion" || this.sucursal == "0") {
      Swal.fire("Mes o Sucursal no seleccionados!");

    } else {

      await this.spinner.show('loading', {

        bdColor: "rgba(10,83,165,0.63)",
        size: "medium",
        color: "#0a53a5",
        type: "ball-clip-rotate",
        fullScreen: true
      })
      this.dataFill = await this.s_requisiciones.getDashboardRequisicones(this.mes, this.sucursal);
      await this.spinner.hide('loading')


    }
  }

  copiarTable(tabla: number) {
    let range = document.createRange();
    switch (tabla) {
      case 1:
        range.selectNodeContents(this.tableSolicitudes.nativeElement)
        copiar(range)
        break;
      case 2:
        range.selectNodeContents(this.tableCausas.nativeElement)
        copiar(range)
        break;
      case 3:
        range.selectNodeContents(this.tableProductos.nativeElement)
        copiar(range)
        break;
    }


    function copiar(p_range) {
      let select = window.getSelection()
      select.removeAllRanges()
      select.addRange(p_range)
      document.execCommand("copy");
    }


  }

  async filtrar(causa: any, index: number, icausa: number) {

    let causaFiltrar: any = [];
    let filtro: any = {}
    this.dataFill[index].causas[icausa].filtro = !this.dataFill[index].causas[icausa].filtro;

    this.dataFill[index].causas.forEach(item => {
      if (item.filtro == false) {
        causaFiltrar.push({
          "id_causa": item.codigoobservacion
        })
      }

    })
    console.log(this.mes, this.sucursal);
    filtro = {
      mes: this.mes,
      sucursal: this.sucursal,
      filtro: causaFiltrar
    }
    // console.log("***********");
    // console.log(await this.s_requisiciones.fitroCausa(filtro));
    // console.log("***********");
    await this.spinner.show('loading', {

      bdColor: "rgba(10,83,165,0.63)",
      size: "medium",
      color: "#0a53a5",
      type: "ball-clip-rotate",
      fullScreen: true
    })
    this.dataFill = await this.s_requisiciones.fitroCausa(filtro)
    await this.spinner.hide('loading')

  }

}
