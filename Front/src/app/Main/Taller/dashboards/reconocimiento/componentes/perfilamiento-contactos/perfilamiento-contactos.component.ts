import { Component, OnInit } from '@angular/core';
import { Subject} from 'rxjs';
import { debounceTime} from 'rxjs/operators';
import Swal from 'sweetalert2';
import { EstadisticasService } from '../../services/estadisticas.service';

interface Contacto{
  id_contacto:number,
  nombre:String,
  identificacion:String,
  nombre_identificacion:String
}

interface ContactoTarjeta{
  id_contacto: number,
  clienteid: number,
  nombres:string,
  apellido1:string,
  apellido2:string,
  cedula:string,
  fecha_nacimiento:string,
  genero:string,
  enrolado:Boolean,
  desea_tarjeta:Boolean,
  paissString,
  sucursal:string,
  nombre_genero:string,
  url_imagen:string,
  url_foto_documento_app:string,
  telefonos:Telefono[],
  correo_electronico:string,
  barrio_colonia_digitado:string,
  ciudad:string,
  departamento: string,
  tipo_cliente: number,
  tarjetaid: number,
  identificacion_escaneada:Boolean,
  identificacion_validada:Boolean,
  tarjeta_entregada:Boolean
}

interface Telefono{
  telefono:string,
  area:string
}

@Component({
  selector: 'app-perfilamiento-contactos',
  templateUrl: './perfilamiento-contactos.component.html',
  styleUrls: ['./perfilamiento-contactos.component.css']
})
export class PerfilamientoContactosComponent implements OnInit {


  contactos:Contacto[]=[];
  hayContactoSeleccionado: boolean = false;
  debouncer:Subject<String> = new Subject();
  contacto:ContactoTarjeta;
  termino_busqueda:String = '';


  constructor(
    private sEstadisticas:EstadisticasService,
  ) {  }

  async ngOnInit() {

    this.debouncer
    .pipe(debounceTime(400))
    .subscribe(termino_busqueda =>{
      console.log('Buscar: ', termino_busqueda)

      if(termino_busqueda.length<2){
        this.contactos=[]
      }
      if(termino_busqueda.length>=2){
        this.obtenerListaContactos(termino_busqueda)
      }
    })

  }

  buscarContactos(){
    this.contactos=[]
    this.hayContactoSeleccionado=false
    this.debouncer.next(this.termino_busqueda)
  }

  async obtenerListaContactos(termino_busqueda:String){
    this.contactos = await this.sEstadisticas.obtenerListaContactos(termino_busqueda)
  }


  async buscarContacto(id_contacto){
    this.contacto=null
    this.contactos=[]
    let resp:any = await this.sEstadisticas.obtenerContacto(id_contacto)
    this.contacto = resp
    if(this.contacto){
      this.hayContactoSeleccionado=true
    }
  }

  async perfilarContacto(perfil){
    let perfil_temp = this.contacto.tipo_cliente
    this.contacto.tipo_cliente = perfil

    let tituloAdvertencia=''

    if(perfil==0){
      tituloAdvertencia = '¿Está seguro que desea perfilar éste contacto como sin clasificar?';
    }
    else if(perfil==1){
      tituloAdvertencia = '¿Está seguro que desea perfilar éste contacto como exclusivo?';
    }
    else {
      tituloAdvertencia = '¿Está seguro que desea perfilar éste contacto como experto?';
    }

    Swal.fire({
      title: tituloAdvertencia,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar'
    }).then( async (result) => {
      if (result.value) {

        //console.log('contacto',this.contacto)
        this.sEstadisticas.perfilarContacto(this.contacto).then( async resp=>{

          if(resp.error==true){
            this.contacto.tipo_cliente = perfil_temp
            Swal.fire({
              icon: 'warning',
              title: resp.mensaje,
              showConfirmButton: true
            })
            console.log(this.contacto.tipo_cliente)
          }
          else{

            if(resp.data){
              Swal.fire({
                icon: 'success',
                title: 'Contacto perfilado',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }
        })

      }
    })
  }
}
