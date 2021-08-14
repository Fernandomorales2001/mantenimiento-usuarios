import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Header, WEB_SERVICE  } from '../../Main/Configuration/config';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  ciudadChange: EventEmitter<number> = new EventEmitter();
  toggled = false;
  _hasBackgroundImage = true;

  data: any;

  constructor(private http:HttpClient) {

  }

  emitChangeCiudad(pCiudadId:number){
    this.ciudadChange.emit(pCiudadId)
  }
  getCiudadId(){
    return this.ciudadChange
  }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  retornarMenu(){
    return this.data
  }

  async getData(){
   this.data = await this.getMenuList()
  }

  async getMenuList() {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/usuario/getSideBar`;
    var body = await {
      token: await sessionStorage.getItem('token')
    }
    let resp:any
   await this.http.post(url, body, { headers }).toPromise()
   .then((respuestaApi:any)=>{
     resp = respuestaApi
     this.data = resp
     sessionStorage.setItem('nombre', respuestaApi.informacion.nombre)
   })
   .catch((error)=>{
   })
    
    return resp
  }

  async getListaCiudades() {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/GetListaCiudades`;
    var body =   { }
    let resp:any
   await this.http.post(url, body, { headers }).toPromise()
   .then((respuestaApi:any)=>{
     resp = respuestaApi
   })
   .catch((error)=>{
   })
    
    return resp
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  getNombreUsuario(){
    return sessionStorage.getItem('nombre')
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
