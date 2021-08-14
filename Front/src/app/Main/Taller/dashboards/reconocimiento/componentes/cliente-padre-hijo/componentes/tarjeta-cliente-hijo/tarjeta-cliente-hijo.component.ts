import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarjeta-cliente-hijo',
  templateUrl: './tarjeta-cliente-hijo.component.html',
  styleUrls: ['./tarjeta-cliente-hijo.component.css']
})
export class TarjetaClienteHijoComponent implements OnInit {

  @Output() onEdicion = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  mostrarEdicion(){
    this.onEdicion.emit(1);
  }

}
