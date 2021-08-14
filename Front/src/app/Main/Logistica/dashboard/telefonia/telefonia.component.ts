import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../Services/dashboard.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-telefonia',
  templateUrl: './telefonia.component.html',
  styleUrls: ['./telefonia.component.css']
})
export class TelefoniaComponent implements OnInit {
selected: any;

llamadas:any = {}
  constructor(
    private sDashboard:DashboardService,
    private spinner:NgxSpinnerService
  ) { }

  async ngOnInit() {
    await this.consultarLlamadas()
  }


  async seleccionarFecha(p_event:any){
    p_event.startDate.locale('eo')
    p_event.endDate.locale('eo')
    this.llamadas = await this.sDashboard.getLlamadas(p_event.startDate.format('l'), p_event.endDate.format('l'))
  }

  async consultarLlamadas(){
    await this.spinner.show('loading', {
      bdColor :"rgba(10,83,165,0.63)",
      size : "medium",
      color : "#0a53a5",
      type : "ball-clip-rotate",
      fullScreen:true
    })
    let vHoraActual = new Date()
    let vFecha = vHoraActual.getFullYear() + '-'+ (vHoraActual.getMonth()+1) +'-'+ vHoraActual.getDate()
     this.llamadas = await this.sDashboard.getLlamadas(vFecha,vFecha)
     await setTimeout(async ()=>{
       await this.spinner.hide('loading')
     }, 300)
  }




}
