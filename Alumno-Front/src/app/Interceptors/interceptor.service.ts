import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../services/Login/login.service';
import { Router } from '@angular/router';
import { AlumnoService } from '../services/Alumno/alumno.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(
    private loginService: LoginService,
    private router: Router,
    private alumnoService: AlumnoService
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { //Capta todas las peticiones http y las retorna para generar un token a partir de ellas

    let authReq = req;
    const token = this.loginService.getToken();

    if(token != ''){
      authReq = authReq.clone({
        setHeaders : {Authorization: `Bearer ${token}`}
      });

    }

    return next.handle( authReq );
  }
}
