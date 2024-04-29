import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  
  selector: 'app-lorem-ipsum-prueba',
  templateUrl: './lorem-ipsum-prueba.component.html',
  styleUrls: ['./lorem-ipsum-prueba.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
  
})
export class LoremIpsumPruebaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
