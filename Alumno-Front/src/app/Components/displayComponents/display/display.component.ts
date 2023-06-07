import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from 'src/app/services/Alumno/alumno.service'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent{

  constructor(
    public route:ActivatedRoute,
    public alumnoService: AlumnoService
  ) {  
  }

  sendEvent(){
    this.alumnoService.sendEvent();
  }
}
