import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { WEB_SERVICE, Header } from 'src/app/Main/Configuration/config';
import { UsuarioService } from 'src/app/Services/Usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(
    private http: HttpClient,
    private sUsuario:UsuarioService
    ) { }

  async getSolicitudes() {
    const headers = new HttpHeaders(Header)
    let vSucursal = this.sUsuario.getSucursal()
    let vToken = sessionStorage.getItem('token')
    const url = `${WEB_SERVICE}api/bodega/getOperacionesSolicitudes`;
    var body = {
      token: vToken,
      sucursal: vSucursal
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
  async getAlmuerzos() {
    const headers = new HttpHeaders(Header)
    let vSucursal = this.sUsuario.getSucursal()
    let vToken = sessionStorage.getItem('token')
    const url = `${WEB_SERVICE}api/bodega/getOperacionesAlmuerzo`;
    var body = {
      token: vToken,
      sucursal: vSucursal
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

}
