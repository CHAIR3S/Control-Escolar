import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/Login/login.service';
import { Location } from '@angular/common';

@Injectable()
export class LoginGuardian implements  CanActivateChild, CanActivate{

  constructor(
    private loginService: LoginService,
    private location: Location
  ){}


  canActivate(): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {


    if(this.loginService.isLoggedIn()){
      location.assign('/init/home');
      return false;
    }

    return true;
  }


  canActivateChild(
    route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {


      if(!this.loginService.isLoggedIn()){
        location.assign('/init/home');
        return false
      }

      return this.rolPermission(route);
      // return true;
  }


  rolPermission(route: ActivatedRouteSnapshot){
    const rolRoute: string = route.data['role']; // Obtener data de la ruta hija
    const userRol: string = this.loginService.getUser().authorities[0].authority;
    

    if (route.data['role'] && userRol.toUpperCase() != rolRoute.toUpperCase()) {

      this.location.back();
      
      return false;
    }
    return true;
  }
  
}