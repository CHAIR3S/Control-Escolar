import { Component } from '@angular/core';
import { AlumnoService } from 'src/app/services/Alumno/alumno.service'

@Component({
  selector: 'app-mensaje-borrar',
  templateUrl: './mensaje-borrar.component.html',
  styleUrls: ['./mensaje-borrar.component.scss']
})
export class MensajeBorrarComponent {

  constructor(
    public alumnoService: AlumnoService
  ) {  
  }

  contador: number = 0;


  sendEvent(){     //Se envia para ejecutar la accion de borrar
    this.alumnoService.sendEvent(); 
  }

  clickedOut(){      //Se ejecuta cada que la directiva detecta que se hizo click afuera
    
    if(this.contador>=1){  //Como al hacer el primer click es para mostrar el componente, se tiene que quitar hasta el segundo click porque sino, nunca se mostraria
      this.alumnoService.dialog = false;
      this.contador=0;
    }
    
    if(this.contador<1){
      this.contador++;
    }
  }

}
