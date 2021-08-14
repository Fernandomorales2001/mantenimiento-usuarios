import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../Services/Usuario/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
      private sUsuario:UsuarioService,
      private router: Router) {}

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // this.router.navigate(['/login']);
    // return await this.sUsuario.validarNavegacion(state.url)  ;

  

    return await this.sUsuario.validarNavegacion(state.url)  ;
  }

}
