import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { UsuarioService } from 'src/app/Services/Usuario/usuario.service';
import { DashboardGuardadoService } from '../Services/dashboard-guardado.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment'; // add this 1 of 4
// import swal from 'sweetalert';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-fill-rate-guardado',
  templateUrl: './fill-rate-guardado.component.html',
  styleUrls: ['./fill-rate-guardado.component.css']
})
export class FillRateGuardadoComponent implements OnInit {

  item = {
    mostrar: false
  }

  @ViewChild(`tableSolicitudes`) tableSolicitudes: ElementRef
  @ViewChild(`tableCausas`) tableCausas: ElementRef



  es_movil = true;
  dataGuardado: any;
  // sucursales:any;
  // p_mes=1;
  // p_sucursal='00';
  sucursal = "Seleccion";
  mes = 0;
  date = 99.34640522875817;
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
  sucursales: any = [
    { "id": "00" }
  ]
  constructor(
    private deviceService: DeviceDetectorService,
    public guardado: DashboardGuardadoService,
    public s_sucursales: UsuarioService,
    private spinner: NgxSpinnerService,
    private s_suc: UsuarioService
  ) {
    this.es_movil = this.deviceService.isMobile()
  }

  async ngOnInit() {
    await this.llenarServicios();
  }

  mostrarCausas(p_item) {

    p_item.mostrar = !p_item.mostrar;

  }

  async llenarServicios() {
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

    this.dataGuardado = await this.guardado.getDashboardGuardado(mesActual, this.s_suc.getSucursal())
    await this.spinner.hide('loading')


    this.sucursales = await this.s_sucursales.getSucursales();
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
      this.dataGuardado = await this.guardado.getDashboardGuardado(this.mes, this.sucursal)
      await this.spinner.hide('loading')
    }
  }

  copiarTable(tabla: number) {

    let range = document.createRange();

    switch (tabla) {
      case 1:

        range.selectNodeContents(this.tableSolicitudes.nativeElement)
        // copiar(range)

        break;
      case 2:

        range.selectNodeContents(this.tableCausas.nativeElement)
        // copiar(range)

        break;

    }


    // function copiar(p_range){
    let select = window.getSelection()
    select.removeAllRanges()
    select.addRange(range)
    document.execCommand("copy");
    // }


  }



}
