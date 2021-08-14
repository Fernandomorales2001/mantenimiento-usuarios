/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { EstadisticasService } from '../../services/estadisticas.service';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { Cliente, Galeria, Mecanico, Sucursal, Pais, Departamento, Municipio } from '../../../interfaces/clientes.interface';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  @ViewChild('map') mapElement: any;
  @ViewChild('mapataller') mapataller: any;

  listaClientes: Cliente[]
  clienteSeleccionado: Cliente;

  map: google.maps.Map;
  mapa: google.maps.Map;
  verInformacionCliente = false
  imagenes: Galeria[];
  activeSlideIndex = 0;

  contactoSeleccionado: Mecanico;

  usuarios: any = []
  fecha: any
  // estadisticas: any

  // contador: number = 0

  tipoClientes = [
    {
      id:1,
      tipo:'ECLUSIVO'
    },
    {
      id:2,
      tipo:'EXPERTO'
    }
  ]

  lat = 15.5001018;
  lng = -88.0269415;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 6
  };
  /* ={
    // ciudad
    // correo
    // departamento
    // direccion_calle1
    // empleados
    // estado_aprobado
    // fecha_hora_creado
    // galeria
    // horario_fin_semana_fin
    // horario_fin_semana_inicio
    // horario_semanal_fin
    // horario_semanal_inicio
    // horarios
    // id_taller
    // id_usuario
    // latitud
    // longitud
    // mecanicos
    // nombre
    // nombre_comercial
    // nombre_legal
    // pais
    // rtn
  }*/
  hayclienteSeleccionado=false
  fecha_desde: any
  fecha_hasta: any
  id_usuario_seleccionado: any = 'TODOS'
  textBuscar:string=''

  marcadoresMapa: any = []

  modalImgMecanico: BsModalRef;
  modalComentario: BsModalRef;
  modalFotoCedula: BsModalRef;
  imgMecanico = ''
  estado: any = 'TODOS';
  comentarioRechazo: string = '';
  bsValue = new Date();
  bsInlineValue = new Date();

  tipo_contacto: number = null;
  otros_contactos:boolean =false;

  hayCambiosDatosMecanico=false
  ciudadesClientes: any[];
  id_ciudad_seleccionado: any;
  sucursalesClientes: any[];
  sucursal_seleccionada: any;

  sucursalesTiendas: Sucursal[];
  sucursalTiendaSeleccionado:Sucursal;

  paises: Pais[];
  departamentos:Departamento[];
  municipios: Municipio[];
  constructor(
    private sEstadisticas: EstadisticasService,
    private modalService: BsModalService
  ) { }

  async ngOnInit() {
    await this.obtenerUsuarios()
    await this.obtenerCiudadesClientesRegistrados()
    await this.obtenerSucursalesClientesRegistrados()
    await this.obtenerlistaClientes()
    await this.mapInitializer();

  }

  async obtenerUsuarios() {
    await this.sEstadisticas.obtenerUsuarios()
    .then(resp=>{
      this.usuarios=resp;
      console.log('Usuarios: ',this.usuarios)
    })
  }
  async obtenerCiudadesClientesRegistrados() {
    await this.sEstadisticas.obtenerCiudadesClientesRegistrados()
    .then(resp=>{
      this.ciudadesClientes=resp;
      console.log('Ciudades Clientes: ',this.ciudadesClientes)
    })
  }
  async obtenerSucursalesClientesRegistrados() {
    await this.sEstadisticas.obtenerSucursalesClientesRegistrados()
    .then(resp=>{
      this.sucursalesClientes=resp;
      console.log('Sucursales Clientes: ',this.sucursalesClientes)
    })
  }

  async mapInitializer() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    await this.dibujarCordenadas()
  }

  expandir(pObjetoExpandir: any) {
    pObjetoExpandir.expandir = !pObjetoExpandir.expandir
  }

  async dibujarCordenadas() {
    try {
      this.limpiarMarcadores()

      this.listaClientes.forEach(taller => {
            let cordenadas = new google.maps.LatLng(taller.latitud, taller.longitud);
            var infowindow = new google.maps.InfoWindow({
              content: "<span>" + taller.nombre_legal_comercial + "</span>"
            });

            let marcadores = new google.maps.Marker({
              position: cordenadas,
              map: this.map,
              title: taller.nombre_legal_comercial,
              animation: google.maps.Animation.DROP
            });

            if(taller.estado_aprobado==true){
              marcadores.setIcon( "http://maps.google.com/mapfiles/ms/icons/green-dot.png")
            }

            if(taller.estado_aprobado==false){
                marcadores.setIcon( "http://maps.google.com/mapfiles/ms/icons/red-dot.png")
            }

            if(taller.estado_aprobado==null){
                marcadores.setIcon( "http://maps.google.com/mapfiles/ms/icons/blue-dot.png")
            }

            this.marcadoresMapa.push(marcadores)
            google.maps.event.addListener(marcadores, 'click', function () {
              infowindow.close();
              infowindow.open(this.map, marcadores);
            });
      });


      for (var i = 0; i < this.marcadoresMapa.length; i++) {
        this.marcadoresMapa[i].setMap(this.map);
      }

    } catch (error) {

    }

  }

  limpiarMarcadores() {
    for (var i = 0; i < this.marcadoresMapa.length; i++) {
      this.marcadoresMapa[i].setMap(null);
    }
    this.marcadoresMapa = []

  }

  async obtenerlistaClientes() {
    this.clienteSeleccionado=null
    this.verInformacionCliente = false
    // this.estadisticas_v2 = await this.sEstadisticas.getEstadisticasTalleres_v2(this.fecha_desde, this.fecha_hasta, this.id_usuario_seleccionado, this.estado)
    this.listaClientes = await this.sEstadisticas.obtenerListaClientes(this.fecha_desde, this.fecha_hasta, this.id_usuario_seleccionado, this.estado,this.id_ciudad_seleccionado, this.sucursal_seleccionada)
    // console.log('Estadisticas_v2 ', this.listaClientes)
    // this.getCount()
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);

    await this.dibujarCordenadas()
  }

  async verTaller(p_cliente: any) {
    console.log(p_cliente);

    this.listaClientes.forEach(cliente => {
      if(cliente.id_taller == p_cliente.id_taller){
        cliente.seleccionado=true
      }
      else{
        cliente.seleccionado=false
      }
    });

    this.clienteSeleccionado = await this.sEstadisticas.obtenerCliente(p_cliente.id_taller)
    await this.getSucursalesTiendas(this.clienteSeleccionado);
    await this.getPaises();
    // console.log('Cliente Seleccionado ',p_cliente);


    this.imagenes = this.clienteSeleccionado.galeria

    // this.clienteSeleccionado = p_cliente
    this.verInformacionCliente = true
    setTimeout(() => {
      let vCordenadas = new google.maps.LatLng(p_cliente.latitud, p_cliente.longitud)
      let vOpcionMapa: google.maps.MapOptions = {
        center: vCordenadas,
        zoom: 14
      };
      this.mapa = new google.maps.Map(this.mapataller.nativeElement, vOpcionMapa)

      let marcadores = new google.maps.Marker({
        position: vCordenadas,
        map: this.mapa
      });
      marcadores.setMap(this.mapa);
    }, 100);
  }

  async cambiarUsuario(pUsuario: any) {
    this.id_usuario_seleccionado = pUsuario;
    // await this.obtenerDatos()
    await this.obtenerlistaClientes()

  }
  async cambiarCiudad(pCiudad: any) {
    this.id_ciudad_seleccionado = pCiudad;
    // await this.obtenerDatos()
    await this.obtenerlistaClientes()

  }
  async cambiarSucursal(pSucursal: any) {
    this.sucursal_seleccionada = pSucursal;
    // await this.obtenerDatos()
    await this.obtenerlistaClientes()

  }

  async cambiarFecha(pEvento: any) {
    console.log(pEvento)
    if(pEvento.startDate != null && pEvento.endDate != null){

      pEvento.startDate.locale('eo')
      pEvento.endDate.locale('eo')
      pEvento.startDate.format('L')
      pEvento.endDate.format('L')
      this.fecha_desde = await pEvento.startDate.subtract(0, "days").format("YYYY/MM/DD");
      this.fecha_hasta = await pEvento.endDate.subtract(0, "days").format("YYYY/MM/DD");
      this.obtenerlistaClientes()
    }
  }

  async cambiarEstado() {
    await this.obtenerlistaClientes()
  }

  quitarFiltroFecha() {
    this.fecha = null
    this.fecha_desde = null
    this.fecha_hasta = null
    this.obtenerlistaClientes()
  }

  verImgMecanico(template: TemplateRef<any>, url_imagen) {
    this.imgMecanico = url_imagen
    this.modalImgMecanico = this.modalService.show(template);
  }

  agregarComentario(template: TemplateRef<any>) {
    this.modalComentario = this.modalService.show(template)
  }
  verificarFotoCedula(mecanico) {
    this.contactoSeleccionado = {...mecanico}
    console.log('Editar Contacto', this.contactoSeleccionado)
  }

  async aprobarTaller(id_customer, estado) {
    let resp = await this.sEstadisticas.actualizarEstadoAprobadoRechazado(id_customer, estado, '')

    if (resp == true) {

      this.listaClientes.forEach(cliente => {
        if(cliente.id_taller==id_customer){
          cliente.estado_aprobado=estado
        }
      });

      // this.listaClientes = this.listaClientes.map(taller => {
      //   if (taller.id_taller == tallerId) {
      //     return { ...taller, estado_aprobado: estado }
      //   }
      //   else {
      //     return taller
      //   }
      // })

      this.clienteSeleccionado.estado_aprobado = estado
    }

    Swal.fire({
      icon: 'success',
      title: 'Cliente actualizado',
      showConfirmButton: false,
      timer: 1500
    })
  }
  async rechazarTaller(id_customer, estado) {
    console.log('comentarioRechazo ', this.comentarioRechazo)
    if (this.comentarioRechazo == '') {
      Swal.fire('Aviso', 'Debe escribir un comentario', 'warning')
      return
    }
    let resp = await this.sEstadisticas.actualizarEstadoAprobadoRechazado(id_customer, estado, this.comentarioRechazo.toUpperCase())

    if (resp == true) {

      this.listaClientes.forEach(cliente => {
        if(cliente.id_taller==id_customer){
          cliente.estado_aprobado=estado
        }
      });

      // this.listaClientes = this.listaClientes.map(taller => {
      //   if (taller.id_taller == id_customer) {
      //     return { ...taller, estado_aprobado: estado }
      //   }
      //   else {
      //     return taller
      //   }
      // })

      this.clienteSeleccionado.estado_aprobado = estado
    }

    Swal.fire({
      icon: 'success',
      title: 'Taller actualizado',
      showConfirmButton: false,
      timer: 1500
    })

    this.modalComentario.hide()
  }

  async actualizarMecanico() {

    let resp = false
    this.contactoSeleccionado.id_customer_asociado=this.clienteSeleccionado.id_taller
    resp = await this.sEstadisticas.actualizarContacto(this.contactoSeleccionado)
    if (resp == true) {
      this.clienteSeleccionado = await this.sEstadisticas.obtenerCliente(this.clienteSeleccionado.id_taller)
      Swal.fire({
        icon: 'success',
        title: 'Contacto actualizado',
        showConfirmButton: false,
        timer: 1500
      })

      this.hayCambiosDatosMecanico=false
    }
  }

  async validarCedulaMecanico() {

    if(this.contactoSeleccionado.identificacion_validada==true){
      Swal.fire('MENSAJE','EL CONTACTO YA SE ENCUENTRA VALIDADO','info')
      return
    }

    let resp = false
    resp = await this.sEstadisticas.validarCedulaContacto(this.contactoSeleccionado.id_contacto)
    if (resp == true) {
      Swal.fire({
        icon: 'success',
        title: 'Cedula validada',
        showConfirmButton: false,
        timer: 1500
      })

      this.clienteSeleccionado = await this.sEstadisticas.obtenerCliente(this.clienteSeleccionado.id_taller)
      this.hayCambiosDatosMecanico=false
    }
  }

  async buscarTaller() {

      this.listaClientes = this.sEstadisticas.talleres
      var data: any[] = [];
      var elemnts = [] = this.textBuscar.split(' ');
      var concatenar: any = " ";
      this.listaClientes.forEach(i => {
        let valida: any = [];
        Object.keys(i).forEach(async function (k, v) {
          concatenar += String(i[k]) + ' ';
        });
        elemnts.forEach(element => {
          if (concatenar.toUpperCase().indexOf(element.toUpperCase()) > -1) {
            valida.push(true);
          }
        });
        if (elemnts.length == valida.length) {
          data.push(i);
        }
        concatenar = " ";
      });
      this.listaClientes = data
      await this.dibujarCordenadas()
  }


  async eliminarTaller(id_taller){

    Swal.fire({
      title: '¿Está seguro de eliminar éste cliente?',
      text: "Este proceso eliminará el cliente y los contactos asociados!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar'
    }).then( async (result) => {
      if (result.value) {
        let resp = false
        resp = await this.sEstadisticas.eliminarTaller(id_taller)
        if (resp == true) {
          Swal.fire({
            icon: 'success',
            title: 'Taller eliminado',
            showConfirmButton: false,
            timer: 1500
          })

          this.estado = 'TODOS';
          this.fecha = null
          this.fecha_desde = null
          this.fecha_hasta = null
          this.id_usuario_seleccionado= 'TODOS'
          this.textBuscar=''
          await this.obtenerlistaClientes()

        }

      }
    })
  }

  async guardarContactoEnCliente(p_mecanico){

    Swal.fire({
      title: '¿Está seguro que desea guardar éste contacto como experto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar'
    }).then( async (result) => {
      if (result.value) {

        p_mecanico.tipo_cliente = this.tipo_contacto

        this.sEstadisticas.perfilarContacto(p_mecanico).then( async resp=>{
          // console.log(resp)
          if(resp.error==true){
            Swal.fire({
              icon: 'warning',
              title: resp.mensaje,
              showConfirmButton: true
            })
            p_mecanico.tipo_cliente = null

          }
          else{

            if(resp.data){

              Swal.fire({
                icon: 'success',
                title: 'Contacto perfilado',
                showConfirmButton: false,
                timer: 1500
              })

              this.verTaller(this.clienteSeleccionado)
            }
          }
        })

      }
    })





    // this.sEstadisticas.guardarContactoEnLealtadClientes(p_mecanico).then( async resp=>{
    //   if(resp){
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Contacto registrado',
    //       showConfirmButton: false,
    //       timer: 1500
    //     })

    //     this.listaClientes = await this.sEstadisticas.ObtenerlistaClientes(this.fecha_desde, this.fecha_hasta, this.id_usuario_seleccionado, this.estado)
    //     this.listaClientes.map(taller=>{
    //       if(taller.id_taller == this.clienteSeleccionado.id_taller){
    //         this.clienteSeleccionado = taller
    //       }
    //     })
    //     this.verTaller(this.clienteSeleccionado)

    //   }
    // })


  }

  async editarCliente(){
    console.log('Editar Cliente ', JSON.stringify(this.clienteSeleccionado))
    let resp = false

    resp = await this.sEstadisticas.actualizarCliente(this.clienteSeleccionado)
    if (resp == true) {
      // this.clienteSeleccionado = await this.sEstadisticas.obtenerCliente(this.clienteSeleccionado.id_taller)
      Swal.fire({
        icon: 'success',
        title: 'Cliente actualizado',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'No se actualizo el cliente',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  async cerrarEditarCliente(){
    this.clienteSeleccionado = await this.sEstadisticas.obtenerCliente(this.clienteSeleccionado.id_taller)
  }

  async getSucursalesTiendas(cliente:Cliente){
    let response = await this.sEstadisticas.getSucursalesListado(cliente.sucursal_asignada);
    if(response.error){
      Swal.fire({
        icon: 'error',
        title: response.mensaje,
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      this.sucursalesTiendas = response.data;
      console.log(this.sucursalesTiendas);

    }


  }

  async getPaises(){
    let response = await this.sEstadisticas.getPaises();
    if(response.error){
      Swal.fire({
        icon: 'error',
        title: response.mensaje,
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      this.paises = response.data;
      console.log(response.data);

      await this.getDepartamentos(this.clienteSeleccionado.id_pais);
    }
  }
  async getDepartamentos(idPais:number){
    let response = await this.sEstadisticas.getDepartamentos(idPais);
    if(response.error){
      Swal.fire({
        icon: 'error',
        title: response.mensaje,
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      if(response.data!=null){
        this.departamentos = response.data;

        if(this.departamentos.findIndex(dep=> dep.id_estado == this.clienteSeleccionado.id_estado) != -1){
          await this.getMunicipio(this.clienteSeleccionado.id_estado);
        }
        else {
          await this.getMunicipio(this.departamentos[0].id_estado);
          this.clienteSeleccionado.id_estado = this.departamentos[0].id_estado;
        }
      }else{
        this.clienteSeleccionado.id_estado =null;
        this.clienteSeleccionado.id_ciudad = null;
      }
    }
  }
  async getMunicipio(idEstado:number){
    console.log(idEstado);

    let response = await this.sEstadisticas.getMunicipios(idEstado);
    if(response.error){
      Swal.fire({
        icon: 'error',
        title: response.mensaje,
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      if(response.data!=null){
        this.municipios = response.data;
        console.log(response.data);
        if(this.municipios.findIndex(mun=> mun.id_ciudad == this.clienteSeleccionado.id_ciudad) == -1){
          this.clienteSeleccionado.id_ciudad = this.municipios[0].id_ciudad
        }
      }else{
        this.clienteSeleccionado.id_ciudad = null;
      }

    }
  }

}
