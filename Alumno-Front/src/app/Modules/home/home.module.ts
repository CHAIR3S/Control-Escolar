import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { MateriasTablaComponent } from 'src/app/Components/home/materias-tabla/materias-tabla.component';
import { AlumnosDataComponent } from 'src/app/Components/alumnos-data/alumnos-data.component';
import { ProfesoresDataComponent } from 'src/app/Components/profesores-data/profesores-data.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { AdminDataComponent } from 'src/app/Components/admin-data/admin-data.component';


@NgModule({
  declarations: [
    HomeComponent,
    MateriasTablaComponent,
    AlumnosDataComponent,
    ProfesoresDataComponent,
    AdminDataComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModuleModule
  ]
})
export class HomeModule { }
