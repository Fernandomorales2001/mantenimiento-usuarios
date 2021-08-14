import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarService } from '../../Services/SideBar/sidebar.service';
import { Router, NavigationEnd } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SidebarComponent implements OnInit {
  data = {
    "menu": [],
    "informacion": {
      "nombre": "Users",
      "puesto": "Tipy",
      "state": "Online - nothing",
      "imagen": "assets/allas/profile.png"
    }
  };

  constructor(
    public sidebarservice: SidebarService,
    private ruta: Router,
    private deviceService: DeviceDetectorService
  ) {

  }

  async ngOnInit() {
    let data_side = await this.sidebarservice.getData();
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  toggle(currentMenu) {
    if (currentMenu.type === 'dropdown') {
      this.data.menu.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidebarservice.hasBackgroundImage;
  }


  toogleMenuData() {

    try {
      let menu = this.sidebarservice.retornarMenu()
      // console.log('menu ',menu)
      if (menu['menu'] != null || menu['informacion'] != null) {

        menu['menu'] = menu['menu'] == null && menu['menu'] != undefined ? [] : menu['menu']
        this.data = menu
      } else {
        this.data = {
          "menu": [],
          "informacion": {
            "nombre": "Users",
            "puesto": "Tipy",
            "state": "Online - nothing",
            "imagen": "assets/allas/profile.png"
          }
        };
      }

      return this.data.menu
    } catch (error) {

    }


    return this.data.menu
  }

  async navigarRouter(p_ruta) {
    //  console.log(p_ruta)
    //   console.log("pasa por aca")
    if (p_ruta == '/Catalogador/Supervisor') {
      // let r = await `http://localhost:4500/catDiagrama/#/getToken/${await sessionStorage.getItem("token")}/supervisor`
      let r = await `http://192.168.1.244/catdeploy/#/getToken/${await sessionStorage.getItem("token")}/supervisor`
      // console.log(r)
      // window.location.href = await r;
      window.open(r,'_blank')
    }
    if (p_ruta == '/Catalogador/Agente') {
      // let r2 = await `http://localhost:4500/catDiagrama/#/getToken/${await sessionStorage.getItem("token")}/agente`;
      let r2 = await `http://192.168.1.244/catdeploy/#/getToken/${await sessionStorage.getItem("token")}/agente`;
      // console.log(r2)
      // window.location.href = await r2
      window.open(r2,'_blank')
    }

    if (p_ruta == '/taller/supervision_enrolamiento') {
      // let r2 = await `http://localhost:5100/#/getToken/${await sessionStorage.getItem("token")}/supervision_enrolamiento`;
      let r2 = await `http://192.168.1.246/supervision_enrolamiento_comision/#/getToken/${await sessionStorage.getItem("token")}/supervision_enrolamiento`;
      // console.log(r2)
      // window.location.href = await r2
      window.open(r2,'_blank')
    }
    if (p_ruta == '/taller/supervision_pago_comision') {
      // let r2 = await `http://localhost:5100/#/getToken/${await sessionStorage.getItem("token")}/supervision_pago_comision`;
      let r2 = await `http://192.168.1.246/supervision_enrolamiento_comision/#/getToken/${await sessionStorage.getItem("token")}/supervision_pago_comision`;
      // console.log(r2)
      // window.location.href = await r2
      window.open(r2,'_blank')
    }

    if (this.ruta.url == p_ruta) {
      await this.ruta.navigate(['home'])
    }

    await this.ruta.navigate([p_ruta])

    if (this.deviceService.isMobile()) {
      this.sidebarservice.setSidebarState(true)
    }
  }

  logout() {
    sessionStorage.clear()
    this.ruta.navigate(['/login'])
  }

  abrirConfiguraciones(){
    this.ruta.navigate(['/mantenimiento/transporte-delivery'])
  }
}
