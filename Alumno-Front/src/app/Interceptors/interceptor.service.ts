import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { //Capta todas las peticiones http y las retorna para generar un token a partir de ellas

    console.log('paso por interceptor');

    // throw new Error('Method not implemented.');
    return next.handle( req );
  }
}
