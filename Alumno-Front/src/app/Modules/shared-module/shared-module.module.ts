import { RolPermissionDirective } from 'src/app/Directive/rol-permission.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutDirective } from 'src/app/Directive/click-out.directive';



@NgModule({
  declarations: [
    RolPermissionDirective,
    ClickOutDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RolPermissionDirective,
    ClickOutDirective
  ]
})
export class SharedModuleModule { }
