import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './modelo/usuario.interface';
import { Vuelo } from './modelo/vuelio.interface';

@Injectable({
  providedIn: 'root'
})
export class BackendUsuarioVueloService {

  private baseUrl = '/registro-usuario';
  private inicioUrl = '/inicio-sesion';
  private getUrl = '/conseguir-info-usuario';
  private insertarVueloUrl = '/Vuelo/agregar';
  private vuelosDeUsuarioUrl = '/vuelos-del-usuario';

  constructor(private httpClient: HttpClient) { }

  insertarUsuario(usuario: Usuario): Observable<any>{

    return this.httpClient.post<any>(this.baseUrl, usuario);
  }

  insertarVuelo(vuelo: Vuelo): Observable<any>{

    return this.httpClient.post<any>(this.insertarVueloUrl, vuelo);
  }

  verificarUsuario(correo: string, contraseña: string): Observable<any>{
    const params = new HttpParams()
      .set('correo', correo)
      .set('contraseña', contraseña)
      return this.httpClient.post<any>(this.inicioUrl, null, { params });
    }
    
    infoUsuario(correo: string, contraseña: string): Observable<any>{
      const params = new HttpParams()
        .set('correo', correo)
        .set('contraseña', contraseña)
        return this.httpClient.post<any>(this.getUrl, null, { params });
      }

      vuelosUsuario(usuarioId: number): Observable<any>{
        const params = new HttpParams()
          .set('usuarioId', usuarioId)
          
          return this.httpClient.post<any>(this.vuelosDeUsuarioUrl, null, { params });
        }
  }

