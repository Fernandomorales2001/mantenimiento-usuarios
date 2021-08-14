import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router} from '@angular/router';
import { UsuarioService } from '../../Services/Usuario/usuario.service';
import { SidebarService } from 'src/app/Services/SideBar/sidebar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('password', {static:true})password:ElementRef

  constructor(private route: Router,
              private Pro_login:UsuarioService,
              private side:SidebarService
              ) {
  }

  loginUser = {
    user:null,
    pass:null
  }
  loginInvalido = false
  iniciandoSesion = false
  ngOnInit() {
  }



  async loginKeyDown(p_event:any , pInput:string){
    this.iniciandoSesion = false
    this.loginInvalido = false
    if (p_event.key == 'Enter' && pInput =='user') {
      this.password.nativeElement.focus()
    }
    if (p_event.key == 'Enter' && pInput == 'pass') {
      this.login()
    }
  }

  async login(){
    this.iniciandoSesion = true
    if (await this.Pro_login.login(this.loginUser) ) {
    // sessionStorage.setItem('token',data['token'])
      await this.side.getData()
      this.route.navigate(['home'])
    }else{
      this.iniciandoSesion = false
     this.loginInvalido = true
    } 



  }
}
