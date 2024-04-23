import { Component, OnInit } from '@angular/core';
import { AirportApiKeyService } from '../airport-api-key.service';

@Component({
  selector: 'app-get-airports',
  templateUrl: './get-airports.component.html',
  styleUrls: ['./get-airports.component.css']
})
export class GetAirportsComponent implements OnInit {

  airports: any[] = []; 
  accessToken: string = ''; 

  constructor(private airportService: AirportApiKeyService) { }

  ngOnInit(): void {
  const keyword = 'MUC'; // Palabra clave de búsqueda (por ejemplo, MUC para Múnich)
    const countryCode = 'DE'; // Código de país (por ejemplo, DE para Alemania)
    this.getToken(keyword, countryCode);
  }

  getToken(keyword: string, countryCode: string): void {
    this.airportService.getToken().subscribe(
      token => {
        console.log('Token:', token);
        this.accessToken = token.access_token; 
        console.log('access token:', this.accessToken);
        this.getAirports(keyword, countryCode);
      },
      error => console.error('Error:', error)
    );
  }

  getAirports(keyword: string, countryCode: string): void {
    this.airportService.getAirports(keyword, countryCode, this.accessToken).subscribe(
      airports => {
        console.log('Airports:', airports);
        this.airports = airports; 
        console.log(this.airports)
      },
      error => console.error('Error fetching airports:', error)
    );
  }

}
