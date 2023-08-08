import { Location } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/Components/sidebar/sidebar.component';
import { LoginGuardian } from 'src/app/Guadians/login-guardian.guard';
import { LoginService } from 'src/app/services/Login/login.service';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    canActivateChild: [LoginGuardian],
    children:[
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../administracion/administracion.module').then(m => m.AdministracionModule), 
        data: {role: 'Administrador'}
      },
      {
        path: 'profesores',
        loadChildren: () => import('../profesores/profesores.module').then(m => m.ProfesoresModule)
      },
      {
        path: 'edit',
        loadChildren: () => import('../edit/edit.module').then(m => m.EditModule),
        data: {role: 'Administrador'} 
      }
    ]
  },
  { path: '**', 
    redirectTo: 'home'
  }
];

@NgModule({
  providers: [LoginGuardian, LoginService, Location],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
