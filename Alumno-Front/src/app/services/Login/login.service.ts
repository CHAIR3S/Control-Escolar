import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/model/Login';
import { ResponseGC } from 'src/app/model/ResponseGC';
import { map, Observable } from 'rxjs';
import { Credentials } from 'src/app/model/Credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  public consultarUsuario(correo: string, contraseña: string): Observable<ResponseGC<Login>> {

    const url = 'http://localhost:8081/Login/buscarLoginFiltro/?contrase%C3%B1a=' + contraseña + '&correo=' + correo;

    return this.http.get<ResponseGC<Login>>(url);
  }


  public login(creds: Credentials) {

    const url = 'http://localhost:8081/login';


    // return this.http.post('http://localhost:8081/login', creds,  {
    //   observe: 'response'
    // }).pipe(map((response: HttpResponse<any>) => {
    //   const body = response.body;
    //   const headers = response.headers;

    //   const bearerToken = headers.get('Authorization')!;
    //   const token = bearerToken.replace('Bearer ', '');

    //   localStorage.setItem('token', token);

    //   return body;
    // }))



    const body = { correo: "adm2@admin.edu.mx", contraseña: "ADM2+" };

    console.log(body)

    const params: HttpParams = new HttpParams().set('correo', 'adm2@admin.edu.mx')
                                               .set('contraseña', 'ADM2+')

    const headers = new HttpHeaders().set('correo', 'adm2@admin.edu.mx')
    .set('contraseña', 'ADM2+');


    return this.http.post(url, creds);
  }


  getToken(){
    return localStorage.getItem('token');
  }
}
