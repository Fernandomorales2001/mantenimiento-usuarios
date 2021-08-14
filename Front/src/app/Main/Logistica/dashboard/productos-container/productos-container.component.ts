import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../Services/dashboard.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-productos-container',
  templateUrl: './productos-container.component.html',
  styleUrls: ['./productos-container.component.css']
})
export class ProductosContainerComponent implements OnInit {

  data = {
    indicadores:[],
    counters:[]
  };
  select;
  es_firefox = false;
  es_movil = true;

  constructor(private Pro_dashboard:DashboardService,
              private deviceService:DeviceDetectorService,
              private spinner:NgxSpinnerService
            ) {
  }

  async ngOnInit() {
    await this.spinner.show('loading', {

      bdColor :"rgba(10,83,165,0.63)",
      size : "medium",
      color : "#0a53a5",
      type : "ball-clip-rotate",
      fullScreen:true
    })
    let rest = await this.Pro_dashboard.getProductos(null, null)
    this.data['indicadores'] = rest['indicadores']
    this.data['counters'] = rest['counters']
    this.es_firefox = this.deviceService.getDeviceInfo()['browser'] == 'Firefox';
    this.es_movil = this.deviceService.isMobile();
    await setTimeout(async ()=>{
      await this.spinner.hide('loading')
    }, 400)
  }

  async ngModelChange(p_event){
    if (p_event.startDate != null) {
      p_event.startDate.locale('eo')
      p_event.endDate.locale('eo')

      await this.spinner.show('loading', {

      bdColor :"rgba(10,83,165,0.63)",
      size : "medium",
      color : "#0a53a5",
      type : "ball-clip-rotate",
      fullScreen:true
    })
      let rest = await this.Pro_dashboard.getProductos(p_event.startDate.format('L'), p_event.endDate.format('L'))
      this.data['indicadores'] = rest['indicadores']
      this.data['counters'] = rest['counters']
      await setTimeout(async ()=>{
        await this.spinner.hide('loading')
      }, 400)
    }
  }

}
