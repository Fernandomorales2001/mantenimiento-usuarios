import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Cliente, Usuario, Sucursal } from '../../../interfaces/clientes.interface';
import { ModalMantenimientoUsuariosAppComponent } from '../../../modals/modal-mantenimiento-usuarios-app/modal-mantenimiento-usuarios-app.component';
import { AppusuariosService } from '../../services/appusuarios.service';


@Component({
  selector: 'app-usuarios-app',
  templateUrl: './usuarios-app.component.html',
  styleUrls: ['./usuarios-app.component.css']
})
export class UsuariosAppComponent implements OnInit {
  usuarios: Usuario[];
  clienteSeleccionado: Cliente;
  sucursalesClientes: any[];
  sucursal_seleccionada: any;
  @ViewChild('controlUsuario', {static: false}) controlUsuario: ModalMantenimientoUsuariosAppComponent
  id_app_usuario: number = null;
  sucursalesTiendas: Sucursal[];
  constructor(
    private appusuariosService: AppusuariosService,
    ) { }

  async ngOnInit() {

    await this.getUsuario()
  }

  filtrarUsuario(value){
    console.log(value);

    this.id_app_usuario = value;
  }


  async getUsuario(){
   await this.appusuariosService.getUsuario().then( (res:any) =>
      {
        this.usuarios = res.data
        console.log(this.usuarios);
      });
  }

  abrirModalUsuario(){
    this.controlUsuario.abrirModal();
  }

  async createUsuario(nuevoUsuario: Usuario){
    let resp: any;
    let body = {
      usuario: nuevoUsuario.usuario,
      password: nuevoUsuario.password,
      celular: nuevoUsuario.celular,
      nombre: nuevoUsuario.nombre,
      activo: nuevoUsuario.activo,
      fecha_caduca: nuevoUsuario.fecha_caduca,
      es_supervisor: nuevoUsuario.es_supervisor
    }
    resp = await this.appusuariosService.createUsuario(body)
    this.usuarios.push(nuevoUsuario);
    if (!resp.error && resp.data) {
      Swal.fire({
        icon: 'success',
        title: 'Usuario agregado exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: resp.mensaje,
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  // updateEmpleado(){
  //   console.log(this.usuarios)
  //   this.appusuariosService.actualizarUsuario(this.usuarios)
  //   .subscribe(
  //     res => {
  //       console.log(res);
  //     },
  //     err => console.log(err)
  //   )
  // }
}
