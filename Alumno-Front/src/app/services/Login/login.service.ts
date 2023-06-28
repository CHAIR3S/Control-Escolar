import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/model/Login';
import { ResponseGC } from 'src/app/model/ResponseGC';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  public consultarUsuario(correo: string, contraseña: string): Observable<ResponseGC<Login>> {

    const url = 'http://localhost:8081/Login/buscarLoginFiltro/?contrase%C3%B1a=' + contraseña + '&correo=' + correo;

    return this.http.get<ResponseGC<Login>>(url);
  }
}
