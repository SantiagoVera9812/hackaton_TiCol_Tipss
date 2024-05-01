import { Injectable } from '@angular/core';
import { Usuario } from './modelo/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  vuelos: any[] = [];
  numbers: number = 0
  poisCity: any[] = [];
  usuario: Usuario = {
    nombre: 'John',
    apellido: 'Doe',
    correo: 'johndoe@example.com',
    ciudad: 'Ciudad de Ejemplo',
    celular: '123456789',
    contrasena: 'contrasena123',
    vuelos: []
  };


  constructor() { }

}
