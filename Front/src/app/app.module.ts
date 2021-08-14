import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Main/login/login.component';
import { NavBarComponent } from './Main/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarComponent } from './Main/sidebar/sidebar.component';
import { JefeAlmacenComponent } from './Main/Almacen/jefe-almacen/jefe-almacen.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Main/home/home.component';
import { GuardadoComponent } from './Main/Bodega/Operaciones/Componentes/guardado/guardado.component';
import { SolicitudesComponent } from './Main/Bodega/Operaciones/Componentes/solicitudes/solicitudes.component';
import { PendientesComponent } from './Main/Bodega/Operaciones/Componentes/pendientes/pendientes.component';
import { TabsComponent } from './Main/Bodega/Operaciones/Componentes/tabs/tabs.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AlmuerzoComponent } from './Main/Bodega/Operaciones/Componentes/almuerzo/almuerzo.component';
import { RequisicionesComponent } from './Main/Almacen/requisiciones/requisiciones.component';
import { GuardadosComponent } from './Main/Almacen/guardados/guardados.component';
import { GraficaLinealComponent } from './Main/Almacen/Componentes/grafica-lineal/grafica-lineal.component';
import { AuthGuardService } from './Guards/auth-guard.service';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RadialComponent } from './Main/Almacen/Componentes/radial/radial.component';
import { ProductosCountComponent } from './Main/Logistica/dashboard/productos-count/productos-count.component';
import { ProductosContainerComponent } from './Main/Logistica/dashboard/productos-container/productos-container.component';
import { ProductosDashboardComponent } from './Main/Logistica/dashboard/productos-dashboard/productos-dashboard.component';
import { AportacionesComponent } from './Main/Logistica/dashboard/aportaciones/aportaciones.component';
import { ListaPreciosComponent } from './Main/Logistica/dashboard/lista-precios/lista-precios.component';
import { TelefoniaComponent } from './Main/Logistica/dashboard/telefonia/telefonia.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InvalidoComponent } from './Main/Componentes/invalido/invalido.component';
import { FillRateGuardadoComponent } from './Main/Almacen/fill-rate-guardado/fill-rate-guardado.component';
import { DocumentosComponent } from './Main/Almacen/documentos/documentos.component';

import { ClipboardModule } from 'ngx-clipboard';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { NgxSpinnerModule } from "ngx-spinner";
import { EstadisticasComponent } from './Main/Taller/dashboards/reconocimiento/componentes/estadisticas/estadisticas.component';
import { EntregaTarjetasComponent } from './Main/Taller/dashboards/reconocimiento/componentes/entrega-tarjetas/entrega-tarjetas.component';
import { PrincipalComponent } from './Main/Taller/dashboards/reconocimiento/componentes/principal/principal.component';
import { VerificacionComponent } from './Main/Taller/dashboards/verificacion/componentes/verificacion/verificacion.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { FiltroComponent } from './Main/Componentes/filtro/filtro.component';
import { HomeIndicadoresComponent } from './Main/Taller/Indicadores/homeindicadores/facturaciontotal.component';
import { FacturaciontotalComponent } from './Main/Taller/Indicadores/facturaciontotal/facturaciontotal.component';
import { FacturacionhoraComponent } from './Main/Taller/Indicadores/facturacionhora/facturacionhora.component';
import { VehiculostrabajadosComponent } from './Main/Taller/Indicadores/vehiculostrabajados/vehiculostrabajados.component';
import { VehiculostrabajadosdiariosComponent } from './Main/Taller/Indicadores/vehiculostrabajadosdiarios/vehiculostrabajadosdiarios.component';
import { ReclamosComponent } from './Main/Taller/Indicadores/reclamos/reclamos.component';
import { ReclamosporsistemaComponent } from './Main/Taller/Indicadores/reclamosporsistema/reclamosporsistema.component';
import { ReprocesotecnicoComponent } from './Main/Taller/Indicadores/reprocesotecnico/reprocesotecnico.component';
import { ReprocesoasesorComponent } from './Main/Taller/Indicadores/reprocesoasesor/reprocesoasesor.component';
import { CumplimientotareasComponent } from './Main/Taller/Indicadores/cumplimientotareas/cumplimientotareas.component';
import { ConfiguracionbonoComponent } from './Main/Taller/Indicadores/configuracionbono/configuracionbono.component';
import { MetasucursalComponent } from './Main/Taller/Indicadores/metasucursal/metasucursal.component';

import {DataTableModule} from "angular2-datatable";
import { ModalModule } from 'ngx-bootstrap/modal';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ClientesAwsComponent } from './Main/Taller/dashboards/reconocimiento/componentes/clientes-aws/clientes-aws.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TransportesDeliveryComponent } from './Main/mantenimientos/transportes-delivery/transportes-delivery.component';
import { PerfilamientoContactosComponent } from './Main/Taller/dashboards/reconocimiento/componentes/perfilamiento-contactos/perfilamiento-contactos.component';
import { ModalInformacionCcComponent } from './Main/Taller/dashboards/Modals/modal-informacion-cc/modal-informacion-cc.component';
import { ModalUsuariosAppComponent } from './Main/Taller/dashboards/modals/modal-usuarios-app/modal-usuarios-app.component';
import { ClientesPadresHijosComponent } from './Main/Taller/dashboards/reconocimiento/componentes/cliente-padre-hijo/componentes/clientes-padres-hijos/clientes-padres-hijos.component';
import { BusquedaClientesComponent } from './Main/Taller/dashboards/reconocimiento/componentes/cliente-padre-hijo/componentes/busqueda-clientes/busqueda-clientes.component';
import { TarjetaClienteContactoComponent } from './Main/Taller/dashboards/reconocimiento/componentes/cliente-padre-hijo/componentes/tarjeta-cliente-contacto/tarjeta-cliente-contacto.component';
import { TarjetaClienteHijoComponent } from './Main/Taller/dashboards/reconocimiento/componentes/cliente-padre-hijo/componentes/tarjeta-cliente-hijo/tarjeta-cliente-hijo.component';
import { EdicionClienteComponent } from './Main/Taller/dashboards/reconocimiento/componentes/cliente-padre-hijo/modals/edicion-cliente/edicion-cliente.component';

import { UsuariosAppComponent } from './main/taller/dashboards/reconocimiento/componentes/usuarios-app/usuarios-app.component';
import { FiltroPipe } from './main/taller/dashboards/reconocimiento/componentes/usuarios-app/pipes/filtro.pipe';
import { ModalMantenimientoUsuariosAppComponent } from './main/taller/dashboards/modals/modal-mantenimiento-usuarios-app/modal-mantenimiento-usuarios-app.component';
import { FiltroSucursalPipe } from './main/taller/dashboards/reconocimiento/componentes/usuarios-app/pipes/filtro-sucursal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    GuardadoComponent,
    SolicitudesComponent,
    SidebarComponent,
    JefeAlmacenComponent,
    HomeComponent,
    PendientesComponent,
    TabsComponent,
    AlmuerzoComponent,
    RequisicionesComponent,
    GuardadosComponent,
    GraficaLinealComponent,
    RadialComponent,
    ProductosCountComponent,
    ProductosContainerComponent,
    ProductosDashboardComponent,
    AportacionesComponent,
    ListaPreciosComponent,
    TelefoniaComponent,
    InvalidoComponent,
    FillRateGuardadoComponent,
    DocumentosComponent,
    EstadisticasComponent,
    EntregaTarjetasComponent,
    PrincipalComponent,
    VerificacionComponent,
    FilterPipe,
    FiltroComponent,
    HomeIndicadoresComponent,
    FacturaciontotalComponent,
    FacturacionhoraComponent,
    VehiculostrabajadosComponent,
    VehiculostrabajadosdiariosComponent,
    ReclamosComponent,
    ReclamosporsistemaComponent,
    ReprocesotecnicoComponent,
    ReprocesoasesorComponent,
    CumplimientotareasComponent,
    ConfiguracionbonoComponent,
    MetasucursalComponent,
    ClientesAwsComponent,
    TransportesDeliveryComponent,
    PerfilamientoContactosComponent,
    ModalInformacionCcComponent,
    ModalUsuariosAppComponent,
    ClientesPadresHijosComponent,
    BusquedaClientesComponent,
    TarjetaClienteContactoComponent,
    TarjetaClienteHijoComponent,
    EdicionClienteComponent,

    UsuariosAppComponent,
    FiltroPipe,
    ModalMantenimientoUsuariosAppComponent,
    FiltroSucursalPipe
    ],
  imports: [
    ScrollingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PerfectScrollbarModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxDaterangepickerMd.forRoot(),
    FormsModule,
    DeviceDetectorModule.forRoot(),
    MatCheckboxModule,
    ChartsModule,
    NgxSpinnerModule,
    ClipboardModule,
    DataTableModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    // NgCircleProgressModule.forRoot({
    //   radius: 50,
    //   outerStrokeWidth: 16,
    //   innerStrokeWidth: 8,
    //   outerStrokeColor: "#78C000",
    //   innerStrokeColor: "#C7E596",
    //   animationDuration: 300,
    // })
    NgCircleProgressModule.forRoot({
      backgroundPadding: 7,
      radius: 50,
      space: -5,
      outerStrokeWidth:6,
      innerStrokeColor: "#d7d7d7",
      innerStrokeWidth: 5,
      imageHeight: 130,
      imageWidth: 20,
      showBackground: false,
      startFromZero: false
    })

  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    AuthGuardService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
