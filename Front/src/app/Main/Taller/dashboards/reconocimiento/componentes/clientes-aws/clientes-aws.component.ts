import { Component, OnInit,ViewChild,Output,EventEmitter } from '@angular/core';
import { EstadisticasService } from '../../services/estadisticas.service';
import { async } from '@angular/core/testing';
import Swal from 'sweetalert2';
import { ModalDirective } from 'ngx-bootstrap/modal'
import { ModalInformacionCcComponent } from '../../../Modals/modal-informacion-cc/modal-informacion-cc.component';
import { ModalUsuariosAppComponent } from '../../../modals/modal-usuarios-app/modal-usuarios-app.component';

@Component({
  selector: 'app-clientes-aws',
  templateUrl: './clientes-aws.component.html',
  styleUrls: ['./clientes-aws.component.css']
})
export class ClientesAwsComponent implements OnInit {

  listaClientes:any[];
  listaAF:any[];
  clientesSeleccionado:any=[]
  tipoClientes:any=[{tipo:"CLIENTE",id:1},{tipo:"CONTACTO",id:2}]
  tipoCampania:any=[{tipo:"EN CAMPAÑA",id:true},{tipo:"NO ESTA EN CAMPAÑA",id:false}]
  @ViewChild('verInfocc') _verInfocc: ModalInformacionCcComponent;
  @ViewChild('usuariosApp') _verUsuarioApp: ModalUsuariosAppComponent;
  textBuscar:string=''
  seleccionTodos:boolean=false;
  fecha_desde:any;
  fecha_hasta:any;
  fecha:any;
  constructor(
    private sEstadisticas: EstadisticasService,
  ) { }

  async ngOnInit() {
    await this.obtenerListaClientesAws()
  }

  async obtenerListaClientesAws() {
    this.textBuscar=''
   this.listaClientes = await this.sEstadisticas.ObtenerListaTalleresCreadosAws()
    // this.listaClientes.forEach(item=>{
    //   // console.log(item.direcciones[0]);
    //   item.direccionesSt=item.direcciones[0]
    // })
  }

  /*******************MEJORAS ******/
  async cambiarCliente(tipo){
    if(tipo=="TODOS"){
      await this.obtenerListaClientesAws()
    }else{
      this.listaClientes=(await this.sEstadisticas.ObtenerListaTalleresCreadosAws()).filter(x=>(x.tipo==tipo));
    }
  }

  async enCampania(tipo){
    let esCampania:boolean=false

    if(tipo=="TODOS"){
      await this.obtenerListaClientesAws()
    }else{
      if(tipo=='false'){
        esCampania=false
      }else{
        esCampania=true;
      }
      this.listaClientes=(await this.sEstadisticas.ObtenerListaTalleresCreadosAws()).filter(x=>x.esta_en_campania_actualizacion==esCampania);
    }
  }
  async cambiarFecha(pEvento){
    let fecha;

    pEvento.startDate.locale('eo')
      pEvento.endDate.locale('eo')
      pEvento.startDate.format('L')
      pEvento.endDate.format('L')

      // fecha=this.listaClientes[1]["fecha_hora_creado"]
      this.fecha_desde = await pEvento.startDate.subtract(0, "days").format("YYYY/MM/DD");
      this.fecha_hasta = await pEvento.endDate.subtract(0, "days").format("YYYY/MM/DD");
      this.listaClientes = await this.sEstadisticas.ObtenerListaTalleresCreadosAws(this.fecha_desde,this.fecha_hasta);
  }
  async verInfoCliente(cliente){
    console.log(cliente)
    this._verInfocc.construirModal(cliente.id_customer,cliente.nombre)
  }

  async verUsuariosApp(cliente){
    if(cliente!=null){

      this._verUsuarioApp.construirControl(cliente.id_customer);
    }else{
      this._verUsuarioApp.construirControl(this.clientesSeleccionado);
    }
  }

  async buscarTaller(evento) {

    if(evento==false){
      this.listaClientes = await this.sEstadisticas.ObtenerListaTalleresCreadosAwsFil()
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
      this.listaClientes.forEach(item=>{


        if(this.clientesSeleccionado.find(x=>x.id_customer==item.id_customer)){
          item.seleccionado=true
        }
      })
    }else{
      this.obtenerListaClientesAws()
    }


}

async fcSeleccionTodos(){
  // this.seleccionTodos=!this.seleccionTodos
  this.listaClientes.forEach(element => {
    // if( this.seleccionTodos){
    //   element.seleccionado=true
    // }else{
      element.seleccionado=false
    // }
  });
  this.clientesSeleccionado=[]

}

quitarFiltroFecha() {
  this.fecha = null
  this.fecha_desde = null
  this.fecha_hasta = null
}

  agregarVisita(cliente,indice){
    this.listaClientes[indice].seleccionado= !this.listaClientes[indice].seleccionado;
    if( this.listaClientes[indice].seleccionado){

      this.clientesSeleccionado.push({id_customer:cliente.id_customer})
    }else{
      this.clientesSeleccionado.splice(this.clientesSeleccionado.findIndex(x=>x.id_customer==cliente.id_customer),1)
    }

    console.log(this.clientesSeleccionado)
  }

   /*******************MEJORAS ******/

  // async generarActualizacionClienteCreadoAws (cliente){

  //   Swal.fire({
  //     title: '¿Está seguro que desea agregar éste cliente a una campaña de actualización?',
  //     text: "El cliente será agregado a una campaña de acualización para una posterior visita",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Si',
  //     cancelButtonText: 'Cancelar'
  //   }).then( async (result) => {
  //     if (result.value) {

  //       let actualizacionGenerada = false;
  //       console.log('id_customer c',cliente)
  //       actualizacionGenerada = await this.sEstadisticas.generarActualizacionClienteCreadoAws(cliente.id_customer)

  //       if (actualizacionGenerada == true) {
  //         Swal.fire({
  //           icon: 'success',
  //           title: 'Se agregó el cliente a una campaña de actualización',
  //           showConfirmButton: false,
  //           timer: 1500
  //         })
  //         cliente.esta_en_campania_actualizacion=true;
  //       }
  //       else{
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'No se agregó el cliente a una campaña de actualización',
  //           showConfirmButton: false,
  //           timer: 1500
  //         })
  //       }

  //     }
  //   })

  // }

}
