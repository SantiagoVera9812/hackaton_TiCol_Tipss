import { Component, OnInit } from '@angular/core';
import { BackendUsuarioVueloService } from '../backend-usuario-vuelo.service';
import { DataSharingService } from '../data-sharing.service';
import { Usuario } from '../modelo/usuario.interface';

@Component({
  selector: 'app-vuelos-de-usuario',
  templateUrl: './vuelos-de-usuario.component.html',
  styleUrls: ['./vuelos-de-usuario.component.css']
})
export class VuelosDeUsuarioComponent implements OnInit {

  usuario: Usuario
  vuelos: any[] = []

  constructor(private dataSharingService: DataSharingService, private backendUsuarioVueloService: BackendUsuarioVueloService) {
    this.usuario = this.dataSharingService.usuario
   }

  ngOnInit(): void {
    console.log('usuario en vuelos de usuario', this.usuario);

    const usuarioVuelo = this.usuario;


    this.backendUsuarioVueloService.infoUsuario(usuarioVuelo.correo,usuarioVuelo.contrasena).subscribe(
      response => {
        console.log('respuesta info usuario', response)
        console.log(response.usuarioID)
        this.backendUsuarioVueloService.vuelosUsuario(response.usuarioID).subscribe(
          response => {
            console.log('vuelos del usuario', response)
            this.vuelos = response
            console.log(this.vuelos)
          },
          error => {
            console.log(error)
          }
        )
      },
      error => {
        console.log(error);
        
      })

  }

}
