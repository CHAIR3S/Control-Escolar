import { Component } from '@angular/core';
import { AlumnoService } from 'src/app/services/Alumno/alumno.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {

  constructor(
    public alumnoService: AlumnoService
  ){}


}
