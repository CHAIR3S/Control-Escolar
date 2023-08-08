import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarComponent } from 'src/app/Components/sidebar/sidebar.component';
import { DisplayComponent } from 'src/app/Components/displayComponents/display/display.component';
import { MensajeBorrarComponent } from 'src/app/Components/mensaje-borrar/mensaje-borrar.component';
import { MensajeDatosComponent } from 'src/app/Components/mensaje-datos/mensaje-datos.component';
import { ModalComponent } from 'src/app/Components/modal/modal.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SidebarComponent,
    DisplayComponent,
    MensajeBorrarComponent,
    MensajeDatosComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule,
    MatGridListModule,
    SharedModuleModule,
    MatButtonModule
  ]
})
export class SidebarModule { }
