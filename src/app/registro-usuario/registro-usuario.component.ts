import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class RegistroUsuarioComponent implements OnInit {

  userForm: FormGroup;

  constructor(private router:Router, private formBuilder: FormBuilder){

    this.userForm = this.formBuilder.group({
      nombre:['',Validators.required],
      correo:['',Validators.compose([Validators.required,Validators.email])],
      contrasena:['',Validators.required],
      nombrePerfil:['',Validators.required]
    })
  }
  
  onSubmit(){

    this.router.navigate(['/lorem-ipsum']);
  }

  ngOnInit(): void {
  }

}
