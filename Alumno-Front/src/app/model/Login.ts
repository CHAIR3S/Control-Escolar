import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";
import { Rol } from "./Rol";


export class Login{

    id: number = 0;
    correo: String = '';
    contraseña: String= '';
    rol: Rol = new Rol;
    profesor: Profesor = new Profesor;
    alumno: Alumno = new Alumno;
    
}