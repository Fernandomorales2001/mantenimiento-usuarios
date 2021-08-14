import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WEB_SERVICE, Header } from 'src/app/Main/Configuration/config';
import Swal from 'sweetalert2';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  constructor(
    private http:HttpClient
  ) { }


  async getDataFiltro() {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/IndicadoresTallerLlenarFiltros`;
    var body =   { }
    let resp:any
   await this.http.post(url, body, { headers }).toPromise()
   .then((respuestaApi:any)=>{
 
     resp = respuestaApi
   })
   .catch((error)=>{
     console.log(error);
   })
   return resp
}


  async consultarDatosHome(pfiltro) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/IndicadoresTallerIndicadoresInicio`;
    var body =  pfiltro
    let resp:any
  await this.http.post(url, body, { headers }).toPromise()
  .then((respuestaApi:any)=>{
    resp = respuestaApi
    this.getDecodedAccessToken()
  })
  .catch((error)=>{
    console.log(error);
  })
    
    return resp
  }

  async getDecodedAccessToken() {
    try{
      let vStorage = sessionStorage.getItem('token')
       return await jwt_decode(vStorage)
    }
    catch(Error){
        return null;
    }
  }


  async consultarFacturacionTotal(pfiltro) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/IndicadoresTallerFacturacionTotal`;
    var body =  pfiltro
    let resp:any
  await this.http.post(url, body, { headers }).toPromise()
  .then((respuestaApi:any)=>{
    resp = respuestaApi
  })
  .catch((error)=>{
    console.log(error);
  })
    
    return resp
  }

  async consultarFacturacionHora(pfiltro) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/IndicadoresTallerFacturacionTotalHoras`;
    var body =  pfiltro
    let resp:any
  await this.http.post(url, body, { headers }).toPromise()
  .then((respuestaApi:any)=>{
    resp = respuestaApi
  })
  .catch((error)=>{
    console.log(error);
  })
    
    return resp
  }

  async consultarVehiculosTrabajados(pfiltro) {
 
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/IndicadoresTallerVehiculosTrabajados`;
    var body =  pfiltro
    let resp:any
  await this.http.post(url, body, { headers }).toPromise()
  .then((respuestaApi:any)=>{
    resp = respuestaApi
  })
  .catch((error)=>{
    console.log(error);
  })
    
    return resp
  }

  async consultarVehiculosTrabajadosDiarios(pfiltro) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/IndicadoresTallerVehiculosTrabajadosDiario`;
    var body =  pfiltro
    let resp:any
  await this.http.post(url, body, { headers }).toPromise()
  .then((respuestaApi:any)=>{
    resp = respuestaApi
  })
  .catch((error)=>{
    console.log(error);
  })
    
    return resp
  }
  
  async consultarReclamos(pfiltro) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/IndicadoresTallerReclamos`;
    var body =  pfiltro
    let resp:any
  await this.http.post(url, body, { headers }).toPromise()
  .then((respuestaApi:any)=>{
    resp = respuestaApi
  })
  .catch((error)=>{
    console.log(error);
  })
    
    return resp
  }

  async consultarReclamosPorSistema(pfiltro) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/IndicadoresTallerReclamosSistema`;
    var body =  pfiltro
    let resp:any
  await this.http.post(url, body, { headers }).toPromise()
  .then((respuestaApi:any)=>{
    resp = respuestaApi
  })
  .catch((error)=>{
    console.log(error);
  })
    
    return resp
  }

  async consultarReprocesoAsesor(pfiltro) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/IndicadoresTallerReprocesosAsesor`;
    var body =  pfiltro
    let resp:any
  await this.http.post(url, body, { headers }).toPromise()
  .then((respuestaApi:any)=>{
    resp = respuestaApi
  })
  .catch((error)=>{
    console.log(error);
  })
    
    return resp
  }

  async consultarReprocesoTecnico(pfiltro) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/IndicadoresTallerReprocesosTecnico`;
    var body =  pfiltro
    let resp:any
  await this.http.post(url, body, { headers }).toPromise()
  .then((respuestaApi:any)=>{
    resp = respuestaApi
  })
  .catch((error)=>{
    console.log(error);
  })
    
    return resp
  }

  async consultarCumplimientoTareas(pfiltro) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/IndicadoresTallerCumplimientoTareasDiarias`;
    var body =  pfiltro
    let resp:any
  await this.http.post(url, body, { headers }).toPromise()
  .then((respuestaApi:any)=>{
    resp = respuestaApi
  })
  .catch((error)=>{
    console.log(error);
  })
    
    return resp
  }
  async consultarConfiguracionBono(pSucursal) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/IndicadoresTallerConfResumenDevuelve`;
    var body =  {
      sucursal:pSucursal
    }
    let resp:any
  await this.http.post(url, body, { headers }).toPromise()
  .then((respuestaApi:any)=>{
    resp = respuestaApi
  })
  .catch((error)=>{
    console.log(error);
  })
    
    return resp
  }

  async consultarEmpleadosAsesoresTecnicos(pSucursal) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/IndicadoresTallerEmpleadosSucursal`;
    var body =  {
      sucursal:pSucursal
    }
    let resp:any
  await this.http.post(url, body, { headers }).toPromise()
  .then((respuestaApi:any)=>{
    resp = respuestaApi
  })
  .catch((error)=>{
    console.log(error);
  })
    
    return resp
  }

  async guardarConfiguracionBono(pDatos) {
    Swal.fire({
      title:'En proceso',
      text:'Por favor espere..',
      onBeforeOpen: () => {
        Swal.showLoading()
      }
  })
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/IndicadoresTallerConfResumenActualiza`;
    var body =  pDatos
    let resp:any
  await this.http.post(url, body, { headers }).toPromise()
  .then((respuestaApi:any)=>{
    Swal.close()
    resp = respuestaApi
    if (resp) {
      Swal.fire({title:'Proceso exitoso', text:'Configuracion guardada',icon:'success'})
    }
    console.log(respuestaApi);
    
  })
  .catch((error)=>{
    Swal.close()
    console.log(error);
  })
    
    return resp
  }


  async guardarConfiguracionMetaSucursal(pDatos) {
    Swal.fire({
      title:'En proceso',
      text:'Por favor espere..',
      onBeforeOpen: () => {
        Swal.showLoading()
      }
  })
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/IndicadoresTallerSucursalesMetaActualiza`;
    var body =  pDatos
    let resp:any
  await this.http.post(url, body, { headers }).toPromise()
  .then((respuestaApi:any)=>{
    Swal.close()
    resp = respuestaApi
    if (resp) {
      Swal.fire({title:'Proceso exitoso', text:'Configuracion guardada',icon:'success'})
    }
    console.log(respuestaApi);
    
  })
  .catch((error)=>{
    Swal.close()
    console.log(error);
  })
    
    return resp
  }

  async consultarMetasSucursales() {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/IndicadoresTallerSucursalesMetaDevuelve`;
    var body =  {}
    let resp:any
  await this.http.post(url, body, { headers }).toPromise()
  .then((respuestaApi:any)=>{
    resp = respuestaApi
  })
  .catch((error)=>{
    console.log(error);
  })
    
    return resp
  }

}
