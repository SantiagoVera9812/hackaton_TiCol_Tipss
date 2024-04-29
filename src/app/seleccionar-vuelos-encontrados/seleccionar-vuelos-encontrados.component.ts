import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-seleccionar-vuelos-encontrados',
  templateUrl: './seleccionar-vuelos-encontrados.component.html',
  styleUrls: ['./seleccionar-vuelos-encontrados.component.css']
})
export class SeleccionarVuelosEncontradosComponent implements OnInit {

  vuelos: any[];

  constructor(private dataSharingService: DataSharingService) {
    this.vuelos = this.dataSharingService.vuelos;
  }

  ngOnInit(): void {

    console.log(this.vuelos);
  }

  
}
