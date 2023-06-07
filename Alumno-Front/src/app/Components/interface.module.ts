import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterfaceRoutingModule } from './interface-routing.module';
import { EditComponent } from './administracion/edit/edit.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    InterfaceRoutingModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class InterfaceModule { }
