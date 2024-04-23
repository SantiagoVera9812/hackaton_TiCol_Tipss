import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
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

import { AirportApiKeyService } from './airport-api-key.service';
import { CountryRestApiService } from './country-rest-api.service';
import { ListaDePaisesComponent } from './lista-de-paises/lista-de-paises.component';
import { GetAirportsComponent } from './get-airports/get-airports.component';

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
    GetAirportsComponent
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
    HttpClientModule 
  ],
  providers: [
    CountryRestApiService,
    AirportApiKeyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
