import { Component, OnInit, Input } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-productos-dashboard',
  templateUrl: './productos-dashboard.component.html',
  styleUrls: ['./productos-dashboard.component.css']
})
export class ProductosDashboardComponent implements OnInit {

  @Input() data:any = {
    titulo: "Cambio de tendencia",
    entrantes_acumulado: 0,
    trabajados_acumulado: 0,
    porcentaje_acumulado: 0,
    entrantes_actual: 0,
    trabajados_actual: 0,
    porcentaje_actual: 0
  };

  es_movil=true;

  constructor(private deviceService: DeviceDetectorService) {
    
    this.es_movil = this.deviceService.isMobile()
  }

  ngOnInit() {
  }

}
