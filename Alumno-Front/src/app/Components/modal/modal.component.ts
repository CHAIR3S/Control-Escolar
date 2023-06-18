import { Component } from '@angular/core';
import { AlumnoService } from 'src/app/services/Alumno/alumno.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(
    public alumnoService: AlumnoService
  ) {  
  }


  contador: number = 0;


  clickedOut(){      //Se ejecuta cada que la directiva detecta que se hizo click afuera
    
    if(this.contador>=1){  //Como al hacer el primer click es para mostrar el componente, se tiene que quitar hasta el segundo click porque sino, nunca se mostraria
      this.alumnoService.dialog = false;
      this.alumnoService.alumnoDialog = false;
      this.contador=0;
    }
    
    if(this.contador<1){
      this.contador++;
    }
  }
}
