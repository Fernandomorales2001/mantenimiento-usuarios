import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { MantenimientosService } from '../services/mantenimientos.service';

interface ProveedorTransporte{
  id_proveedor?:Number,
  costo_tarifa_plana:Number,
  nombre_proveedor:String,
  tiene_servicio_adomicilio:Boolean,
  tiene_transporte_interurbano:Boolean,
  sucursales_disponibles:Sucursales[],
  tarifas_ciudades:Tarifa[],
  ciudades_origen:Ciudad[],
  paises_destino:Pais[]
}

interface Sucursales{
  sucursal:String,
  activo:Boolean,
  id_proveedor:Number
}

interface Pais{
  id_pais:Number,
  pais_nombre:String
}

interface Estado{
  id_estado:Number,
  estado_nombre:String
}

interface Ciudad{
  id_ciudad:Number,
  ciudad_nombre:String
}

interface Tarifa{
  id_ciudad_origen:Number,
  id_ciudad_destino:Number,
  ciudad_origen_nombre:String,
  ciudad_destino_nombre:String,
  costo:Number,
  id_proveedor_servicio_domicilio:Number
}



@Component({
  selector: 'app-transportes-delivery',
  templateUrl: './transportes-delivery.component.html',
  styleUrls: ['./transportes-delivery.component.css']
})
export class TransportesDeliveryComponent implements OnInit {

  @ViewChild('tarifa_plana',{static:true}) tarifa_plana:ElementRef

  listaProveedoresTransporte: ProveedorTransporte[];

  modalTarifaPlana: BsModalRef;
  modalSucursalesDisponibles: BsModalRef;
  modalTarifaCiudades: BsModalRef;
  modalNuevoProveedor: BsModalRef;

  esNuevaTarifa:Boolean=false

  proveedorSeleccionado:ProveedorTransporte={
    id_proveedor:0,
    costo_tarifa_plana:0,
    nombre_proveedor:'',
    tiene_servicio_adomicilio:false,
    tiene_transporte_interurbano:false,
    sucursales_disponibles:[{
      sucursal:'',
      activo:false,
      id_proveedor:0
    }],
    tarifas_ciudades:[{
      id_ciudad_origen:0,
      id_ciudad_destino:0,
      ciudad_origen_nombre:'',
      ciudad_destino_nombre:'',
      costo:0,
      id_proveedor_servicio_domicilio:0
    }],
    ciudades_origen:[{
      id_ciudad:0,
      ciudad_nombre:''
    }],
    paises_destino:[{
      id_pais:0,
      pais_nombre:''
    }]
  };

  estados:Estado[] =[{
    id_estado:0,
    estado_nombre:'ESTADO...'
  }]

  ciudades:Ciudad[] =[{
    id_ciudad:0,
    ciudad_nombre:''
  }]

  nuevaTarifaPorCiudad:Tarifa={
    id_ciudad_origen:0,
    id_ciudad_destino:0,
    ciudad_origen_nombre:'',
    ciudad_destino_nombre:'',
    costo:0,
    id_proveedor_servicio_domicilio:0
  }

  tiene_transporte_interurbano:Boolean=false
  tiene_servicio_adomicilio:Boolean= false

  nuevoProveedorTransporte:any={
    nombre_proveedor:'',
    tiene_transporte_interurbano:false,
    tiene_servicio_adomicilio:false,
    costo_tarifa_plana:0
  }

  constructor(
    private sMantenimientos:MantenimientosService,
    private modalService: BsModalService
  ) { }

  async ngOnInit() {
    await this.obtenerListaProveedoresTransporte()
  }

  async obtenerListaProveedoresTransporte() {
    this.listaProveedoresTransporte = await this.sMantenimientos.ObtenerListaProveedoresTransporte();
    console.log('listaProveedoresTransporte ',this.listaProveedoresTransporte)

    this.getEstadosByPais()
  }
  async getEstadosByPais(id_pais=1) {
    let resp:any = await this.sMantenimientos.getEstadosByPais(id_pais)
    this.estados=resp
    // console.log('Estados: ',this.estados)
    this.ciudades=[{
      id_ciudad:0,
      ciudad_nombre:'CIUDAD...'
    }]
    // this.getCiudadesByEstado(this.estados[0].id_estado)
  }
  async getCiudadesByEstado(id_estado) {
    let resp:any = await this.sMantenimientos.getCiudadesByEstado(id_estado)
    this.ciudades=resp
    this.ciudades.unshift({
      id_ciudad:0,
      ciudad_nombre:'CIUDAD...'
    })
    // console.log('Ciudades: ',this.ciudades)
  }

  guardarTarifaPlanaEnter(proveedor,newCantidad, event:KeyboardEvent=null){
    if(event && event.key == 'Enter'){
      this.guardarTarifaPlana(proveedor,newCantidad)
    }
   }

   guardarTarifaPlanaClick(proveedor,newCantidad){
    this.guardarTarifaPlana(proveedor,newCantidad)
   }

   guardarTarifaPlana(proveedor,newCantidad){

  
    if(!newCantidad){
      Swal.fire(
        'ERROR',
        'Escriba una cantidad valida!',
        'warning'
      )
      return
    }
    if(newCantidad<0){
      Swal.fire(
        'ERROR',
        'Cantidad no valida!',
        'warning'
      )
      return
    }
    this.listaProveedoresTransporte.forEach(prov => {
      if(prov.id_proveedor == proveedor.id_proveedor){
        prov.costo_tarifa_plana=newCantidad
        this.actualizarProveedor(prov)
        this.modalTarifaPlana.hide();
      }
    })

    
   }

   guardarSucursalesDisponibles(){
    //  console.log(this.proveedorSeleccionado)
    this.listaProveedoresTransporte.forEach(prov => {
      if(prov.id_proveedor == this.proveedorSeleccionado.id_proveedor){
        prov.sucursales_disponibles = this.proveedorSeleccionado.sucursales_disponibles
      }
    })
   }

   editarTarifaPlana(tempTarifaPlana,proveedor){
     this.proveedorSeleccionado=proveedor
    this.modalTarifaPlana = this.modalService.show(tempTarifaPlana,{backdrop: 'static'})
    console.log(this.tarifa_plana)
    setTimeout(() => {
      this.tarifa_plana.nativeElement
    }, 1500);
   }

   editarSucursalesDisponibles(tempDisponibleSucursales,proveedor){
     this.proveedorSeleccionado=proveedor
    this.modalSucursalesDisponibles = this.modalService.show(tempDisponibleSucursales,{backdrop: 'static'})
   }

   editarTarifasCiudades(tempTarifaCiudades,proveedor){
     this.proveedorSeleccionado=proveedor
    this.modalTarifaCiudades = this.modalService.show(tempTarifaCiudades,{class:'modal-lg',backdrop: 'static'})
   }
   nuevaTarifa(){
    this.esNuevaTarifa=true
   }

   nuevoProveedor(tempNuevoProveedor){
    this.modalNuevoProveedor = this.modalService.show(tempNuevoProveedor,{class:'modal-lg modal-dialog-centered',backdrop: 'static'})
    // this.modalNuevoProveedor = this.modalService.show(tempNuevoProveedor,{class:'modal-lg',backdrop: 'static'})
   }


   async actualizarProveedor(p_proveedor,p_tipo_actualizacion='PROVEEDOR'){
    //  console.log(p_proveedor)

    await this.sMantenimientos.actualizarListaProveedoresTransporte(p_proveedor,p_tipo_actualizacion).then(resp=>{
      if(resp){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos actualizados',
          showConfirmButton: false,
          timer: 500
        })
      }
      else{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Algo salio mal, no se actualizaron los datos.',
          showConfirmButton: false,
          timer: 1500
        })
        this.obtenerListaProveedoresTransporte()
      }
    })
   }

   verificarCostoValido(ciudad){
     if(ciudad.costo<0 || ciudad.costo==null){
       ciudad.costo=0
     }
   }

  async guardarNuevaTarifa(ciudadOrigen, ciudadDestino, costo){

    if(ciudadOrigen==0){
      Swal.fire('MENSAJE','Seleccione una ciudad origen.', 'warning')
      return
    }
    if(ciudadDestino==0){
      Swal.fire('MENSAJE','Seleccione una ciudad destino.', 'warning')
      return
    }
    if(costo<0){
      Swal.fire('MENSAJE','El costo no puede ser negativo.', 'warning')
      return
    }
    if(costo==''){
      Swal.fire('MENSAJE','Escriba un costo.', 'warning')
      return
    }

    let ciudades_coinciden=false
    let mensaje=''
    if(this.proveedorSeleccionado.tarifas_ciudades){
      this.proveedorSeleccionado.tarifas_ciudades.forEach(prove => {
        if(prove.id_ciudad_origen == ciudadOrigen && prove.id_ciudad_destino == ciudadDestino){
          ciudades_coinciden=true
          mensaje = 'La ciudad origen '+prove.ciudad_origen_nombre+' y ciudad destino '+prove.ciudad_destino_nombre+' ya existe.'
        }
      });
    }

     if(ciudades_coinciden){
      Swal.fire('MENSAJE',mensaje, 'warning')
      return
     }

    let ciudad_origen:any = this.proveedorSeleccionado.ciudades_origen.find(ciudad=>ciudad.id_ciudad == ciudadOrigen)
    let ciudad_destino:any = this.ciudades.find(ciudad=> ciudad.id_ciudad == ciudadDestino)

    this.nuevaTarifaPorCiudad.ciudad_origen_nombre = ciudad_origen.ciudad_nombre
    this.nuevaTarifaPorCiudad.ciudad_destino_nombre = ciudad_destino.ciudad_nombre
    this.nuevaTarifaPorCiudad.id_ciudad_origen = ciudadOrigen
    this.nuevaTarifaPorCiudad.id_ciudad_destino=ciudadDestino
    this.nuevaTarifaPorCiudad.costo = costo
    this.nuevaTarifaPorCiudad.id_proveedor_servicio_domicilio=this.proveedorSeleccionado.id_proveedor

    let resp=false
    resp = await this.sMantenimientos.guardarNuevaTarifaTransporte(this.nuevaTarifaPorCiudad)

    if(resp){
      this.proveedorSeleccionado.tarifas_ciudades.push( {...this.nuevaTarifaPorCiudad})
      this.resetFormulario()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Datos actualizados',
        showConfirmButton: false,
        timer: 500
      })
    }
    else{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Algo salio mal, no se actualizaron los datos.',
        showConfirmButton: false,
        timer: 1500
      })
      this.obtenerListaProveedoresTransporte()
    }
  }

   resetFormulario(){
    this.esNuevaTarifa=!this.esNuevaTarifa; 
    // this.formNuevaTarifa.reset()
   }

  async guardarNuevoProveedor(nombre_proveedor:String,tarifa_plana:String){

    if(nombre_proveedor==''){
      Swal.fire('MENSAJE','Escriba el nombre del proveedor de transpe.', 'warning')
      return
    }
    if(tarifa_plana=='' || tarifa_plana==undefined || tarifa_plana==null){
      Swal.fire('MENSAJE','Escriba una tarifa.', 'warning')
      return
    }

    this.nuevoProveedorTransporte.nombre_proveedor = nombre_proveedor.toUpperCase()
    this.nuevoProveedorTransporte.tiene_transporte_interurbano = this.tiene_transporte_interurbano
    this.nuevoProveedorTransporte.tiene_servicio_adomicilio = this.tiene_servicio_adomicilio
    this.nuevoProveedorTransporte.costo_tarifa_plana = tarifa_plana
    // console.log('NUEVO PROVEEDOR', this.nuevoProveedorTransporte)

    let resp=false
    resp= await this.sMantenimientos.guardarNuevoProveedorTransporte(this.nuevoProveedorTransporte)

    if(resp){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Datos actualizados',
        showConfirmButton: false,
        timer: 500
      })
      this.obtenerListaProveedoresTransporte()
      this.modalNuevoProveedor.hide()
    }
    else{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Algo salio mal, no se actualizaron los datos.',
        showConfirmButton: false,
        timer: 1500
      })     

    }
   }

}
