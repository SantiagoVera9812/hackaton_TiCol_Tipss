import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';
import { Usuario } from '../modelo/usuario.interface';


@Component({
  selector: 'app-point-of-interest',
  templateUrl: './point-of-interest.component.html',
  styleUrls: ['./point-of-interest.component.css']
})
export class PointOfInterestComponent implements OnInit {

  poisCity: any[]
  usuario: Usuario;
  countyCode: string = ''

  constructor(private dataSharing: DataSharingService, private activatedRoute: ActivatedRoute) {
    this.poisCity = this.dataSharing.poisCity
    this.usuario = this.dataSharing.usuario
   }

  ngOnInit(): void {

    console.log(this.poisCity)
    console.log(this.poisCity)
    this.activatedRoute.params.subscribe(params => {

      this.countyCode = params['id'];
    })
  }

}
