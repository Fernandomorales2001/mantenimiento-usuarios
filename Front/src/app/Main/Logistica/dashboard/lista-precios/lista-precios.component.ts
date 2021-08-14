import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../Services/dashboard.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-lista-precios',
  templateUrl: './lista-precios.component.html',
  styleUrls: ['./lista-precios.component.css']
})
export class ListaPreciosComponent implements OnInit {
  selected;
  precios;

  constructor(
    private sDashboard:DashboardService,
    private spinner:NgxSpinnerService
  ) { }

  async ngOnInit() {
    await this.spinner.show('loading', {

      bdColor :"rgba(10,83,165,0.63)",
      size : "medium",
      color : "#0a53a5",
      type : "ball-clip-rotate",
      fullScreen:true
    })
    this.precios = await this.sDashboard.getListasPrecio(null, null)
    await setTimeout(async ()=>{
      await this.spinner.hide('loading')
    }, 700)
  }

  async selectFecha(p_event:any){
    this.precios['lista'] = []
    await this.spinner.show('loading', {

      bdColor :"rgba(10,83,165,0.63)",
      size : "medium",
      color : "#0a53a5",
      type : "ball-clip-rotate",
      fullScreen:true
    })
    let fromDate = await p_event.startDate.subtract(0, "days").format("DD-MM-YYYY");
    let lastDate = await p_event.endDate.subtract(0, "days").format("DD-MM-YYYY");
    this.precios = await this.sDashboard.getListasPrecio(fromDate, lastDate)
    await setTimeout(async ()=>{
      await this.spinner.hide('loading')
    }, 700)
  }
}
