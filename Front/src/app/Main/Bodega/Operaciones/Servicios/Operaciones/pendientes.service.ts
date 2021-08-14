import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { WEB_SERVICE, Header } from 'src/app/Main/Configuration/config';
import { UsuarioService } from 'src/app/Services/Usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class PendientesService {

  constructor(
              private http: HttpClient,
              private sUsuarios:UsuarioService
          ) { }

 

  async getPendientes() {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/bodega/GetOperacionesPendientes`;
    let vSucursal = this.sUsuarios.getSucursal()
    let vToken = sessionStorage.getItem('token')
    var body =  {
      sucursal:vSucursal,
      token:vToken
    }
    let vRespuesta = {}
    await this.http.post(url, body, { headers }).toPromise()
    .then((respuestaApi:any)=>{
      vRespuesta = respuestaApi
      
    })
    .catch(()=>{

    })
    return vRespuesta
  }


  async getContadores() {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/bodega/GetOperacionesCount`;
    let vSucursal = this.sUsuarios.getSucursal()
    let vToken = sessionStorage.getItem('token')
    var body =  {
      sucursal:vSucursal,
      token:vToken
    }
    let vRespuesta = {}
    await this.http.post(url, body, { headers }).toPromise()
    .then((respuestaApi:any)=>{
      vRespuesta = respuestaApi
      
    })
    .catch(()=>{

    })
    return vRespuesta
  }




}
