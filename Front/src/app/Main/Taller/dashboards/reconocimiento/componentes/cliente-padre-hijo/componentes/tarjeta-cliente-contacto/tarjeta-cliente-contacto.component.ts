import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientePadreHijo, Contacto } from 'src/app/Main/Taller/dashboards/interfaces/clientes.interface';

@Component({
  selector: 'app-tarjeta-cliente-contacto',
  templateUrl: './tarjeta-cliente-contacto.component.html',
  styleUrls: ['./tarjeta-cliente-contacto.component.css']
})
export class TarjetaClienteContactoComponent implements OnInit {

  @Output() onEdicion = new EventEmitter<any>();

  @Input() esCliente :boolean //true cliente flase contacto
  @Input() cliente: ClientePadreHijo;
  @Input() contacto: Contacto;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarEdicion(){
    this.onEdicion.emit(1);
  }

}
