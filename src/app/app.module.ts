import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PresentacionComponent } from './landing-page/presentacion/presentacion.component';
import { LoremIpsumPruebaComponent } from './lorem-ipsum-prueba/lorem-ipsum-prueba.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { ToolBarHeaderComponent } from './tool-bar-header/tool-bar-header.component';
import { UserCountryComponent } from './user-country/user-country.component';

import { register as registerSwiperElements} from 'swiper/element/bundle';
registerSwiperElements();


import { AirportApiKeyService } from './airport-api-key.service';
import { ConfirmarBusquedaVueloComponent } from './confirmar-busqueda-vuelo/confirmar-busqueda-vuelo.component';
import { CountryRestApiService } from './country-rest-api.service';
import { GetAirportsComponent } from './get-airports/get-airports.component';
import { ListaDePaisesComponent } from './lista-de-paises/lista-de-paises.component';
import { SeleccionarVuelosEncontradosComponent } from './seleccionar-vuelos-encontrados/seleccionar-vuelos-encontrados.component';
import { PaqueteTuristicoComponent } from './paquete-turistico/paquete-turistico.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolBarHeaderComponent,
    LoremIpsumPruebaComponent,
    PageFooterComponent,
    InicioSesionComponent,
    RegistroUsuarioComponent,
    UserCountryComponent,
    PresentacionComponent,
    ListaDePaisesComponent,
    GetAirportsComponent,
    ConfirmarBusquedaVueloComponent,
    SeleccionarVuelosEncontradosComponent,
    PaqueteTuristicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
    FormsModule,
    MatSelectModule,
  ],
  providers: [
    CountryRestApiService,
    AirportApiKeyService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
