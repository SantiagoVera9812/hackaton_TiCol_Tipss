import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar-header',
  templateUrl: './tool-bar-header.component.html',
  styleUrls: ['./tool-bar-header.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ToolBarHeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigateToLogin() {
    this.router.navigate(['/inicio-de-sesion']);
  }

}
