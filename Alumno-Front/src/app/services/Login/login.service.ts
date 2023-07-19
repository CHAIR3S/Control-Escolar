import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/model/Login';
import { ResponseGC } from 'src/app/model/ResponseGC';
import { map, Observable } from 'rxjs';
import { Credentials } from 'src/app/model/Credentials';
import { Token } from 'src/app/model/Token';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient,
    private cookieService: CookieService
    ) { }


  getCurrentUser(): Observable<ResponseGC<Login>> {

    const url = 'http://localhost:8081/login/usuarioActual';

    return this.http.get<ResponseGC<Login>>(url);
  }


  login(creds: Credentials) {

    const url = 'http://localhost:8081/login/generate-token';

    return this.http.post<Token>(url, creds);
  }

  saveToken(token: Token): void { //Guardar token en cookies por 1 dia

    this.cookieService.set('token', token.token, {expires: 1, path: '/'});
  }

  isLoggedIn(): boolean { //User is logged or not

    const token: Token = {
      token: this.cookieService.get('token')
    };

    if(token.token == ''){ // If token doesnt exist
      return false;
    }

    return true;
  }


  // Remove token
  logout(): boolean {

    this.cookieService.delete('token', '/');

    return true;
  }


  getToken(): string{

    if(this.cookieService.check('token'))
      return this.cookieService.get('token');

    return '';
  }
}
