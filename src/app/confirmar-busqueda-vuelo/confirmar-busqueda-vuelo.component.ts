import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirportApiKeyService } from '../airport-api-key.service';
import { Vuelo } from '../modelo/vuelio.interface';

@Component({
  selector: 'app-confirmar-busqueda-vuelo',
  templateUrl: './confirmar-busqueda-vuelo.component.html',
  styleUrls: ['./confirmar-busqueda-vuelo.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ConfirmarBusquedaVueloComponent implements OnInit {

  flights: Vuelo[] = [];
  vuelos: any[] = []
  
  showForm = false;
  ipAddress: string = '';
  country: string = '';
  error: string = '';
  date: string = '';
  numOfAdults: number = 0;
  iataDeparture: string = '';
  iataOrigin: string = '';
  accessToken: string = '';
  constructor(private activatedRouter: ActivatedRoute, private airportApiService: AirportApiKeyService) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe(params => {
      this.iataDeparture = params['iataDeparture'];
      console.log(this.iataDeparture)

    })
  }

  onIataCodeChange(iataCode: string): void {
    console.log('IATA Code recibido en el componente padre:', iataCode);
    this.iataOrigin = iataCode
    this.showForm = true
  }

  getToken(origin: string, destination: string, date: string, numOfAdults: number): void {
   
    this.airportApiService.getToken().subscribe(
      token => {
        console.log('Token:', token);
        this.accessToken = token.access_token; 
        console.log('access token:', this.accessToken);
        this.getFlightOriginDestination(origin,destination,date,numOfAdults,this.accessToken)
      },
      error => console.error('Error:', error)
    );

  }

  getTokenAirportNameToken(keyword: string): void{

    this.airportApiService.getToken().subscribe(
      token => {
        console.log('Token:', token);
        this.accessToken = token.access_token; 
        console.log('access token:', this.accessToken);
        
      },
      error => console.error('Error:', error)
    );




  }

  getFlightOriginDestination(origin: string, destination: string, date: string, numOfAdults: number, authToken: string): void{
    this.airportApiService.getFlights(origin,destination,date,numOfAdults,authToken).subscribe(
      response => {
        this.vuelos.push(...response.data);
        console.log(this.vuelos);
        
      }
    )
  }

  submitForm(){
    console.log(this.date)
    console.log(this.numOfAdults)
    console.log(this.iataOrigin)
    console.log(this.iataDeparture)
    this.getToken(this.iataOrigin,this.iataDeparture,this.date,this.numOfAdults)
  }

}
