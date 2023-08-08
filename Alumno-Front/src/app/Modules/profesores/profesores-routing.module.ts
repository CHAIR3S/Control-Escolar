import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaProfesoresComponent } from 'src/app/Components/profesores/tabla-profesores/tabla-profesores.component';

const routes: Routes = [
  {
    path: '',
    component: TablaProfesoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesoresRoutingModule { }
