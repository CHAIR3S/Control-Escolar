import { LoginGuardian } from './Guadians/login-guardian.guard';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { NgModule, Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path: '',
    component: AppComponent,
    children:[
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'init',
        loadChildren: () => import('./Modules/sidebar/sidebar.module').then(m => m.SidebarModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./Modules/login/login.module').then(m => m.LoginModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }

];

@NgModule({
  providers: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }