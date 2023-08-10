import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/Login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor( private loginService: LoginService){}

  user: any;

  ngOnInit(): void {
      this.user = this.loginService.getUser();
  }

}


