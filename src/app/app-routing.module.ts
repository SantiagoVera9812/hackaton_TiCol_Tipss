import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { PresentacionComponent } from './landing-page/presentacion/presentacion.component';
import { LoremIpsumPruebaComponent } from './lorem-ipsum-prueba/lorem-ipsum-prueba.component';
import { GetAirportsComponent } from './get-airports/get-airports.component';

const routes: Routes = [
  { path: 'inicio-de-sesion', component: InicioSesionComponent},
  { path: 'registro-usuario', component: RegistroUsuarioComponent},
  { path: 'lorem-ipsum', component: LoremIpsumPruebaComponent},
  {path: '', component: PresentacionComponent},
  { path: 'country/:id', component: GetAirportsComponent},

  //Si se escribe una ruta inexistente, redirecciona a landing page
  {path: '**', component: PresentacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
