import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirportApiKeyService } from '../airport-api-key.service';
import { DataSharingService } from '../data-sharing.service';
import { Usuario } from '../modelo/usuario.interface';

@Component({
  selector: 'app-confirmar-busqueda-vuelo',
  templateUrl: './confirmar-busqueda-vuelo.component.html',
  styleUrls: ['./confirmar-busqueda-vuelo.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ConfirmarBusquedaVueloComponent implements OnInit {

 
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
  usuario: Usuario;
  constructor(private activatedRouter: ActivatedRoute, private airportApiService: AirportApiKeyService, private router: Router, private dataSharingService: DataSharingService) { 
    this.usuario = this.dataSharingService.usuario
  }

  ngOnInit(): void {

    console.log(this.usuario)

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
        console.log("this.vuelos en componente", this.vuelos);
        
      }
    )
  }

  submitForm(){
    console.log(this.date)
    console.log(this.numOfAdults)
    console.log(this.iataOrigin)
    console.log(this.iataDeparture)
    this.getToken(this.iataOrigin,this.iataDeparture,this.date,this.numOfAdults)
    this.dataSharingService.vuelos = this.vuelos;
    this.dataSharingService.numbers = this.numOfAdults;
    
  }

  emitirArreglo() {
    this.router.navigate(["/vuelos"])
    
  }

}
