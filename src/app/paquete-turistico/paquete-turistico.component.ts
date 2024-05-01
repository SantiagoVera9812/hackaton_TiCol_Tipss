import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryRestApiService } from '../country-rest-api.service';
import { DataSharingService } from '../data-sharing.service';
import { Usuario } from '../modelo/usuario.interface';

@Component({
  selector: 'app-paquete-turistico',
  templateUrl: './paquete-turistico.component.html',
  styleUrls: ['./paquete-turistico.component.css']
})
export class PaqueteTuristicoComponent implements OnInit {

  countyCode: string = '';
  countryName: string = '';
  usuario: Usuario;

  constructor(private activatedRoute: ActivatedRoute, private dataSharingService: DataSharingService, private countryApi: CountryRestApiService) {
    this.usuario = this.dataSharingService.usuario
   }

  ngOnInit(): void {

    console.log(this.usuario)
    this.activatedRoute.params.subscribe(params => {

      this.countyCode = params['id'];
      console.log('The country we are in is', this.countyCode);
      
    }

    );

    this.countryApi.getOnlyAndOnlyNameByCode(this.countyCode).subscribe(
      response => {
        
          this.countryName = response
      },
      error => {
        console.log(error)
      }
    )


  }

}
