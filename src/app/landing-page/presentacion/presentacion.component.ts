import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PresentacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
