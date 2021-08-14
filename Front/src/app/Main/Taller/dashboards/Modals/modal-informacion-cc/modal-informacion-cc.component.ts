import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal'
import { EstadisticasService } from '../../reconocimiento/services/estadisticas.service';
@Component({
  selector: 'app-modal-informacion-cc',
  templateUrl: './modal-informacion-cc.component.html',
  styleUrls: ['./modal-informacion-cc.component.css']
})
export class ModalInformacionCcComponent implements OnInit {

  @ViewChild('modalInfo') _modalInfo: ModalDirective;
  titulo:any=''
  mostrar:any=false;
  dataTaller:any=[
    {
      direcciones:[],
      contactos:[{desea_tarjeta:true}]
    }
   
  ]
  constructor(private sEstadisticas: EstadisticasService,) { }

  ngOnInit() {
  }

  async construirModal(id_customer,nombre){
    this.titulo=nombre;
   try {
    this.dataTaller=await this.sEstadisticas.obtenerTalleresCustomer(id_customer);
    this.dataTaller=this.dataTaller[0]

    console.log( this.dataTaller);
    
    this._modalInfo.show();
   } catch (error) {
     console.log(error)
   }
 
  }

  cerrarModal(){
    this._modalInfo.hide()
  }

}
