import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from 'src/app/Services/Indicadores/indicadores.service';
import { EventEmitter } from 'events';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-configuracionbono',
  templateUrl: './configuracionbono.component.html',
  styleUrls: ['./configuracionbono.component.css']
})
export class ConfiguracionbonoComponent implements OnInit {
sucursales:any=[{
  tabla_inidcadores:[],
  tabla_sucursal:[],
  tabla_tipo_meta:[]
}]
bono:any
porcentajeTotalPeso:number
sucursalSeleccionada:string

  constructor(
        private sIndicadores:IndicadoresService

  ) { }

  async ngOnInit() {
      await this.consultarSucursales('04')
      this.validarPorcentaje()
  }

  async consultarSucursales(pSucursal:string){
    this.sucursalSeleccionada = pSucursal
    this.sucursales = await this.sIndicadores.consultarConfiguracionBono(pSucursal)
    this.sucursales[0].tabla_sucursal.forEach(element => {
      if (pSucursal == element.sucursal) {
        this.bono = element.bono_total_final
      }
    }); 
    
  }

  changeValor(pIndicador, valor, pEvento:any){
   if (valor.value > 0) {
     pIndicador.peso_porcentaje = Number(valor.value) 
 
     if (this.validarPorcentaje()) {

       pIndicador.peso_porcentaje = Number(valor.value) 
       pIndicador.bono = Math.round((this.bono * (valor.value/100))) 
     } else{
       valor.value = Math.round(Number((pIndicador.bono /this.bono) * 100 ))  
       pIndicador.peso_porcentaje = Number(valor.value) 
     }

   }else{
     valor.value = 1
   }
  }

  changeTipoMeta(pTipo, pIndicador){
    //PORCENTAJE
    if (pTipo == 2) {
      pIndicador.meta = 100
    }else{
      pIndicador.meta = 0

    }
  }

  changeValorMeta(pTipo, pIndicador , pValor, inputMeta , pEvento){
    pValor = Number(pValor)
    //PORCENTAJE
    if (pTipo.value == 2 && pValor <= 100) {
      pIndicador.meta = pValor
      inputMeta.value = pValor
    }else{
      if (pTipo.value == 2) {
        
        inputMeta.value = 100
        pIndicador.meta = 100
      }
    } 
      if (pTipo.value ==1) {
        pIndicador.meta =inputMeta.value 
      }
    
  }
  validarPorcentaje(){
    this.porcentajeTotalPeso = 0
    let vcontador=0
    let vPorcentajeValido = false
    this.sucursales[0].tabla_indicadores.forEach(element => {
      vcontador += element.peso_porcentaje
    });
    
    if (vcontador <=100) {
      this.porcentajeTotalPeso = vcontador
      vPorcentajeValido = true
    } 
    if (vcontador >100) {
      this.porcentajeTotalPeso = 100
    }


    return vPorcentajeValido
  }

  validarPorcentajePeso(){ 
    let vcontador=0
    let vPorcentajeValido = false
    this.sucursales[0].tabla_indicadores.forEach(element => {
      vcontador += element.peso_porcentaje
    });
    
    if (vcontador ==100) {
      vPorcentajeValido = true
    }
    return vPorcentajeValido
  }

  changeBono(pBono){
    this.bono = pBono

    this.sucursales[0].tabla_indicadores.forEach(element => {
      element.bono =  Math.round((this.bono * (element.peso_porcentaje/100)))
    });
  }
  guardarConfiguracion(){ 
    this.sucursales[0].tabla_sucursal.forEach(element => {
      if (this.sucursalSeleccionada == element.sucursal) {
       element.bono_total_final = this.bono
      }
    }); 

    let vDatos = {
      tabla_indicadores:this.sucursales[0].tabla_indicadores,
      tabla_sucursal:this.sucursales[0].tabla_sucursal
    }
 
    if (this.validarPorcentajePeso()) {
      this.sIndicadores.guardarConfiguracionBono(vDatos)
    }else{
      Swal.fire({title:'Error', text:'La suma de la columna peso debe ser 100', icon:'error'})
    }
  }

}
