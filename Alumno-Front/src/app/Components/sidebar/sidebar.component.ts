import { AlumnoService } from 'src/app/services/Alumno/alumno.service';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/Login/login.service';
import { Login } from 'src/app/model/Login';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit{
  user: Login = new Login;

  constructor(
    public route:ActivatedRoute,
    public alumnoService: AlumnoService,
    private loginService: LoginService,
    private router: Router) {

      if(this.loginService.isLoggedIn())
        this.user = this.loginService.getUser();
      else
        this.router.navigate(['/login']);
    }


    ngOnInit(): void {
        


    }

    logout(){
      this.loginService.logout();
    }

}
