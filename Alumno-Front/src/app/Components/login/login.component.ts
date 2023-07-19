import { Profesor } from './../../model/Profesor';
import { Token } from './../../model/Token';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/model/Credentials';
import { Login } from 'src/app/model/Login';
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


  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ){


    this.form = this.fb.group({
      correo: ['', Validators.email],
      contraseña: ['']
    })

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
    
    creds.correo = this.form.value.correo;
    creds.contraseña = this.form.value.contraseña;
    

    this.loginService.login(creds).subscribe(
      (response) => {


        
        this.loginService.saveToken(response);

        this.loginService.getCurrentUser().subscribe( 
          (response) => {


            if(response.data.alumno == null){

              id = response.data.profesor.id;

              this.router.navigate([`init/home/${id}`]);


            }

            if(response.data.profesor == null){

              id = response.data.alumno.id;

              this.router.navigate([`init/home/${id}`]);

            }


        },
        (error) => {

        });

        
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
