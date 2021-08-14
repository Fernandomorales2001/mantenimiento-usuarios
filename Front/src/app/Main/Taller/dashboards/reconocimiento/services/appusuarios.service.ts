import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WEB_SERVICE, Header } from 'src/app/Main/Configuration/config';
import Swal from 'sweetalert2';
import { title } from 'process';
import { Usuario } from '../../interfaces/clientes.interface';


@Injectable({
  providedIn: 'root'
})
export class AppusuariosService {

  constructor(private http: HttpClient) { }

  async getUsuario() {
    Swal.fire(
      {
        title: 'Por favor espere',
        text: 'Obteniendo Data...',
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading()
        }

      }
    )
  const headers = new HttpHeaders(Header)
  const url = `${WEB_SERVICE}api/taller/getUsuario`;
  let body={}
  let respuesta = [];
  await this.http.post(url,body,{headers}).toPromise()
    .then(async (respuestaApi: any) => {
      respuesta = respuestaApi
      console.log('Lista de Usuarios ', respuesta)
      Swal.close()
    })
    .catch(async (err: any) => {
      Swal.close()
      Swal.fire({
        icon: 'error',
        title: 'Servicio no disponible: ' + err
      })
    });
    return respuesta
    }


    async getUsuariosById(id_app_usuario: number) {
      Swal.fire(
        {
          title: 'Por favor espere',
          text: 'Obteniendo Data...',
          allowOutsideClick: false,
          onBeforeOpen: () => {
            Swal.showLoading()
          }

        }
      )
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/getUsuariosById`;
    var body = {
      p_id_app_usuario: id_app_usuario
    }

    let respuesta = [];
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        respuesta = respuestaApi
        console.log('Lista de Usuarios ', respuesta)
        Swal.close()
      })
      .catch(async (err: any) => {
        Swal.close()
        Swal.fire({
          icon: 'error',
          title: 'Servicio no disponible: ' + err
        })
      });
      return respuesta
      }


async createUsuario(body: any){
  Swal.fire(
    {
      title: 'Por favor espere',
      text: 'Registrando Usuario...',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    }
  )
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/createUsuario`;
  let response = [];
  await this.http.post(url, body, {headers}).toPromise()
    .then(async (respuestaApi: any) => {
      response = respuestaApi
      console.log('Usuario: ', response)
      Swal.close()
    })
    .catch( async (err: any) => {
      Swal.close()
      Swal.fire({
        icon: 'error',
        title: 'Error de servicio: ' + err
      })
    });
    return response
}



  actualizarUsuario(usuarios: Usuario){
    console.log(usuarios)
    return this.http.post(`${WEB_SERVICE}api/taller/updateUsuario/${usuarios.id_app_usuario}`, usuarios)
  }


  async getPaginas() {

  const headers = new HttpHeaders(Header)
  const url = `${WEB_SERVICE}api/taller/getPaginas`;
  let body={}
  let respuesta = [];
  await this.http.post(url,body,{headers}).toPromise()
    .then(async (respuestaApi: any) => {
      respuesta = respuestaApi
      console.log('Lista de Paginas ', respuesta)
      Swal.close()
    })
    .catch(async (err: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Servicio no disponible: ' + err
      })
    });
    return respuesta
    }

    // getPaginas(){
    //   return this.http.get(`${WEB_SERVICE}/taller/getPaginas`)
    // }

}

