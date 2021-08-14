import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WEB_SERVICE, Header } from 'src/app/Main/Configuration/config';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class VerificacionService {

  constructor(
    private http:HttpClient
  ) { }

  async getTalleres(pCiudadId) {
    const headers = new HttpHeaders(Header) 
    let vToken = sessionStorage.getItem('token')
    const url = `${WEB_SERVICE}api/taller/GetListaTalleresVerificacion`;
    var body = {
      ciudad:pCiudadId
    }
    let respuesta = [];
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        respuesta = respuestaApi
      })
      .catch(async (data: any) => {
      });
    return respuesta;
  }


  async mandarActualizarTalleres(pDatos:any){

    Swal.fire({
      title:'En proceso',
      text:'Por favor espere..',
      onBeforeOpen: () => {
        Swal.showLoading()
      }
  })
    const headers = new HttpHeaders(Header);
    let body = pDatos
    const url = `${WEB_SERVICE}api/taller/mandarActualizarTalleres`;
    let resultado = false
     await this.http.post(url, body, { headers }).toPromise()
    .then(async (respuestaApi: any)=>{
      console.log(respuestaApi);
      if (respuestaApi) {        
        Swal.close()
        Swal.fire({title:'Proceso exitoso', text:'Los talleres fueron puestos para actualizar',icon:'success'})
        resultado = true
      }
      
    })
    .catch(async respuestaApi =>{
      Swal.close()
      Swal.fire({
        title:'Error al conectar con el servidor',
        icon:'error',
        text:'Status Error: '+respuestaApi.status +' Mensaje:' +respuestaApi.statusText
      })
    });
    return resultado;
  }
}
