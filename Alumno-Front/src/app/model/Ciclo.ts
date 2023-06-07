import { Estatus } from './Estatus';
import { Periodo } from './Periodo';
import { Status } from './Status'

export class Ciclo{

    id: number = 0;
    clave: String = '';
    ciclo: String = '';
    periodo: Periodo = new Periodo;
    fechaInicio: Date = new Date;
    fechaFin: Date = new Date;
    estatus: Estatus = new Estatus;

}