import { EditComponent } from './administracion/edit/edit.component';
import { TablaProfesoresComponent } from './profesores/tabla-profesores/tabla-profesores.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginGuardian } from '../Guadians/login-guardian.guard';
import { LoginService } from '../services/Login/login.service';

const routes: Routes = [
  {
    path: '',
    // canActivateChild: [LoginGuardian],
    children: [
      {path: 'home/:id', component: HomeComponent},
      {path: 'admin', component: AdministracionComponent, data: {role: 'Administrador'}},
      {path: 'profesores', component: TablaProfesoresComponent},
      {path: 'edit', component: EditComponent, data: {role: 'Administrador'}},
      {path: 'init/**', redirectTo: 'home/:id'}
    ]
  }
];

@NgModule({
  providers: [LoginGuardian, LoginService, Router],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterfaceRoutingModule { }
