import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendUsuarioVueloService } from '../backend-usuario-vuelo.service';
import { Usuario } from '../modelo/usuario.interface';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class RegistroUsuarioComponent implements OnInit {

  userForm: FormGroup;

  errorMessages = {
    nombre: 'Nombre es requerido.',
    apellido: 'Apellido es requerido',
    correo: 'Correo electrónico no válido.',
    celular: 'Celular no válido. Debe tener el formato +1-123-456-7890.',
    contrasena: 'Contraseña es requerida.',
    confirmarContrasena: 'Las contraseñas no coinciden.'
  };

  constructor(private router:Router, private formBuilder: FormBuilder, private usuarioService: BackendUsuarioVueloService, private http: HttpClient){

    this.userForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ciudad: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.pattern('^\\+[0-9]{1,3}-[0-9]{3}-[0-9]{3}-[0-9]{4}$')]], // celular valido +1-123-456-7890
      contrasena: ['', Validators.required],
      confirmarContrasena: ['', Validators.required]
    },{
      validator: this.passwordMatchValidator
    });
  }
  
  onSubmit(){

    if (this.userForm.valid) {
      const usuario: Usuario = this.userForm.value;
      this.usuarioService.insertarUsuario(usuario).subscribe(
        response => {
          console.log('Usuario insertado correctamente:', response);
          
        },
        error => {
          console.error('Error al insertar usuario:', error);
          
        }
      );
    } else {
      console.log('Formulario inválido');
      this.markFormGroupTouched(this.userForm);
    }
    this.router.navigate(['/inicio-de-sesion']);
  }
  
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
  
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  ngOnInit(): void {
    
  }


  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('contrasena');
    const confirmPasswordControl = formGroup.get('confirmarContrasena');

    if (!passwordControl || !confirmPasswordControl) {
      return; 
    }

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl.setErrors(null);
    }
  }

  hasError(controlName: string, errorName: string) {
    const control = this.userForm.get(controlName);
    if (!control) {
      return false; 
    }
  
    return control.hasError(errorName);
  }

}
