import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../Services/SideBar/sidebar.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router, NavigationEnd } from '@angular/router';
import { UsuarioService } from 'src/app/Services/Usuario/usuario.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
estaExpandido = false
showMenu = false;
es_login = true;
sucursales: any = []
sucursalActiva = ""
mostrarSucursal= true
ciudades:any =[]
mostrarCiudades = false

  constructor(public sidebarservice:SidebarService,
              private deviceService: DeviceDetectorService,
              private route:Router,
              private sUsuario:UsuarioService
              ) {
    this.route.events.subscribe(

      
      async (event: any) => {
        this.mostrarCiudades = false
         this.mostrarSucursal =  sUsuario.getMultiSucursal()
           
        if (await event instanceof NavigationEnd) {

         if (this.route.url == '/login' || this.route.url == '/') {
           this.es_login = true;
           this.sidebarservice.setSidebarState(true)
           sessionStorage.clear()
         } else {

            this.mostrarSucursal = true  
            this.getSucursalActiva()
            this.es_login = false; 

           if (this.route.url == '/taller/dashboard/entrega-tarjetas' || 
               this.route.url == '/taller/dashboard/recoleccion'|| 
               this.route.url == '/taller/verificacion' ) {
                 this.mostrarSucursal = false 
           } 
           if (this.route.url == '/taller/verificacion' ) {
                 this.mostrarSucursal = false 
                 this.mostrarCiudades = true
           } 
         }
       }
     });
  }



  async ngOnInit() {
    this.sidebarservice.setSidebarState(true);
    await this.getSucursales()
    await this.obtenerCiudades()
    this.getSucursalActiva()
  }

 async toggleSidebar(){
   this.validarExpandido()
    this.showMenu = this.deviceService.isMobile() ? !this.sidebarservice.getSidebarState() : this.sidebarservice.getSidebarState()
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    await this.sidebarservice.getData()
  
    
  }

async getSucursales(){
  this.sucursales = await this.sUsuario.getSucursales()
}

setSucursal(pSucursal:any ){
  //Se establce en el servicio para que cualquiera pueda obtener la sucursal
  this.sUsuario.sucursalActiva = pSucursal.sucursal
  this.sUsuario.setSucursal(pSucursal.sucursal)
  window.location.reload()
  this.getSucursalActiva()
  // this.route.navigate([this.route.url])
}

getSucursalActiva(){
  this.sucursalActiva = this.sUsuario.getSucursal()
}


validarExpandido(){
  if (!this.deviceService.isMobile()) {
    this.estaExpandido = !this.estaExpandido
  }
}

ciudadSeleccionada(pCiudadID){
  this.sidebarservice.emitChangeCiudad(pCiudadID)
}
 
 async obtenerCiudades(){
   this.ciudades = await this.sidebarservice.getListaCiudades()
}


}
