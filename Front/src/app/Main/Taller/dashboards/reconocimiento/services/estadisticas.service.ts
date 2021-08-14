import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WEB_SERVICE, Header} from 'src/app/Main/Configuration/config';
import { Cliente } from '../../interfaces/clientes.interface';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  private _talleres=[]

  constructor(
    private http: HttpClient
  ) { }

  async obtenerListaClientes(pFechaDesde:any ,  pFechaHasta:any, pIdUsuario:any, pEstado:any,pCiudad:any, pSucursal:any) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/obtenerListaClientes`;
    var body = {
      fecha_desde:pFechaDesde,
      fecha_hasta:pFechaHasta,
      id_usuario:pIdUsuario,
      estado: pEstado,
      id_ciudad: pCiudad,
      sucursal:pSucursal
    }
    let respuesta = [];
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        if(respuestaApi){
          respuesta = respuestaApi
        }
        console.log('Lista de clientes ',respuesta)
      })
      .catch(async (data: any) => {

      });
    this._talleres=respuesta
    return respuesta;
    // return this.data;
  }
  async ObtenerListaTalleresCreadosAws(fecha_desde=null,fecha_hasta=null) {
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
    const url = `${WEB_SERVICE}api/taller/ObtenerListaTalleresCreadosAws`;
    var body = {
      p_fecha_desde: fecha_desde,
      p_fecha_hasta:fecha_hasta
    }
    let respuesta = [];
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        respuesta = respuestaApi
        console.log('Lista de clientes aws ',respuesta)
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

  async ObtenerListaTalleresCreadosAwsFil(fecha_desde=null,fecha_hasta=null) {

    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/ObtenerListaTalleresCreadosAws`;
    var body = {
      p_fecha_desde:fecha_desde,
      p_fecha_hasta:fecha_hasta
    }
    let respuesta = [];
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        respuesta = respuestaApi
        console.log('Lista de clientes aws ',respuesta)
        Swal.close()
      })
      .catch(async (err: any) => {
        // Swal.close()
        // Swal.fire({
        //   // position: 'top-end',
        //   icon: 'error',
        //   title: 'Servicio no disponible: ' + err
        // })
      });
    return respuesta;
  }

  async obtenerTalleresCustomer(id_customer) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/obtenerTalleresCustomer`;
    var body = {
      p_id_customer:id_customer
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

  async obtenerUsuarioApp() {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/obtenerUsuarioApp`;
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

  async obtenerCiudadesClientesRegistrados() {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/obtenerCiudadesClientesRegistrados`;
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
  async obtenerSucursalesClientesRegistrados() {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/obtenerSucursalesClientesRegistrados`;
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



  async obtenerListaContactos(termino_busqueda) {
    console.log('termino ',termino_busqueda)
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/obtenerListaContactos`;
    var body = {
      termino_busqueda
    }
    let respuesta = [];
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        respuesta = respuestaApi
        console.log('Lista de contactos ',respuesta)
      })
      .catch(async (data: any) => {

      });
    return respuesta;
  }
  async obtenerContacto(id_contacto) {
    // console.log('termino ',id_contacto)
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/obtenerContacto`;
    var body = {
      id_contacto
    }
    let respuesta = {};
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        respuesta = respuestaApi
        console.log('contacto ',respuesta)
      })
      .catch(async (data: any) => {

      });
    return respuesta;
  }

  async obtenerCliente(id_customer) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/obtenerCliente`;
    var body = {
      id_customer
    }
    let respuesta:Cliente;
    await this.http.post<Cliente>(url, body, { headers }).toPromise()
      .then(async (respuestaApi: Cliente) => {
        respuesta = respuestaApi
        console.log('Cliente obtenido ',respuesta)
      })
      .catch(async (data: any) => {

      });
    return respuesta;
  }

  async generarActualizacionClienteCreadoAws(id_customer,id_usuario_app,seleccionados=false) {
    console.log('id_customer ',id_customer)
    const headers = new HttpHeaders(Header)
    let url;
    url = `${WEB_SERVICE}api/taller/generarActualizacionClienteCreadoAws`;
    var body = {
      id_customer:id_customer,
      id_usuario_app:id_usuario_app,
      seleccionados:seleccionados
    }
    let respuesta = false
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        respuesta = respuestaApi
      })
      .catch(async (data: any) => {

      });
    return respuesta;
  }


  get talleres(){
    return this._talleres
  }


  async actualizarEstadoAprobadoRechazado(id_customer:any ,  estado:any, comentario:string) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/actualizarEstadoAprobadoRechazado`;
    var body = {
      id_customer,
      estado,
      comentario
    }
    let respuesta = false;
    await this.http.post(url, body, { headers }).toPromise()
      .then( (respuestaApi: any) => {
        respuesta = respuestaApi
      })
      .catch((data: any) => {

      });

    return respuesta;
  }

  async getEntregaTarjetasPendientes() {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/GetEntregaTarjetasPendientes`;
    var body = {    }
    let respuesta = [];
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        console.log(respuestaApi);
        respuesta = respuestaApi
      })
      .catch(async (data: any) => {

      });
    return respuesta;
  }

  async GetTarjetasEntregadas(pFechaDesde:any, pFechaHasta:any) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/GetTarjetasEntregadas`;
    var body = {
      fecha_desde:pFechaDesde,
      fecha_hasta:pFechaHasta
       }
    let respuesta = [];
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        console.log(respuestaApi);
        respuesta = respuestaApi
      })
      .catch(async (data: any) => {
        console.log(data);


      });
    return respuesta;
  }

  async actualizarContacto(contacto) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/actualizarContacto`;
    var body = {
      contacto
    }
    console.log('body ',body)
    // return
    let respuesta = false;
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        respuesta = respuestaApi
      })
      .catch(async (data: any) => {

      });
    return respuesta;
  }

  async actualizarCliente(cliente) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/actualizarCliente`;
    var body = {
      cliente
    }
    // console.log('body ',body)
    // return
    let respuesta = false;
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        respuesta = respuestaApi
      })
      .catch(async (data: any) => {

      });
    return respuesta;
  }

  async validarCedulaContacto(id_contacto) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/validarCedulaContacto`;
    var body = {
      id_contacto
    }
    // return
    let respuesta = false;
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        respuesta = respuestaApi
      })
      .catch(async (data: any) => {

      });
    return respuesta;
  }

  async eliminarTaller(id_taller:any) {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/eliminarTaller`;
    var body = {
      id_taller
    }
    let respuesta = false;
    await this.http.post(url, body, { headers }).toPromise()
      .then( (respuestaApi: any) => {
        respuesta = respuestaApi
      })
      .catch((data: any) => {

      });

    return respuesta;
  }

  async obtenerUsuarios() {
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/obtenerUsuarios`;
    var body = {
    }
    let usuarios = [];
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        usuarios = respuestaApi
      })
      .catch(async (data: any) => {

      });
    return usuarios;
  }

  async perfilarContacto(contacto:any) {
    console.log(contacto)
    const headers = new HttpHeaders(Header)
    const url = `${WEB_SERVICE}api/taller/perfilarContacto`;
    var body = {
      contacto
    }
    let resp
    await this.http.post(url, body, { headers }).toPromise()
      .then(async (respuestaApi: any) => {
        // console.log('Respuesta perfilamiento',respuestaApi)
        resp = respuestaApi
      })
      .catch(async (data: any) => {
        console.log(data)
      });
    return resp;
  }

  async getSucursalesListado(sucursal:string){
    let body = {
      v_sucursal: sucursal
    }
    console.log(body);

    const headers = new HttpHeaders(Header)
    const url =`${WEB_SERVICE}api/allas/getSucursalesListadoTiendas`
    let respuesta:any ={}
    await this.http.post(url,body, {headers}).toPromise()
    .then(async (respuestaApi:any)=>{
      respuesta = respuestaApi
    }).catch(async (error) =>{
      console.log(error);
    });

    return respuesta;
  }

  async getPaises(){


    const headers = new HttpHeaders(Header)
    const url =`${WEB_SERVICE}api/taller/getPaises`
    let respuesta:any ={}
    await this.http.get(url, {headers}).toPromise()
    .then(async (respuestaApi:any)=>{
      respuesta = respuestaApi
    }).catch(async (error) =>{
      console.log(error);
    });

    return respuesta;
  }
  async getDepartamentos(idPais:number){

    let body ={
      p_id_pais: idPais
    }
    const headers = new HttpHeaders(Header)
    const url =`${WEB_SERVICE}api/taller/getDepartamentos`
    let respuesta:any ={}
    await this.http.post(url,body, {headers}).toPromise()
    .then(async (respuestaApi:any)=>{
      respuesta = respuestaApi
    }).catch(async (error) =>{
      console.log(error);
    });

    return respuesta;
  }
  async getMunicipios(idDepartamento:number){

    let body ={
      p_id_departamento: idDepartamento
    }

    const headers = new HttpHeaders(Header)
    const url =`${WEB_SERVICE}api/taller/getMunicipios`
    let respuesta:any ={}
    await this.http.post(url,body, {headers}).toPromise()
    .then(async (respuestaApi:any)=>{
      respuesta = respuestaApi
    }).catch(async (error) =>{
      console.log(error);
    });

    return respuesta;
  }

}
