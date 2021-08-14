import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { IndicadoresService } from 'src/app/Services/Indicadores/indicadores.service';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  
  @ViewChild('sel_sucursal') sucursalSeleccionada : ElementRef
  @ViewChild('sel_unidades') unidadSeleccionada : ElementRef
  @ViewChild('sel_origenDatos') origenDatosSeleccionada : ElementRef
  @ViewChild('sel_aplicabilidad') aplicabilidadSeleccionada : ElementRef
  @ViewChild('sel_fuente') fuentedSeleccionada : ElementRef
  @ViewChild('sel_visualizarPor') visualizarPorSeleccionada : ElementRef
  @ViewChild('sel_asesores') asesorSeleccionado : ElementRef
  @ViewChild('sel_tecnicos') tecnicoSeleccionado : ElementRef
  @ViewChild('sel_empleado') empleadoSeleccionado : ElementRef
 
  @Input() mostrarSucursal: boolean = false;
  @Input() mostrarUnidades: boolean = false;
  @Input() mostrarOrigenDatos: boolean = false;
  @Input() mostrarAplicabilidad: boolean = false;
  @Input() mostrarFuente: boolean = false;
  @Input() visualizarPor: boolean = false;
  @Input() mostrarAsesores: boolean = false;
  @Input() mostrarTecnicos: boolean = false;
  @Input() mostrarEmpleados: boolean = false;
  @Input() mostrarMultiDato: boolean = false;
  @Input() ocultarOpcionSucursal: boolean = false;
  @Input() ocultarOpcionUnidades: boolean = false;
  @Input() ocultarOpcionPorcentaje: boolean = false;
  @Input() ocultarOpcionLempiras: boolean = false;
  
  @Output() getFiltroAplicado = new EventEmitter();
  
  fecha_desde: any;
  fecha_hasta: any;
  datosFiltro:any =[
    {datos_tabla:''},
    {datos_tabla:''},
    {datos_tabla:''},
    {datos_tabla:''},
    {datos_tabla:''},
    {datos_tabla:''},
    {datos_tabla:''},
    {datos_tabla:''},
    {datos_tabla:''}
  ]
  selected: {start: Moment, end: Moment};
  todosTecnicos:any
  todosAsesore:any
  
  constructor(
    private sIndicadores:IndicadoresService
  ) { }
  async ngAfterViewInit() {
    setTimeout(() => {
      console.log('DSEPUES DE LA VISTA');
      
      this.aplicarFiltro()
    }, 800);
  }

  async ngOnInit() {
    await this.obtenerDatosFiltro()
    this.quitarOpciones()
    this.cambiarOrigenDatos(2)
    this.validarMostrarSucursal() 
  }

 async  validarMostrarSucursal(){
   setTimeout(async () => {
     //SUCURSAL
     if (this.origenDatosSeleccionada.nativeElement.value == 1) {
       this.mostrarAsesores = false
       this.mostrarSucursal = true
     }
   }, 500);
  }
  quitarOpciones(){
    if (this.ocultarOpcionSucursal) {
      this.datosFiltro[2].tabla_datos.splice(0,1)
    }
    if (this.ocultarOpcionUnidades) {
      this.datosFiltro[1].tabla_datos.splice(0,1)
    }
    if (this.ocultarOpcionLempiras) {
      this.datosFiltro[1].tabla_datos.splice(1,1)
    }
    if (this.ocultarOpcionPorcentaje) {
      this.datosFiltro[1].tabla_datos.splice(2,1)
    }
  }

  async changeSucursal(pSucursal){
    let vDatos = await this.sIndicadores.consultarEmpleadosAsesoresTecnicos(pSucursal)
    //ASESORES
    this.datosFiltro[6].tabla_datos =vDatos[0].tabla_datos
    //TENICOS
    this.datosFiltro[7].tabla_datos =vDatos[1].tabla_datos
    //EMPLEADOS
    this.datosFiltro[8].tabla_datos =vDatos[2].tabla_datos
 
  }

  async obtenerDatosFiltro(){ 
    this.datosFiltro = await this.sIndicadores.getDataFiltro() 
    this.todosAsesore = this.datosFiltro[6].tabla_datos
    this.todosTecnicos = this.datosFiltro[7].tabla_datos 
    
  }
  async cambiarFecha(pEvento:any){
    pEvento.startDate.locale('eo')
    pEvento.endDate.locale('eo')
    pEvento.startDate.format('L')
    pEvento.endDate.format('L')
    this.fecha_desde = await pEvento.startDate.subtract(0, "days").format("DD/MM/YYYY");
    this.fecha_hasta = await pEvento.endDate.subtract(0, "days").format("DD/MM/YYYY");
  }

  cambiarOrigenDatos(pValor){
    if (!this.ocultarOpcionSucursal) {
      
     this.datosFiltro[6].tabla_datos  = this.todosAsesore
     this.datosFiltro[7].tabla_datos = this.todosTecnicos 
    }else{
      if (this.sucursalSeleccionada.nativeElement.value !='') {
        this.changeSucursal(this.sucursalSeleccionada.nativeElement.value)
      }else{
        this.changeSucursal('0')
      }
    } 
    

      if (!this.mostrarMultiDato && this.mostrarOrigenDatos) {
        //SUCURSAL
        if (pValor == 1) {
          this.mostrarSucursal = true
          this.mostrarAsesores = false
          this.mostrarTecnicos = false

        }

        //Asesores
        if (pValor == 2) {
          this.mostrarSucursal = false
          this.mostrarTecnicos = false
          this.mostrarAsesores = true
        }

        //Tecnicos
        if (pValor == 3) {
          this.mostrarSucursal = false
          this.mostrarAsesores = false
          this.mostrarTecnicos = true
        }
      }else{ 
        if (this.mostrarMultiDato && this.mostrarOrigenDatos) {
                 //Asesores 
            if (pValor == 2) {
            this.mostrarSucursal = true
            this.mostrarTecnicos = false
            this.mostrarAsesores = true
          }
  
          //Tecnicos
          if (pValor == 3) {
            this.mostrarSucursal = true
            this.mostrarAsesores = false
            this.mostrarTecnicos = true
          }
          
        }

      }
   
    
  }
 
  aplicarFiltro(){
    let vDatos:any = { }

    if (this.mostrarSucursal) {
      vDatos.sucursal = this.sucursalSeleccionada.nativeElement.value 
      vDatos.sucursal_seleccionado = this.sucursalSeleccionada.nativeElement.options[this.sucursalSeleccionada.nativeElement.selectedIndex].text
    }

    if (this.fecha_desde) {
      vDatos.fecha_desde = this.fecha_desde 
      vDatos.fecha_hasta = this.fecha_hasta
    }else{
      let vFecha = new Date()
      vDatos.fecha_desde = vFecha.getDate() +'/'+ (vFecha.getMonth() + 1) +'/' + vFecha.getFullYear()
      vDatos.fecha_hasta = vFecha.getDate() +'/'+ (vFecha.getMonth() + 1 )+'/' + vFecha.getFullYear()
    }

    if (this.mostrarUnidades) {
      vDatos.valores_datos = this.unidadSeleccionada.nativeElement.value
      vDatos.valores_seleccionado= this.unidadSeleccionada.nativeElement.options[this.unidadSeleccionada.nativeElement.selectedIndex].text 
    }

    if (this.mostrarOrigenDatos) {
      vDatos.origenes_datos = this.origenDatosSeleccionada.nativeElement.value
      vDatos.datos_seleccionado = this.origenDatosSeleccionada.nativeElement.options[this.origenDatosSeleccionada.nativeElement.selectedIndex].text
    }

    if (this.mostrarAplicabilidad) {
      vDatos.aplicabilidad_reclamos = this.aplicabilidadSeleccionada.nativeElement.value
      vDatos.aplicabilidad_seleccionado = this.aplicabilidadSeleccionada.nativeElement.options[this.aplicabilidadSeleccionada.nativeElement.selectedIndex].text
    }

    if (this.mostrarFuente) {
      vDatos.fuente_reclamos = this.fuentedSeleccionada.nativeElement.value
      vDatos.fuente_seleccionado = this.fuentedSeleccionada.nativeElement.options[this.fuentedSeleccionada.nativeElement.selectedIndex].text
    }

    if (this.visualizarPor) {
      vDatos.forma_visualizar_reclamos_por_sistema = this.visualizarPorSeleccionada.nativeElement.value
      vDatos.reclamos_seleccionado = this.visualizarPorSeleccionada.nativeElement.options[this.visualizarPorSeleccionada.nativeElement.selectedIndex].text
    }

    if (this.mostrarAsesores) {
      vDatos.asesores = this.asesorSeleccionado.nativeElement.value
      vDatos.asesores_seleccionado = this.asesorSeleccionado.nativeElement.options[this.asesorSeleccionado.nativeElement.selectedIndex].text
    }

    if (this.mostrarTecnicos) {
      vDatos.tecnicos = this.tecnicoSeleccionado.nativeElement.value
      vDatos.tecnicos_seleccionado = this.tecnicoSeleccionado.nativeElement.options[this.tecnicoSeleccionado.nativeElement.selectedIndex].text
    }

    if (this.mostrarEmpleados) {
      vDatos.empleados_taller = this.empleadoSeleccionado.nativeElement.value 
      vDatos.empleados_seleccionado = this.empleadoSeleccionado.nativeElement.options[this.empleadoSeleccionado.nativeElement.selectedIndex].text
    }
    console.log(vDatos);
    
    this.getFiltroAplicado.emit(vDatos)
 
  }
}
