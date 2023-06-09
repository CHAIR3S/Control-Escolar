import { ResponseGC } from 'src/app/model/ResponseGC';
import { HomeComponent } from './../home/home.component';
import { Alumno } from 'src/app/model/Alumno';
import { AlumnoService } from 'src/app/services/Alumno/alumno.service';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  response: ResponseGC<Alumno> = new ResponseGC();
  alumno: Alumno = new Alumno();

  constructor(
    public route:ActivatedRoute,
    public alumnoService: AlumnoService) {}



}
