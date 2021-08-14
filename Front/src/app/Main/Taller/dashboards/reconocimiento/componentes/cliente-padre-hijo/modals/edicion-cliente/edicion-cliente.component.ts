import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edicion-cliente',
  templateUrl: './edicion-cliente.component.html',
  styleUrls: ['./edicion-cliente.component.css']
})
export class EdicionClienteComponent implements OnInit {


  @ViewChild('modalEdicionCliente', { static: true }) modalEdicionCliente: ModalDirective;

  edicionCreacion:boolean  //TRUE EDICION, FALSE CREACION


  constructor() { }

  ngOnInit(): void {
  }


  construirComponente(edicionCreacion:boolean){
    this.edicionCreacion= edicionCreacion;
    this.modalEdicionCliente.show();
  }

  closeModal(){
    this.modalEdicionCliente.hide();
  }
}
