import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/model/Profesor';
import { LoginService } from 'src/app/services/Login/login.service';

@Component({
  selector: 'app-profesores-data',
  templateUrl: './profesores-data.component.html',
  styleUrls: ['./profesores-data.component.scss']
})
export class ProfesoresDataComponent implements OnInit {

  constructor(
    private loginService: LoginService){}

  profesor: Profesor = new Profesor;

  ngOnInit(): void {

    this.profesor = this.loginService.getUser().profesor;
      
  }
  
}
