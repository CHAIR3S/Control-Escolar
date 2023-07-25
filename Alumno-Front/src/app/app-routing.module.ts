import { LoginGuardian } from './Guadians/login-guardian.guard';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { NgModule, Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { LoginService } from './services/Login/login.service';

const routes: Routes = [
  {
    path: 'init',
    // canActivateChild: [LoginGuardian], // Protector de rutas por si no estas autenticado
    component: SidebarComponent,
    loadChildren: () => 
      import('./Components/interface.module').then(m => m.InterfaceModule )
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  providers: [LoginGuardian, LoginService, Router],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }