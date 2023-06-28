import { DisplayComponent } from './Components/displayComponents/display/display.component';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { AdministracionComponent } from './Components/administracion/administracion.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MateriasTablaComponent } from './Components/home/materias-tabla/materias-tabla.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TablaProfesoresComponent } from './Components/profesores/tabla-profesores/tabla-profesores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { InterfaceRoutingModule } from './Components/interface-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MensajeBorrarComponent } from './Components/mensaje-borrar/mensaje-borrar.component';
import { ClickOutDirective } from './Directive/click-out.directive';
import { ModalComponent } from './Components/modal/modal.component';
import { MensajeDatosComponent } from './Components/mensaje-datos/mensaje-datos.component'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackBarComponent } from './Components/snack-bar/snack-bar.component'; 
import { LoginComponent } from './Components/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { InterceptorService } from './Interceptors/interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AdministracionComponent,
    MateriasTablaComponent,
    TablaProfesoresComponent,
    DisplayComponent,
    MensajeBorrarComponent,
    ClickOutDirective,
    ModalComponent,
    MensajeDatosComponent,
    SnackBarComponent,
    LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    ReactiveFormsModule,
    InterfaceRoutingModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [CookieService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true //Para que este al pendiente de todas las peticiones
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
