import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Header, WEB_SERVICE } from 'src/app/Main/Configuration/config';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  sucursalActiva = ""
  multiSucursal:boolean
  constructor(
    private http: HttpClient,
    private ruta: Router
  ) {


  }

  async login(p_user) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/usuario/login`;
    var body = await {
      user: p_user.user,
      pass: p_user.pass
    }
    let vRespuesta = false
    await this.http.post(url, body, { headers }).toPromise()
      .then((respuesta: any) => {
        if (respuesta.token) {
          sessionStorage.setItem('token', respuesta.token)
          this.setSucursal(respuesta.sucursal)
          this.setMultiSucursal(respuesta.multi_sucursal)
          this.sucursalActiva = respuesta.sucursal
          vRespuesta = true

        }

      })
      .catch((respuesta: any) => {

      });
    return vRespuesta
  }

  async validarNavegacion(pRuta: string) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/usuario/checkGuard`;
    let vStorage = sessionStorage.getItem('token')
    var body = {
      token: vStorage,
      route: pRuta
    }
    let vRespuesta = false;
    await this.http.post(url, body, { headers }).toPromise()
      .then((respuestaApi: any) => {
        if (respuestaApi) {
          vRespuesta = respuestaApi
        } else {
          this.ruta.navigate(['/error'])
        }
      })
      .catch((error) => { })
    return vRespuesta;
    ;
  }

  async getSucursales() {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/allas/getSucursales`;
    var body = {

    }
    let vRespuesta = [];
    await this.http.post(url, body, { headers }).toPromise()
      .then((respuestaApi: any) => {
        vRespuesta = respuestaApi
      })
      .catch((error) => { })
    return vRespuesta;
  }

  setSucursal(pSucursal: string) {
    sessionStorage.setItem('sucursal', pSucursal)
    this.sucursalActiva = pSucursal

  }

  getSucursal() {
    return sessionStorage.getItem('sucursal')
  }

  setMultiSucursal(pSucursal:boolean) {
    sessionStorage.setItem('multi_sucursal', ''+pSucursal)
    this.multiSucursal = pSucursal

  }

  getMultiSucursal() {
    return  Boolean(JSON.parse(sessionStorage.getItem('multi_sucursal')))
  }



}
