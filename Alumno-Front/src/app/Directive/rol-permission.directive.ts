import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, ElementRef } from '@angular/core';
import { LoginService } from '../services/Login/login.service';

@Directive({
  selector: '[appRolPermission]'
})
export class RolPermissionDirective implements OnInit{

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef, // contenedor en donde esta la directiva
    private loginService: LoginService
  ) { }

  role: string = '';
  currentUser: any;

  @Input()
  set appRolPermission(role: string){ // Asi se agrega valores que puede recibir la directiva

    this.role = role;

  }


  ngOnInit(): void {

    this.currentUser = this.loginService.getUser();


    this.updateView();
      
  }

  updateView(): void {
    this.viewContainer.clear(); // Que limpie el contenedor al que se esta haciendo referencia


    if(this.role != '' && this.loginService.isLoggedIn()){ // si se tienen roles

      if(this.checkPermission()){
        this.viewContainer.createEmbeddedView(this.templateRef); // Se muestra lo que tiene adentro el contenedor donde esta la directiva
      }
    }
  }

  checkPermission(): boolean {
    
    if(this.currentUser.authorities[0].authority.toUpperCase() == this.role.toUpperCase()){ // Si el permiso del usuario concuerda con el de la directiva que se paso
      return true;
    }
    return false;
  }
}
