import { AlumnoService } from './../../services/Alumno/alumno.service';
import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-mensaje-borrar',
  templateUrl: './mensaje-borrar.component.html',
  styleUrls: ['./mensaje-borrar.component.scss']
})
export class MensajeBorrarComponent {


  constructor(
    public alumnoService: AlumnoService
  ){
  }

  sendEvent(){     //Se envia para ejecutar la accion de borrar
    this.alumnoService.deleteAlumno(); 
  }

}
