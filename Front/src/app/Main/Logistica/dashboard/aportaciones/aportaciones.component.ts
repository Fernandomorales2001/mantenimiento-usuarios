import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../Services/dashboard.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-aportaciones',
  templateUrl: './aportaciones.component.html',
  styleUrls: ['./aportaciones.component.css']
})
export class AportacionesComponent implements OnInit {

  data;
  selected;

  constructor(private Pro_aportaciones:DashboardService,
              private spinner:NgxSpinnerService) { }

  async ngOnInit() {
    await this.spinner.show('loading', {
      bdColor :"rgba(10,83,165,0.63)",
      size : "medium",
      color : "#0a53a5",
      type : "ball-clip-rotate",
      fullScreen:true
    })
    this.data = await this.Pro_aportaciones.getAportaciones(null, null)
    await setTimeout(async ()=>{
      await this.spinner.hide('loading')
    }, 700)
  }

  async ngModelChange(p_event){
    await this.spinner.show('loading', {

      bdColor :"rgba(10,83,165,0.63)",
      size : "medium",
      color : "#0a53a5",
      type : "ball-clip-rotate",
      fullScreen:true
    })
    p_event.startDate.locale('eo')
    p_event.endDate.locale('eo')
    this.data = await this.Pro_aportaciones.getAportaciones(p_event.startDate.format('L'), p_event.endDate.format('L'))
    await setTimeout(async ()=>{
      await this.spinner.hide('loading')
    }, 700)
  }

}
