import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Header, WEB_SERVICE  } from '../../Configuration/config';


@Injectable({
  providedIn: 'root'
})

export class DashboardGuardadoService {


  constructor(private http: HttpClient) {}


  async getDashboardGuardado(p_mes:any,p_sucursal:any) {

    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/bodega/getfillrateguardado`;
    var body =  {
      token:sessionStorage.getItem('token'),
      mes:p_mes,
      sucursal:p_sucursal
    }

    return await this.http.post(url, body, { headers }).toPromise()
  }

  async getDashboardDocumentos(p_mes:any, p_sucursal:any) {

    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/bodega/getfillratedocumentos`;
    var body =  {
      token:sessionStorage.getItem('token'),
      mes:p_mes,
      sucursal:p_sucursal
    }


    return await this.http.post(url, body, { headers }).toPromise()
  }

  async getDashboardRequisicones(p_mes:any, p_sucursal:any ) {

    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/bodega/getFillRateRequisiciones`;
    var body =  {
      token:sessionStorage.getItem('token'),
      mes:p_mes,
      sucursal:p_sucursal
    }
    

    return await this.http.post(url, body, { headers }).toPromise()
  }

  async fitroCausa(p_causa:any) {

    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/bodega/getFillRateRequisicionesFiltros`;
    var body =  {
      token:sessionStorage.getItem('token'),
       mes:p_causa.mes,
       sucursal:p_causa.sucursal,
       filtros:p_causa.filtro
    }
    // console.log(body);
    // console.log("**********");
    // console.log( await this.http.post(url, body, { headers }).toPromise());
    // console.log("**********");

    return await this.http.post(url, body, { headers }).toPromise()
    
  }

  
  async fitroDocumentos(p_causa:any) {

    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/bodega/getFillRateDocumentosFiltros`;
    var body =  {
      token:sessionStorage.getItem('token'),
       mes:p_causa.mes,
       sucursal:p_causa.sucursal,
       filtros:p_causa.filtros,
       tipo:p_causa.tipo
    }
    // console.log("**********");
    console.log(body);
    // console.log( await this.http.post(url, body, { headers }).toPromise());
    // console.log("**********");

    return await this.http.post(url, body, { headers }).toPromise()
    
  }

}
