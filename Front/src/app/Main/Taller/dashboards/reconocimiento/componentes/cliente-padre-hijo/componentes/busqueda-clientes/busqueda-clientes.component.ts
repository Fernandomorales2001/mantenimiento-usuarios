import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ClientesHijosService } from '../../servicios/clientes-hijos.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { BusquedaCLiente } from 'src/app/Main/Taller/dashboards/interfaces/clientes.interface';

@Component({
  selector: 'app-busqueda-clientes',
  templateUrl: './busqueda-clientes.component.html',
  styleUrls: ['./busqueda-clientes.component.css']
})
export class BusquedaClientesComponent implements OnInit {

  constructor(
    private sClientePadre:ClientesHijosService
  ) { }

  @Output()ClienteSeleccionado : EventEmitter<BusquedaCLiente> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  termino: string = '';
  sugerenciasClientes:BusquedaCLiente[] = [];

  @Input() PadreHijo:boolean;

  clienteSeleccionado:BusquedaCLiente;

  ngOnInit(){
    this.sugerenciasClientes = null;
    console.log();

    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor =>{
      if(valor!='')
        this.sugerencias(valor)
      else
        this.sugerenciasClientes = null;
    })
  }

  teclaPresionada(){
   this.debouncer.next(this.termino)
  }

  async sugerencias(termino:string){
    await this.sClientePadre.obtenerClientesNombreRTN(termino).then(resp=>{
      this.sugerenciasClientes = resp;
      console.log(this.sugerenciasClientes);
    })
  }

  mostrarSeleccionado(e){

    if(e.target.value!=''){
      if(this.sugerenciasClientes!=null){
        this.termino=  this.termino.split('-')[1];
        this.clienteSeleccionado = this.sugerenciasClientes.find(cliente => cliente.nombre_completo = e.target.value)
        console.log(this.clienteSeleccionado);
        this.ClienteSeleccionado.emit(this.clienteSeleccionado);
      }

    }
  }
}
