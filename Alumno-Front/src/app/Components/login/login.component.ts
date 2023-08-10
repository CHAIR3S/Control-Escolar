import { AlumnoService } from 'src/app/services/Alumno/alumno.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Credentials } from 'src/app/model/Credentials';
import { LoginService } from 'src/app/services/Login/login.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;
  showPassword: boolean = false;
  tipo: string = 'password';
  load: boolean = false;
  spinner: boolean = true;


  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private alumnoService: AlumnoService
  ){


    this.form = this.fb.group({
      correo: ['', Validators.email],
      contraseña: ['', Validators.required]
    })



    this.load = false;
    this.spinner = true;


  }

  showHidePassword = () => {
    this.showPassword = !this.showPassword


    switch(this.tipo){
      case 'password':
        this.tipo = 'text';
        break;
      case 'text':
          this.tipo = 'password';
          break;
    }
  };

  login() {

    if(this.form.valid){

      const creds: Credentials = new Credentials;
      this.load = true;

    
      creds.correo = this.form.value.correo;
      creds.contraseña = this.form.value.contraseña;

      this.loginService.login(creds).subscribe(
        (response) => {


          
          this.loginService.saveToken(response);

          this.loginService.getCurrentUser().subscribe( 
            (response) => {

              this.loginService.saveUser(response.data);

              this.spinner = false;

              location.assign('/init/home');


          },
          (error) => {

            this.load = false;

            this.alumnoService.snackBarMessage = 'Error al iniciar sesión';

            this.alumnoService.abrirSnackBar();

          });

          
        },
        (error) => {

          this.load = false;
          
          this.alumnoService.snackBarMessage = 'Correo o contraseña incorrecta';

          this.alumnoService.abrirSnackBar();
        }
      );
    }
    else{
      this.alumnoService.snackBarMessage = 'Formulario inválido';

      this.alumnoService.abrirSnackBar();
    }
  }
}
