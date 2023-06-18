import { Alumno } from 'src/app/model/Alumno';
import { AlumnoService } from './../../services/Alumno/alumno.service';
import { Component } from '@angular/core';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../Components/snack-bar/snack-bar.component'

@Component({
  selector: 'app-mensaje-datos',
  templateUrl: './mensaje-datos.component.html',
  styleUrls: ['./mensaje-datos.component.scss']
})
export class MensajeDatosComponent {

  constructor(
    public alumnoService: AlumnoService,
    private snackBar: MatSnackBar
  ){}

  alumno: Alumno = this.alumnoService.alumno;


    async copiarInfo(){ //copiar la variable del objeto alumno al portapapeles
      
      try {
        await navigator.clipboard.writeText(this.elementoCopiado());
        this.alumnoService.textoCopiado = true;
      } catch (error) {
        console.error(error);
        this.alumnoService.textoCopiado = false;
      }

      this.abrirSnackBar();

    }

    abrirSnackBar(){ //funcion de snackBar angular material que muestra un componente por determinado tiempo
      this.snackBar.openFromComponent( SnackBarComponent, { duration: 4000 }); //Recibe de parametros el componente y duracion
    }

    elementoCopiado(): string{ //Funcion que pasa objeto alumno a string para usar datos
      
      const texto: string = 'Nombre: ' + this.alumno.nombre + ' ' + this.alumno.apePaterno + ' ' + this.alumno.apeMaterno
        + '\nExpediente: ' +  this.alumno.expediente
        + '\nCurp: ' + this.alumno.curp
        + '\nSexo: ' + this.alumno.genero
        + '\nCorreo: ' + this.alumno.correo
        + '\nGrupo: ' + this.alumno.grupo.grupo
        + '\nEstatus: ' + this.alumno.estatus.estatus;

        return texto;
    }
}
