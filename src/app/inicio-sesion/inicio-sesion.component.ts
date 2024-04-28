import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendUsuarioVueloService } from '../backend-usuario-vuelo.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class InicioSesionComponent implements OnInit {

  userForm: FormGroup;
  correoIntento: string = '';
  contrasenaIntento: string = '';

  constructor(private router:Router, private formBuilder: FormBuilder, private inicioSesionService: BackendUsuarioVueloService){

    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  
  onSubmit(){

    console.log(this.userForm.value.username)
    console.log(this.userForm.value.password)

    this.correoIntento = this.userForm.value.username
    this.contrasenaIntento = this.userForm.value.password
    
    this.inicioSesionService.verificarUsuario(this.correoIntento, this.contrasenaIntento).subscribe(
      response => {
        console.log(response)
        if(response){
          this.router.navigate(['/lorem-ipsum'])
        }else{
          console.log('correo y contrasena no existe')
        }
      },
      error => {
        console.log(error)
      }

    )
    console.log(this.userForm.value.username)
    //this.router.navigate(['/lorem-ipsum']);

  }

  ngOnInit(): void {
  }

}
