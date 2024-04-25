import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-confirmar-busqueda-vuelo',
  templateUrl: './confirmar-busqueda-vuelo.component.html',
  styleUrls: ['./confirmar-busqueda-vuelo.component.css']
})
export class ConfirmarBusquedaVueloComponent implements OnInit {

  ipAddress: string = '';
  country: string = '';
  error: string = '';
  iataDeparture: string = '';
  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe(params => {
      this.iataDeparture = params['iataDeparture'];
      console.log(this.iataDeparture)

    })
  }

  onIataCodeChange(iataCode: string): void {
    console.log('IATA Code recibido en el componente padre:', iataCode);
    // Realiza las acciones necesarias con el iataCode recibido
  }

  

}
