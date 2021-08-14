import { Component, OnInit } from '@angular/core';
import { PendientesService } from '../../Servicios/Operaciones/pendientes.service';
import { SidebarService } from 'src/app/Services/SideBar/sidebar.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
contadores:any={}
estaExpandido = false
intervalo:any
  constructor(
    public sidebarservice:SidebarService,
    private sPendientes:PendientesService


  ) { 

    
  }

  async ngOnInit() {
    await this.cambiarTab()
    this.intervalo = setInterval(()=>{
      this.estaExpandido=this.sidebarservice.getSidebarState();
    }, 300)
  }

  ngOnDestroy(): void {
     clearInterval(this.intervalo)
  }

  async cambiarTab(){
    window.scroll(0,0);
    this.contadores=  await this.sPendientes.getContadores()
  }

}
