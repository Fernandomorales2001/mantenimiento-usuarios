import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WEB_SERVICE, Header} from 'src/app/Main/Configuration/config';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClientesHijosService {

  constructor( private http: HttpClient) { }


  async obtenerClientesNombreRTN(texto_busqueda:string) {

    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/obtenerClientesNombreRTN`;
    var body = {
      termino_busqueda:texto_busqueda,
    }
    let respuesta = [];
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        respuesta = respuestaApi
      })
      .catch(async (err: any) => {
        console.log(err);
      });
    return respuesta;
  }


  async obtenerClientePadre(idCliente:number) {
    Swal.fire(
      {
        title: 'Por favor espere',
        text: 'Obteniendo Data..',
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading()
        }

      }
    )
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/obtenerClientePadre`;
    var body = {
      p_id_cliente:idCliente,
    }
    let respuesta:any = {};
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        respuesta = respuestaApi
        Swal.close()
      })
      .catch(async (err: any) => {
        Swal.close()
        Swal.fire({
          // position: 'top-end',
          icon: 'error',
          title: 'Servicio no disponible: ' + err
        })
      });
    return respuesta;
  }


}

