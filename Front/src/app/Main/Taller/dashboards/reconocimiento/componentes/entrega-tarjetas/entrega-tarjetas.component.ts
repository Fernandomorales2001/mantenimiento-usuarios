import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from '../../services/estadisticas.service';

@Component({
  selector: 'app-entrega-tarjetas',
  templateUrl: './entrega-tarjetas.component.html',
  styleUrls: ['./entrega-tarjetas.component.css']
})
export class EntregaTarjetasComponent implements OnInit {
pendientes:any = []

entregadas:any = []
contador:number = 0
contadorEntregadas:number = 0
  fecha_desde: any;
  fecha_hasta: any;
  fecha:any
  constructor(
    private sEstadistica:EstadisticasService
  ) { }

 async  ngOnInit() {
   await this.obtenerTarjetasPendientes()
   await this.obtenerTarjetasEntregadas()
  }


  async obtenerTarjetasPendientes(){
    this.pendientes = await this.sEstadistica.getEntregaTarjetasPendientes()
    console.log('TARJETAS PENDIENTES ',this.pendientes)
    this.contador = 0;
    this.pendientes.forEach(element => {
      this.contador += 1 
    });
  }

  async obtenerTarjetasEntregadas(){
    this.entregadas = await this.sEstadistica.GetTarjetasEntregadas(this.fecha_desde, this.fecha_hasta )
    this.contadorEntregadas = 0;
    this.entregadas.forEach(elemento => {
      if (elemento.contador >0 ) {
        this.contadorEntregadas += elemento.contador
      }
    });
  }

  expandir(pObjeto:any){
    if(pObjeto.contador>0){
      pObjeto.expandir = !pObjeto.expandir
    }
  }

  async cambiarFecha(pEvento:any){
    pEvento.startDate.locale('eo')
    pEvento.endDate.locale('eo')
    pEvento.startDate.format('L')
    pEvento.endDate.format('L')
    this.fecha_desde = await pEvento.startDate.subtract(0, "days").format("DD/MM/YYYY");
    this.fecha_hasta = await pEvento.endDate.subtract(0, "days").format("DD/MM/YYYY");
    this.obtenerTarjetasEntregadas()
  }
  

}
