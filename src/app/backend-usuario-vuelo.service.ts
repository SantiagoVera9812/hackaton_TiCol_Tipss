import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './modelo/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class BackendUsuarioVueloService {

  private baseUrl = '/registro-usuario';
  private inicioUrl = '/inicio-sesion';


  constructor(private httpClient: HttpClient) { }

  insertarUsuario(usuario: Usuario): Observable<any>{

    return this.httpClient.post<any>(this.baseUrl, usuario);
  }

  verificarUsuario(correo: string, contraseña: string): Observable<any>{
    const params = new HttpParams()
      .set('correo', correo)
      .set('contraseña', contraseña)
      return this.httpClient.post<any>(this.inicioUrl, null, { params });
    }
      
  }

