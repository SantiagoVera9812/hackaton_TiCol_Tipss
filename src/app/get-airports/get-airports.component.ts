import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirportApiKeyService } from '../airport-api-key.service';
import { CountryRestApiService } from '../country-rest-api.service';
import { DataSharingService } from '../data-sharing.service';
import { Usuario } from '../modelo/usuario.interface';

@Component({
  selector: 'app-get-airports',
  templateUrl: './get-airports.component.html',
  styleUrls: ['./get-airports.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class GetAirportsComponent implements OnInit {
  @Input() isEmbedded: boolean = false;
  @Output() iataCodeChange = new EventEmitter<string>();
  
  poisCity: any[] = [];
  airports: any[] = [];
  airportArray: any[] = [];
  city: any[] = [];
  states: any[] = [];
  accessToken: string = '';
  countyrCityAccessToken = '';
  countyCode: string = '';
  countryName: string = '';
  selectedStateName: string = '';
  keywordAirport: string = '';
  keywordCity: string = '';
  originalLabel: string = 'Escribe una ciudad a donde quieres ir';
  originalLabelAirport: string = 'Escribe el codigo IATA a donde quieres ir';
  ipAddress: string = '';
  countryUser: string = '';
  error: string = '';
  slides: any[] = [/* array de diapositivas */];
  currentSlideIndex = 0;

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  usuario: Usuario


  constructor(private activatedRouter: ActivatedRoute, private router: Router, private airportService: AirportApiKeyService, private countryCityApiService: CountryRestApiService,private dataSharingService: DataSharingService) { 
    this.usuario = this.dataSharingService.usuario
  }

  ngOnInit(): void {
    console.log('En get airports', this.usuario)
    this.activatedRouter.params.subscribe(params => {

      this.countyCode = params['id'];
      console.log('The country we are in is', this.countyCode);
      this.getCountryStatesToken(this.countyCode)
    }

    );

    this.countryCityApiService.getOnlyAndOnlyNameByCode(this.countyCode).subscribe(
      response => {
        
          this.countryName = response
      },
      error => {
        console.log(error)
      }
    )

    this.countryCityApiService.getUserIPAddress().subscribe(
      ipAddress => {
        this.ipAddress = ipAddress;
        this.fetchCountryInfo();
      },
      error => {
        this.error = 'Failed to get IP address.';
        console.error('Failed to get IP address:', error);
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

  getTokenAirport(keyword: string, countryCode: string): void {
   
    this.airportService.getToken().subscribe(
      token => {
        console.log('Token:', token);
        this.accessToken = token.access_token; 
        console.log('access token:', this.accessToken);
        this.getAirports(keyword,countryCode)
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

  searchAirports(): void{
    this.getTokenAirport(this.keywordAirport,this.countyCode);
  }



  searchAirportsByCity(): void {
   
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
    const stateName = state.name; 
    console.log(stateName)
    console.log('ISO 2 del estado seleccionado:', iso2code);
    this.getCountryCityToken(this.countyCode,iso2code)
    this.selectedStateName = stateName;
    
  }

  getCountryName(city: any): void{
    console.log('Ciudad seleccionada', city.name)
    this.selectedStateName = city.name
  }

 

  
  getAirports(keyword: string, countryCode: string): void {
    this.airportService.getAirports(keyword, countryCode, this.accessToken).subscribe(
      airports => {
        console.log('Airports:', airports.data[0]);
        this.airportArray.push(airports.data[0])
      },
      error => console.error('Error fetching airports:', error)
    );
  } 

  getInfoWithIataCode(iataCode: string): void{
    console.log(iataCode);
    if (this.isEmbedded) {
      console.log(iataCode)
      this.iataCodeChange.emit(iataCode);
    } else {
     
      this.router.navigate(['/country', this.countryUser, iataCode]);
    }
  }

  fetchCountryInfo(): void {
    this.countryCityApiService.fetchCountryInfo(this.ipAddress).subscribe(
      country => {
        this.countryUser = country;
        console.log('Country:', this.countryUser);
      },
      error => {
        this.error = 'Failed to fetch country information.';
        console.error('Failed to fetch country information:', error);
      }
    );
  }

  redirigirAPaquetes() {    
    // Redirige a la ruta de paquetes turísticos
    this.router.navigate(['/paquetes', this.countyCode]);
  }

  getCityCoordinates(cityName: any){
    console.log('Dentro de city coordinates', cityName.latitude)
    console.log('Dentro de city coordinates', cityName.longitude)

    this.airportService.getToken().subscribe(
      response => {
        console.log(response)
        this.airportService.getPointsOfInterest(Number(cityName.latitude),Number(cityName.longitude),response.access_token).subscribe(
          response =>{
            console.log(response.data)
            this.poisCity = response.data;
            console.log(this.poisCity);
            this.dataSharingService.poisCity = this.poisCity
            this.router.navigate(['/pointOfInterest',cityName.name])
          },
          error => {
            console.log(error)
          }
        )
      }, error => {
        console.log(error)
      }
    )

  }
}


