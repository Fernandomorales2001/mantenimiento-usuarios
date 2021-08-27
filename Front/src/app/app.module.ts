import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ModalMantenimientoUsuariosAppComponent } from './Main/Modals/modal-mantenimiento-usuarios-app/modal-mantenimiento-usuarios-app.component';
import { MascotasListComponent } from './Main/components/mascotas-list/mascotas-list.component';
import { MascotasFormComponent } from './Main/components/mascotas-form/mascotas-form.component';
import { NavigationComponent } from './Main/components/navigation/navigation.component';
import { AboutUsComponent } from './Main/components/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalMantenimientoUsuariosAppComponent,
    MascotasListComponent,
    MascotasFormComponent,
    NavigationComponent,
    AboutUsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
