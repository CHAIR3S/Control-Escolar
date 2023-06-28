import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private fb: FormBuilder
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

    const correo = this.form.value.correo;

    const contraseña = this.form.value.contraseña;

    

    this.loginService.consultarUsuario(correo, contraseña).subscribe(
      (ResponseGC) => {

        console.log(ResponseGC);
        
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
