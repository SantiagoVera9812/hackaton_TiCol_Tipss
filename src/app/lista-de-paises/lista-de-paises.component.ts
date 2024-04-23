import { Component, OnInit } from '@angular/core';
import { CountryRestApiService } from '../country-rest-api.service';

@Component({
  selector: 'app-lista-de-paises',
  templateUrl: './lista-de-paises.component.html',
  styleUrls: ['./lista-de-paises.component.css']
})
export class ListaDePaisesComponent implements OnInit {

  countries: any[] = [];

  constructor(private countryService: CountryRestApiService) { }

  ngOnInit(): void {
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
  }


