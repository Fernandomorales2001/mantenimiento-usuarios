import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Header, WEB_SERVICE  } from '../../Configuration/config';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor(private http: HttpClient) {}

  async getProductos(p_fechaDesde, p_fechaHasta) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/logistica/getProductos`;
    var body =  {
      token: await sessionStorage.getItem('token'),
      fechaDesde: p_fechaDesde,
      fechaHasta: p_fechaHasta
    }

    return await this.http.post(url, body, { headers }).toPromise()
  }

  async getAportaciones(p_fechaDesde, p_fechaHasta) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/logistica/getAportaciones`;
    var body =  {
      token: await sessionStorage.getItem('token'),
      fechaDesde: p_fechaDesde,
      fechaHasta: p_fechaHasta
    }

    return await this.http.post(url, body, { headers }).toPromise()
  }

  async getListasPrecio(p_fechaDesde, p_fechaHasta) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/logistica/getListasPrecio`;
    var body =  {
      token: await sessionStorage.getItem('token'),
      fechaDesde: p_fechaDesde,
      fechaHasta: p_fechaHasta
    }

    return await this.http.post(url, body, { headers }).toPromise()
  }


  async getLlamadas(p_fechaDesde, p_fechaHasta) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/planta/getLlamadasLogistica`;
    var body =  {
      token: await sessionStorage.getItem('token'),
      fechaDesde: p_fechaDesde,
      fechaHasta: p_fechaHasta
    }
    let respuesta = {}
    await this.http.post(url, body, { headers }).toPromise()
    .then((respuestaApi:any)=>{
      respuesta = respuestaApi
      

    })
    .catch((error)=>{
      console.log(error);

    })
    return respuesta
  }

}
