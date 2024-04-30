import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { Usuario } from '../modelo/usuario.interface';

@Component({
  
  selector: 'app-lorem-ipsum-prueba',
  templateUrl: './lorem-ipsum-prueba.component.html',
  styleUrls: ['./lorem-ipsum-prueba.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
  
})
export class LoremIpsumPruebaComponent implements OnInit {

  usuario: Usuario;

  constructor(private dataSharingService: DataSharingService) { 
    this.usuario = this.dataSharingService.usuario
  }

  ngOnInit(): void {

    console.log("lorem ipsum", this.usuario)
  }

}
