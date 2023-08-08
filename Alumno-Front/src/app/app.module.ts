import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackBarComponent } from './Components/snack-bar/snack-bar.component'; 
import { CookieService } from 'ngx-cookie-service';
import { InterceptorService } from './Interceptors/interceptor.service';
import { LoginRoutingModule } from './Modules/login/login-routing.module';
import { SidebarRoutingModule } from './Modules/sidebar/sidebar-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatTooltipModule,
    ReactiveFormsModule,
    // InterfaceRoutingModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    LoginRoutingModule,
    SidebarRoutingModule,
    
  ],
  providers: [CookieService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true //Para que este al pendiente de todas las peticiones
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
