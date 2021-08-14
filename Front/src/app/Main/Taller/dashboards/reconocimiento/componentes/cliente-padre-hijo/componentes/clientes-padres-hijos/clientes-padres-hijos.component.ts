import { Component, OnInit, ViewChild } from '@angular/core';
import { BusquedaCLiente, ClientePadreHijo, Contacto } from 'src/app/Main/Taller/dashboards/interfaces/clientes.interface';
import Swal from 'sweetalert2';
import { EdicionClienteComponent } from '../../modals/edicion-cliente/edicion-cliente.component';
import { ClientesHijosService } from '../../servicios/clientes-hijos.service';

@Component({
  selector: 'app-clientes-padres-hijos',
  templateUrl: './clientes-padres-hijos.component.html',
  styleUrls: ['./clientes-padres-hijos.component.css']
})
export class ClientesPadresHijosComponent implements OnInit {

  @ViewChild('modalEdicionCliente',{static:true})  modalEdicionCliente:EdicionClienteComponent

  dataCliente:any;
  mostrarDataCliente:boolean=false;
  clientePadre:ClientePadreHijo;
  clientesHijos:ClientePadreHijo[];
  contacto:Contacto;

  constructor(
    private sClientePadre:ClientesHijosService
  ) { }

  ngOnInit(): void {
  }


  contruirModalEdicionCliente(evento:any){
    console.log(evento);
    this.modalEdicionCliente.construirComponente(true);
  }

  constuirModalCreacionCliente(creacion:boolean){
    this.modalEdicionCliente.construirComponente(!creacion);
  }


  async getDatosClienteSeleccionado(clienteSeleccionado:BusquedaCLiente){
    console.log(clienteSeleccionado.id_customer);
    let response = await this.sClientePadre.obtenerClientePadre(clienteSeleccionado.id_customer);
    if(response.error){
      Swal.fire({
        icon: 'error',
        title: response.mensaje,
        showConfirmButton: false,
        timer: 1500
      })

    }else{
      console.log(response.data);
      this.clientePadre = response.data.result_datos_cliente[0];
      this.clientesHijos = response.data.result_data_clientes_hijos;
      if(response.data.result_datos_contacto != null){
        this.contacto = response.data.result_datos_contacto[0];
      }
      this.mostrarDataCliente = true;

      console.log('padre',this.clientePadre);
      console.log('hijos',this.clientesHijos);
      console.log('Contacto',this.contacto);



    }

  }

}
