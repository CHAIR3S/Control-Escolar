import { Ciclo } from './Ciclo';
import { Status } from './Status'


export class Grupo{

    id: number = 0;
    grupo: string = '';
    estatus: Status = new Status;
    ciclo: Ciclo = new Ciclo;

}