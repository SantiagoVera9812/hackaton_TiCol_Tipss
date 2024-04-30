import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-tool-bar-header',
  templateUrl: './tool-bar-header.component.html',
  styleUrls: ['./tool-bar-header.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ToolBarHeaderComponent implements OnInit {

  loggedIn: boolean;

  constructor(private router : Router, private authService: AuthServiceService) { 
    this.loggedIn = this.authService.isLoggedIn
  }

  ngOnInit(): void {
    console.log("logged", this.loggedIn)
  }

  navigateToLogin() {
    this.router.navigate(['/inicio-de-sesion']);
  }

  navigateToProfile() {
    console.log(this.loggedIn)
    if (this.loggedIn) {
      // Si el usuario ha iniciado sesión
      this.router.navigate(['/infoUsuario']);
    } else {
      // Si el usuario no ha iniciado sesión
      this.router.navigate(['/inicio-de-sesion']);
    }
  }

}
