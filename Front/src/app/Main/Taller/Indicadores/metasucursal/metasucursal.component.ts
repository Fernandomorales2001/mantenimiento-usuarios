import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from 'src/app/Services/Indicadores/indicadores.service';

@Component({
  selector: 'app-metasucursal',
  templateUrl: './metasucursal.component.html',
  styleUrls: ['./metasucursal.component.css']
})
export class MetasucursalComponent implements OnInit {
sucursales:any = []
  constructor(
    private sIndicadores:IndicadoresService
  ) { }

async ngOnInit() {
  await this.consultarSucursales()
  }

  async consultarSucursales(){
    this.sucursales = await this.sIndicadores.consultarMetasSucursales()
    console.log(this.sucursales);
    
  }

  guardarConfiguracion(){
    console.log(this.sucursales);
    this.sIndicadores.guardarConfiguracionMetaSucursal(this.sucursales)
    
  }

}
