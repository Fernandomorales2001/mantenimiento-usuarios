import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosContainerComponent } from './Main/Logistica/dashboard/productos-container/productos-container.component';
import { AportacionesComponent } from './Main/Logistica/dashboard/aportaciones/aportaciones.component';
import { FillRateGuardadoComponent } from './Main/Almacen/fill-rate-guardado/fill-rate-guardado.component';

import { LoginComponent } from './Main/login/login.component';
import { JefeAlmacenComponent } from './Main/Almacen/jefe-almacen/jefe-almacen.component';

import { HomeComponent } from './Main/home/home.component';
import { SolicitudesComponent } from './Main/Bodega/Operaciones/Componentes/solicitudes/solicitudes.component';
import { GuardadoComponent } from './Main/Bodega/Operaciones/Componentes/guardado/guardado.component';
import { PendientesComponent } from './Main/Bodega/Operaciones/Componentes/pendientes/pendientes.component';
import { TabsComponent } from './Main/Bodega/Operaciones/Componentes/tabs/tabs.component';
import { AlmuerzoComponent } from './Main/Bodega/Operaciones/Componentes/almuerzo/almuerzo.component';
import { RequisicionesComponent } from './Main/Almacen/requisiciones/requisiciones.component';
import { GuardadosComponent } from './Main/Almacen/guardados/guardados.component';
import { GraficaLinealComponent } from './Main/Almacen/Componentes/grafica-lineal/grafica-lineal.component';
import { AuthGuardService } from './Guards/auth-guard.service';
import { ListaPreciosComponent } from './Main/Logistica/dashboard/lista-precios/lista-precios.component';
import { TelefoniaComponent } from './Main/Logistica/dashboard/telefonia/telefonia.component';
import { InvalidoComponent } from './Main/Componentes/invalido/invalido.component';
import { DocumentosComponent } from './Main/Almacen/documentos/documentos.component';
import { EstadisticasComponent } from './Main/Taller/dashboards/reconocimiento/componentes/estadisticas/estadisticas.component';
import { EntregaTarjetasComponent } from './Main/Taller/dashboards/reconocimiento/componentes/entrega-tarjetas/entrega-tarjetas.component';
import { PrincipalComponent } from './Main/Taller/dashboards/reconocimiento/componentes/principal/principal.component';
import { VerificacionComponent } from './Main/Taller/dashboards/verificacion/componentes/verificacion/verificacion.component';
import { HomeIndicadoresComponent } from './Main/Taller/Indicadores/homeindicadores/facturaciontotal.component';
import { FacturaciontotalComponent } from './Main/Taller/Indicadores/facturaciontotal/facturaciontotal.component';
import { FacturacionhoraComponent } from './Main/Taller/Indicadores/facturacionhora/facturacionhora.component';
import { VehiculostrabajadosComponent } from './Main/Taller/Indicadores/vehiculostrabajados/vehiculostrabajados.component';
import { VehiculostrabajadosdiariosComponent } from './Main/Taller/Indicadores/vehiculostrabajadosdiarios/vehiculostrabajadosdiarios.component';
import { ReclamosComponent } from './Main/Taller/Indicadores/reclamos/reclamos.component';
import { ReclamosporsistemaComponent } from './Main/Taller/Indicadores/reclamosporsistema/reclamosporsistema.component';
import { ReprocesoasesorComponent } from './Main/Taller/Indicadores/reprocesoasesor/reprocesoasesor.component';
import { ReprocesotecnicoComponent } from './Main/Taller/Indicadores/reprocesotecnico/reprocesotecnico.component';
import { CumplimientotareasComponent } from './Main/Taller/Indicadores/cumplimientotareas/cumplimientotareas.component';
import { ConfiguracionbonoComponent } from './Main/Taller/Indicadores/configuracionbono/configuracionbono.component';
import { MetasucursalComponent } from './Main/Taller/Indicadores/metasucursal/metasucursal.component';
import { ClientesAwsComponent } from './Main/Taller/dashboards/reconocimiento/componentes/clientes-aws/clientes-aws.component';
import { TransportesDeliveryComponent } from './Main/mantenimientos/transportes-delivery/transportes-delivery.component';
import { PerfilamientoContactosComponent } from './Main/Taller/dashboards/reconocimiento/componentes/perfilamiento-contactos/perfilamiento-contactos.component';
import { ClientesPadresHijosComponent } from './Main/Taller/dashboards/reconocimiento/componentes/cliente-padre-hijo/componentes/clientes-padres-hijos/clientes-padres-hijos.component';
import { UsuariosAppComponent } from './main/taller/dashboards/reconocimiento/componentes/usuarios-app/usuarios-app.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {
    path:'bodega/operaciones',
    component:TabsComponent ,
    children:[
      {path:'guardado',component:GuardadoComponent, canActivate:[AuthGuardService] },
      {path:'solicitudes',component:SolicitudesComponent , canActivate:[AuthGuardService] },
      {path:'pendientes',component:PendientesComponent , canActivate:[AuthGuardService] },
    ]
  },
  {path:'bodega/operaciones/almuerzos',component:AlmuerzoComponent , canActivate:[AuthGuardService]},
  {
    path:'logistica/dashboard',
    children:[
      {path:'productos',component:ProductosContainerComponent , canActivate:[AuthGuardService]},
      {path:'precios',component:ListaPreciosComponent  },
      {path:'aportaciones',component:AportacionesComponent},
      {path:'telefonia',component:TelefoniaComponent},
    ]
  },
  {path:'grafica',component:GraficaLinealComponent},
  {path:'fillguardado',component:FillRateGuardadoComponent},
  {path:'error',component:InvalidoComponent},
  {
    path:'almacen',
    children:[
        {path:'documentos', component:DocumentosComponent},
        {path:'requisiciones', component:RequisicionesComponent},
        {path:'guardados', component:FillRateGuardadoComponent},
    ]
  },
  {
    path:'taller/dashboard',component:PrincipalComponent,
    children:[
      {path:'recoleccion', component:EstadisticasComponent},
      {path:'entrega-tarjetas', component:EntregaTarjetasComponent},
      {path:'clientes-aws', component:ClientesAwsComponent},
      {path:'perfilamiento-contactos', component:PerfilamientoContactosComponent},
      {path: 'clientes-hijos', component: ClientesPadresHijosComponent},
      {path: 'usuarios-app', component: UsuariosAppComponent},
      // {path: 'usuarios-app/add', component: AgregarComponent},
      // {path: 'usuarios-app/edit/:id', component: AgregarComponent}
    ]
  },
  {
    path:'mantenimiento',
    children:[
      {path:'transporte-delivery', component:TransportesDeliveryComponent},
    ]
  },
  {path:'taller/verificacion',component:VerificacionComponent},
  {path:'home-indicadores', component:HomeIndicadoresComponent},
  {path:'facturacion-total', component:FacturaciontotalComponent},
  {path:'facturacion-hora', component:FacturacionhoraComponent},
  {path:'vehiculos-trabajados', component:VehiculostrabajadosComponent},
  {path:'vehiculos-trabajados-diario', component:VehiculostrabajadosdiariosComponent},
  {path:'reclamos', component:ReclamosComponent},
  {path:'reclamos-sistema', component:ReclamosporsistemaComponent},
  {path:'reproceso-asesor', component:ReprocesoasesorComponent},
  {path:'reproceso-tecnico', component:ReprocesotecnicoComponent},
  {path:'cumplimiento-tareas', component:CumplimientotareasComponent},
  {path:'configuracion-bono', component:ConfiguracionbonoComponent},
  {path:'meta-sucursal', component:MetasucursalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
