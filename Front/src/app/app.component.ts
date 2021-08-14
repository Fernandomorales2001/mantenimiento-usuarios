import { Component } from '@angular/core';
import { SidebarService } from './Services/SideBar/sidebar.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'allas';
  es_login: boolean;
  es_home = false

  constructor(
    public sidebarservice: SidebarService,
    private route:Router
    ) { }
  
  ngOnInit(): void {
    this.route.events.subscribe(
      async (event: any) => {
        if (event instanceof NavigationEnd) {
            if (this.route.url == '/login' || this.route.url == '/') {
              this.es_login = true;
              this.sidebarservice.setSidebarState(true)
              sessionStorage.clear()
            } else {
              
              this.es_login = false;
              this.es_home = false
              if (this.route.url == '/home') {
                this.es_home = true
              }
              
            }
          }
        });
  }


  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }
}
