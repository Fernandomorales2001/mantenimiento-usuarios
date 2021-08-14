import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Usuario, Paginas } from '../../interfaces/clientes.interface';
import { AppusuariosService } from '../../reconocimiento/services/appusuarios.service';

@Component({
  selector: 'app-modal-mantenimiento-usuarios-app',
  templateUrl: './modal-mantenimiento-usuarios-app.component.html',
  styleUrls: ['./modal-mantenimiento-usuarios-app.component.css']
})
export class ModalMantenimientoUsuariosAppComponent implements OnInit {

  paginas: Paginas[];

  usuario: Usuario = {
    id_app_usuario:  0,
    usuario:         '',
    password:        '',
    celular:         '',
    nombre:          '',
    activo:          true,
    token:           '',
    fecha_creacion:  new Date(),
    fecha_caduca:    new Date(),
    codigoempleado:  '',
    es_supervisor:   true
  };

  // usuarios: Usuario[];.

  @Output() onNuevoUsuario: EventEmitter<Usuario> = new EventEmitter();
  @ViewChild('modalUsuario', { static: false }) modalUsuario: ModalDirective;

  constructor(private appusuariosService: AppusuariosService) { }

  ngOnInit(): void {
  }

 async abrirModal(){
        this.modalUsuario.show();  
        await this.getPaginas() 
  }

  cerrar(){
    this.modalUsuario.hide();
  }

  guardarUsuario(){
     this.onNuevoUsuario.emit(this.usuario);
     console.log(this.usuario);
  }

  async getPaginas(){
    await this.appusuariosService.getPaginas().then( (res:any) =>
       {
         this.paginas = res.data
         console.log(this.paginas);
       });
   }
 
}
