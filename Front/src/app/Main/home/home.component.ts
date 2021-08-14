import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/Services/SideBar/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any
  opciones: any
  constructor(
    private sSideBar: SidebarService


  ) { }

  async  ngOnInit() {
    // await this.getData()
    this.data = this.sSideBar.getNombreUsuario()
  }

  async getData() {
    console.clear()
    this.opciones = await this.sSideBar.getMenuList()
    let agente: any = (this.opciones.menu.filter(p => p.id_grupo_padre == 15)[0].subgrupos).filter(item => item.id_side_menu == 16)
    let supervisor: any = (this.opciones.menu.filter(p => p.id_grupo_padre == 15)[0].subgrupos).filter(item => item.id_side_menu == 17)
    if (String(agente) != '') {
      //window.location.href = `http://192.168.1.246/catDiagrama/#/getToken/${await sessionStorage.getItem("token")}/agente`;
      window.location.href = `http://localhost:4500/catDiagrama/#/getToken/${await sessionStorage.getItem("token")}/agente`;
    } else if (String(supervisor) != '') {
      //window.location.href = `http://192.168.1.246/catDiagrama/#/getToken/${await sessionStorage.getItem("token")}/supervisor`;
      window.location.href = `http://localhost:4500/catDiagrama/#/getToken/${await sessionStorage.getItem("token")}/supervisor`;
    }
  }

}
