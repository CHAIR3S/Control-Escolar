import { Grupo } from './Grupo';
import { Status } from './Status'


export class Alumno{
    
    id: number = 0;
	expediente: string = '';
	nombre: string = '';
	apePaterno: string = '';
	apeMaterno: string = '';
	curp: string = '';
	genero: string = '';
    correo: string = '';
    grupo: Grupo = new Grupo;
    estatus: Status = new Status;

}