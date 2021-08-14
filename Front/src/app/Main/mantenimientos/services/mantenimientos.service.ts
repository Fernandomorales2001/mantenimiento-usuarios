import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WEB_SERVICE, Header} from 'src/app/Main/Configuration/config';

@Injectable({
  providedIn: 'root'
})
export class MantenimientosService {

  constructor(
    private http: HttpClient
  ) { }

  async ObtenerListaProveedoresTransporte() {
    const headers = new HttpHeaders(Header) 
    const url = `${WEB_SERVICE}api/mantenimientos/obtenerListaProveedoresTransporte`;
    var body = {
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

  async getEstadosByPais(id_pais) {
    const headers = new HttpHeaders(Header) 
    const url = `${WEB_SERVICE}api/mantenimientos/getEstadosByPais`;
    var body = {
      id_pais
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
  async getCiudadesByEstado(id_estado) {
    const headers = new HttpHeaders(Header) 
    const url = `${WEB_SERVICE}api/mantenimientos/getCiudadesByEstado`;
    var body = {
      id_estado
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
  
  async actualizarListaProveedoresTransporte(p_proveedor,p_tipo_actualizacion) {
    const headers = new HttpHeaders(Header) 
    const url = `${WEB_SERVICE}api/mantenimientos/actualizarListaProveedoresTransporte`;
    var body = {
      p_proveedor,
      tipo_actualizacion:p_tipo_actualizacion
    }
    let respuesta = false;
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        respuesta = respuestaApi
      })
      .catch(async (data: any) => {

      });
    return respuesta;
    // return this.data;
  }

  async guardarNuevaTarifaTransporte(nuevaTarifaPorCiudad) {
    const headers = new HttpHeaders(Header) 
    const url = `${WEB_SERVICE}api/mantenimientos/guardarNuevaTarifaTransporte`;
    var body = {
      nuevaTarifaPorCiudad
    }
    let respuesta = false;
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        respuesta = respuestaApi
      })
      .catch(async (data: any) => {

      });
    return respuesta;
    // return this.data;
  }

  async guardarNuevoProveedorTransporte(nuevoProveedorTransporte) {
    const headers = new HttpHeaders(Header) 
    const url = `${WEB_SERVICE}api/mantenimientos/guardarNuevoProveedorTransporte`;
    var body = {
      nuevoProveedorTransporte
    }
    let respuesta = false;
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        respuesta = respuestaApi
      })
      .catch(async (data: any) => {

      });
    return respuesta;
    // return this.data;
  }
}
