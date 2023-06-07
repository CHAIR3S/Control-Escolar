import { Alumno } from './Alumno';
import { Materia } from './Materia';


export class Calificacion{

    id: number = 0;
    cal1: number = 0;
    cal2: number = 0;
    cal3: number = 0;
    alumno: Alumno = new Alumno;
    materia: Materia = new Materia;
    promedio: number = 0;//promedioFuncion(this.cal1, this.cal2, this.cal3);

}

