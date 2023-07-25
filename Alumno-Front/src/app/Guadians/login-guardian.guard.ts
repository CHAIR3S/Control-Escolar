import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/Login/login.service';

@Injectable()
export class LoginGuardian implements  CanActivateChild{

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}


  // canActivate(): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {

  //   return this.permission();
  // }



  permission() {

    if(!this.loginService.isLoggedIn() ){
      window.location.assign("http://localhost:4200/login");

      // this.router.navigate(['login']);


      return false;
    }


    return true;

  }

  canActivateChild(
    next: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {


      if(!this.permission()){
        return false;
      }

      return this.rolPermission(next);
  }


  rolPermission(next: ActivatedRouteSnapshot){
    const rolRoute = next.data['role']; // Obtener data de la ruta hija
    const user = this.loginService.getUser();

    if (next.data['role'] && user.authorities[0].authority != rolRoute) {
      
      return false;
    }
    return true;
  }
  
}