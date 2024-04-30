import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isLoggedIn: boolean = false;

  constructor() { }

  login() {
    // Lógica para iniciar sesión
    this.isLoggedIn = true;
  }

  logout() {
    // Lógica para cerrar sesión
    this.isLoggedIn = false;
  }

  
}
