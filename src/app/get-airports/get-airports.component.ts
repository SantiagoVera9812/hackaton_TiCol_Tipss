import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirportApiKeyService } from '../airport-api-key.service';
import { CountryRestApiService } from '../country-rest-api.service';

@Component({
  selector: 'app-get-airports',
  templateUrl: './get-airports.component.html',
  styleUrls: ['./get-airports.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class GetAirportsComponent implements OnInit {

  airports: any[] = [];
  airportArray: any[] = [];
  city: any[] = [];
  states: any[] = [];
  accessToken: string = '';
  countyrCityAccessToken = '';
  countyCode: string = '';
  keywordCity: string = '';
  originalLabel: string = 'Escribe una ciudad a donde quieres ir';

  constructor(private activatedRouter: ActivatedRoute, private airportService: AirportApiKeyService, private countryCityApiService: CountryRestApiService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {

      this.countyCode = params['id'];
      console.log('The country we are in is', this.countyCode);
      this.getCountryStatesToken(this.countyCode)
    }

    );
    
  }

  getToken(keyword: string, countryCode: string): void {
   
    this.airportService.getToken().subscribe(
      token => {
        console.log('Token:', token);
        this.accessToken = token.access_token; 
        console.log('access token:', this.accessToken);
        this.getCityAirports(keyword,countryCode)
      },
      error => console.error('Error:', error)
    );
  }

  getCityAirports(keyword: string, countryCode: string): void{

    this.airportService.getCityWithAirports(keyword, countryCode, this.accessToken).subscribe(
      airports => {
        console.log('Airports:', airports.included);
        this.airports = airports.included.airports; 
        console.log(this.airports)
        for (const key in this.airports) {
          if (this.airports.hasOwnProperty(key)) {
            console.log(this.airports[key])
            this.airportArray.push(this.airports[key])}}
      },
      error => console.error('Error fetching airports:', error)
    );
  
  }

  searchAirports(): void {
   
    console.log('Valor seleccionado por el usuario:', this.keywordCity);
    this.getToken(this.keywordCity, this.countyCode);
  }

  getCountryCityToken(countryCode: string, statesCode: string): void{

    this.countryCityApiService.getCountryCities(countryCode,statesCode).subscribe(
      cities => {
        this.city = cities; 
        console.log(this.city)
        
      },
      error => console.error('Error:', error)
    );
  }

  getCountryStatesToken(countryCode: string): void{
    this.countryCityApiService.getCountryStates(countryCode).subscribe(
      states => {
        this.states = states; 
        console.log(this.states) 
      },
      error => console.error('Error:', error)

    ) 
  }

  getStateISO2(state: any): void {
    const iso2code = state.iso2; 
    console.log('ISO 2 del estado seleccionado:', iso2code);
    this.getCountryCityToken(this.countyCode,iso2code)
    
  }

  /*
  esta funcion funciona pero podriamos usarla en otra parte en nuestro codigo
  obtiene los aeropuertos directamente sin preguntar por la ciudad
  getAirports(keyword: string, countryCode: string): void {
    this.airportService.getAirports(keyword, countryCode, this.accessToken).subscribe(
      airports => {
        console.log('Airports:', airports);
        this.airports = airports; 
        console.log(this.airports)
      },
      error => console.error('Error fetching airports:', error)
    );
  } */

}
