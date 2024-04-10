import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class InicioSesionComponent implements OnInit {

  userForm: FormGroup;

  constructor(private router:Router, private formBuilder: FormBuilder){

    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  
  onSubmit(){}

  ngOnInit(): void {
  }

}
