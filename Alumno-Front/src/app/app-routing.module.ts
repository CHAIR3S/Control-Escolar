import { LoginGuardian } from './Guadians/login-guardian.guard';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {
    path: 'init',
    component: SidebarComponent,
    // canActivate: [LoginGuardian],
    loadChildren: () => import('./Components/interface.module').then(m => m.InterfaceModule )
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }