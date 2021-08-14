import { Component, OnInit,ViewChild,Output,EventEmitter } from '@angular/core';
import { EstadisticasService } from '../../reconocimiento/services/estadisticas.service';
import { ModalDirective } from 'ngx-bootstrap/modal'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-usuarios-app',
  templateUrl: './modal-usuarios-app.component.html',
  styleUrls: ['./modal-usuarios-app.component.css']
})
export class ModalUsuariosAppComponent implements OnInit {

  @Output() onCerrar = new EventEmitter<any>();
  @ViewChild('modalInfo') _modalInfo: ModalDirective;
  textBuscar:string;
  idUsuario:any=0;
  constructor( private sEstadisticas: EstadisticasService,) { }
  usuariosVisitas:any=[]
  listaUsuarios:any=[]
  seleccionTodos:any=false;
  ngOnInit() {
  }

  async construirControl(id_usuario){
  
   
    // this.seleccionTodos=false;

      this.idUsuario=id_usuario;
      this.listaUsuarios=await this.sEstadisticas.obtenerUsuarioApp();

    
    // this.listaUsuarios.forEach(element => {
    //   element.seleccionado=false;
    // });
    this._modalInfo.show()
  }

  async generarActualizacionClienteCreadoAws(usuario){

 
    // this.listaUsuarios.forEach(element => {


    //     if(element.seleccionado && this.usuariosVisitas.find(x=>x.id_usuario==element.id_app_usuario)==undefined){
          
    //       this.usuariosVisitas.push({"id_usuario":element.id_app_usuario})
    //     }
    //     if(!element.seleccionado && this.usuariosVisitas.find(x=>x.id_usuario==element.id_app_usuario)!=undefined){

    //       this.usuariosVisitas.splice(this.usuariosVisitas.findIndex(x=>x.id_usuario==element.id_app_usuario),1)
    //     }
        
    // });
    // console.log(this.usuariosVisitas);
    console.log(usuario);
    
    Swal.fire({
      title: '¿Está seguro que desea agregar éste cliente a una campaña de actualización?',
      text: "El cliente será agregado a una campaña de acualización para una posterior visita",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar'
    }).then( async (result) => {
      if (result.value) {

        let actualizacionGenerada = false;
        
        if(Array.isArray(this.idUsuario)){
          this.idUsuario.forEach(async element => {
            console.log(element);
            console.log("aqui1");
            actualizacionGenerada = await this.sEstadisticas.generarActualizacionClienteCreadoAws(element,usuario.id_app_usuario,true)
        });
        }
        else{
        //   console.log("aqui2");
          
          actualizacionGenerada = await this.sEstadisticas.generarActualizacionClienteCreadoAws(this.idUsuario,usuario.id_app_usuario,false)
        }
     
        Swal.fire(
          {
            title: 'Por favor espere',
            text: 'Procesando',
            allowOutsideClick: false,
            onBeforeOpen: () => {
              Swal.showLoading()
            }
    
          }
        )
       setTimeout(()=>{
         console.log(actualizacionGenerada);
         
        if (actualizacionGenerada == true) {
          console.log("aqui3");
          Swal.fire({
            icon: 'success',
            title: 'Se agregó el cliente a una campaña de actualización',
            showConfirmButton: false,
            timer: 1500
          })
          // cliente.esta_en_campania_actualizacion=true;
          Swal.close()
          this.cerrarModal(true)
        }
        else{
          console.log("aqui4");
          Swal.close()
          Swal.fire({
            icon: 'error',
            title: 'No se agregó el cliente a una campaña de actualización',
            showConfirmButton: false,
            timer: 1500
          })
        }
       },1500)

      }
    })
  }

  seleccionarUsuario(usuario){
      this.listaUsuarios.find(x=>x.id_app_usuario==usuario.id_app_usuario)["seleccionado"]=!this.listaUsuarios.find(x=>x.id_app_usuario==usuario.id_app_usuario)["seleccionado"]
  }

  fcSeleccionTodos(){
    this.seleccionTodos=!this.seleccionTodos
    this.listaUsuarios.forEach(element => {
      if( this.seleccionTodos){
        element.seleccionado=true
      }else{
        element.seleccionado=false
      }
    });
  }

  cerrarModal(actualiza){
    this.onCerrar.emit(actualiza);
    this._modalInfo.hide()
  }

}
