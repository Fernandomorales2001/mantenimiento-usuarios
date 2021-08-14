import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { WEB_SERVICE, Header } from 'src/app/Main/Configuration/config';
import { UsuarioService } from 'src/app/Services/Usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class GuardadoService {

  constructor(
              private http: HttpClient,
              private sUsuarios:UsuarioService
          ) { }

  async cambiarContrasenia(pIdUsuario: number, pPassword: string) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/usuario/cambiarContrasenia`;
    var body = await {
      id_usuario: pIdUsuario,
      password: pPassword
    }

    let respuesta = false;
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (data: any) => {
        respuesta = data.status;
      })
      .catch(async (data: any) => {
        respuesta = false;
      });
    return respuesta;
  }

  async getGuardados() {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/bodega/GetOperacionesGuardado`;
    let vSucursal = this.sUsuarios.getSucursal()
    let vToken = sessionStorage.getItem('token')
    var body =  {
      sucursal:vSucursal,
      token:vToken
    }
    let vRespuesta = []
    await this.http.post(url, body, { headers }).toPromise()
    .then((respuestaApi:any)=>{
      vRespuesta = respuestaApi
      
    })
    .catch(()=>{

    })
    return vRespuesta
  }




}
