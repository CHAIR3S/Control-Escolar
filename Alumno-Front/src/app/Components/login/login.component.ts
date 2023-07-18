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
    
    creds.correo = this.form.value.correo;
    creds.contraseña = this.form.value.contraseña;
    

    this.loginService.login(creds).subscribe(
      (ResponseGC) => {

        console.log(this.form.value);

        this.router.navigate(['init/home']);
        
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
