import { Location } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/Components/login/login.component';
import { LoginGuardian } from 'src/app/Guadians/login-guardian.guard';
import { LoginService } from 'src/app/services/Login/login.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuardian],
    component: LoginComponent 
  }
];

@NgModule({
  providers: [LoginGuardian, LoginService, Router, Location],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
