import { Ciclo } from "./Ciclo";
import { Status } from "./Status";


export class Materia{

    clave: string = '';
    nombre: string = '';
    estatus: Status = new Status;
    ciclo: Ciclo = new Ciclo;
    
}