import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CountryRestApiService } from '../country-rest-api.service';
import { DataSharingService } from '../data-sharing.service';
import { Usuario } from '../modelo/usuario.interface';

@Component({
  selector: 'app-lista-de-paises',
  templateUrl: './lista-de-paises.component.html',
  styleUrls: ['./lista-de-paises.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class ListaDePaisesComponent implements OnInit {
  @Input() usuario: Usuario = {
    nombre: 'John',
    apellido: 'Doe',
    correo: 'johndoe@example.com',
    ciudad: 'Ciudad de Ejemplo',
    celular: '123456789',
    contrasena: 'contrasena123',
    vuelos: []
  };

  countries: any[] = [];

  constructor(private router:Router, private countryService: CountryRestApiService, private datSharingService: DataSharingService) { }

  ngOnInit(): void {
    console.log("en Lista paises", this.usuario)
    this.countryService.getAllCountries().subscribe(
      countries => {
        this.countries = countries;
        console.log('Countries:', this.countries);
      },
      error => {
        console.error('Error fetching countries:', error);
        
      }
    );
  }

  redirectToCountry(countryId: number) {
    this.router.navigate(['/country', countryId]);
  }
  }


