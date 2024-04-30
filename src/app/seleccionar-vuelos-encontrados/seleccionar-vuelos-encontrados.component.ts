import { Component, OnInit } from '@angular/core';
import { BackendUsuarioVueloService } from '../backend-usuario-vuelo.service';
import { DataSharingService } from '../data-sharing.service';
import { Usuario } from '../modelo/usuario.interface';
import { Parada, Vuelo } from '../modelo/vuelio.interface';

@Component({
  selector: 'app-seleccionar-vuelos-encontrados',
  templateUrl: './seleccionar-vuelos-encontrados.component.html',
  styleUrls: ['./seleccionar-vuelos-encontrados.component.css']
})
export class SeleccionarVuelosEncontradosComponent implements OnInit {

  vuelos: any[];
  numbers: number;
  usuario: Usuario;

  constructor(private dataSharingService: DataSharingService, private backendUsuarioVueloService: BackendUsuarioVueloService) {
    this.usuario = this.dataSharingService.usuario;
    this.vuelos = this.dataSharingService.vuelos;
    this.numbers = this.dataSharingService.numbers;
  }

  ngOnInit(): void {

    console.log('En seleccionar vuelo',this.usuario)

    console.log(this.dataSharingService.usuario)

    console.log(this.vuelos);
  }

  registrarVueloSeleccionado(vuelo: any) {

    const usuarioVuelo = this.usuario;

    const paradas: Parada[] = [];

    vuelo.itineraries[0].segments.forEach((segment: any, index: number) => {
      const nuevaParada: Parada = {
        llegada: `${segment.arrival.iataCode} - ${segment.arrival.at}`,
        salida: `${segment.departure.iataCode} - ${segment.departure.at}`,
        avion: `${segment.carrierCode} - ${segment.aircraft.code}`
    };

    paradas.push(nuevaParada);
  });

    const vueloSeleccionado: Vuelo = {
      price: {
          grandTotal: vuelo.price.grandTotal,
          currency: vuelo.price.currency
      },
      lastTicketingDate: vuelo.lastTicketingDate,
      numberOfBookableSeats: vuelo.numberOfBookableSeats,
      validatingAirlineCodes: vuelo.validatingAirlineCodes[0],
      segmentos: paradas,
      numeroDeParadas: vuelo.itineraries[0].segments.length,
      usuarios: [] 

};

if (!this.usuario.vuelos) {
  this.usuario.vuelos = [];
}


vueloSeleccionado.usuarios.push(usuarioVuelo);

this.backendUsuarioVueloService.insertarVuelo(vueloSeleccionado).subscribe(
  response => {
    console.log(response)
  },
  error => {
    console.log(error)
  }
)



console.log(usuarioVuelo)
console.log(vueloSeleccionado)
     
}
}