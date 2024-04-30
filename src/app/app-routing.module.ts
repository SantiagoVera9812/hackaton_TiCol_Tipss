import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmarBusquedaVueloComponent } from './confirmar-busqueda-vuelo/confirmar-busqueda-vuelo.component';
import { GetAirportsComponent } from './get-airports/get-airports.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PresentacionComponent } from './landing-page/presentacion/presentacion.component';
import { LoremIpsumPruebaComponent } from './lorem-ipsum-prueba/lorem-ipsum-prueba.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { SeleccionarVuelosEncontradosComponent } from './seleccionar-vuelos-encontrados/seleccionar-vuelos-encontrados.component';
import { PaqueteTuristicoComponent } from './paquete-turistico/paquete-turistico.component';
import { VuelosDeUsuarioComponent } from './vuelos-de-usuario/vuelos-de-usuario.component';

const routes: Routes = [
  { path: 'inicio-de-sesion', component: InicioSesionComponent},
  { path: 'registro-usuario', component: RegistroUsuarioComponent},
  { path: 'lorem-ipsum', component: LoremIpsumPruebaComponent},
  {path: '', component: PresentacionComponent},
  { path: 'country/:id', component: GetAirportsComponent},
  {path: 'country/:id/:iataDeparture', component: ConfirmarBusquedaVueloComponent},
  {path: 'vuelos', component: SeleccionarVuelosEncontradosComponent},
  {path: 'paquetes', component: PaqueteTuristicoComponent},
  
  {path: 'infoUsuario', component: VuelosDeUsuarioComponent},

  
  //Si se escribe una ruta inexistente, redirecciona a landing page
  {path: '**', component: PresentacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
