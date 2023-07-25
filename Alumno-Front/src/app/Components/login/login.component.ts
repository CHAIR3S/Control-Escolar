import { AlumnoService } from 'src/app/services/Alumno/alumno.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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


  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private alumnoService: AlumnoService
  ){


    this.form = this.fb.group({
      correo: ['', Validators.email],
      contraseña: ['']
    })


    this.load = false;


    if(this.loginService.isLoggedIn()){

      let id = this.loginService.getUser()

      // this.load = true;
      
      this.router.navigate([`init/home/${id}`]);
    }

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

    const creds: Credentials = new Credentials;
    let id;
    this.load = true;
    
    creds.correo = this.form.value.correo;
    creds.contraseña = this.form.value.contraseña;

    this.loginService.login(creds).subscribe(
      (response) => {


        
        this.loginService.saveToken(response);

        this.loginService.getCurrentUser().subscribe( 
          (response) => {

            this.loginService.saveUser(response.data);


            if(response.data.alumno == null){ // If user logged is a teacher

              id = response.data.profesor.id;

              this.router.navigate([`init/home/${id}`]);


            }

            if(response.data.profesor == null){ // If user logged is a student

              id = response.data.alumno.id;

              this.router.navigate([`init/home/${id}`]);

            }




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
}
