import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tool-bar-header',
  templateUrl: './tool-bar-header.component.html',
  styleUrls: ['./tool-bar-header.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ToolBarHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
