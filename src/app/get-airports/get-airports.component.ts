import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AirportApiKeyService } from '../airport-api-key.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-airports',
  templateUrl: './get-airports.component.html',
  styleUrls: ['./get-airports.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class GetAirportsComponent implements OnInit {

  airports: any[] = []; 
  accessToken: string = ''; 
  countyCode: string = '';
  kewyordCity: string = '';
  originalLabel: string = 'Escribe una ciudad a donde quieres ir';

  constructor(private activatedRouter: ActivatedRoute, private airportService: AirportApiKeyService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {

      this.countyCode = params['id'];
      console.log('The country we are in is', this.countyCode)
    }

    );
    const keywordCity = 'PARIS'
    this.getToken(keywordCity, this.countyCode);
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
        console.log('Airports:', airports);
        this.airports = airports; 
        console.log(this.airports)
      },
      error => console.error('Error fetching airports:', error)
    );
  
  }

  searchAirports(): void {
   
    console.log('Valor original del mat-label:', this.kewyordCity);
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
