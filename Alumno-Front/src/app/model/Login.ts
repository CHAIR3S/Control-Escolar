import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";
import { Rol } from "./Rol";


export class Login{

    pk_login: number;
    txt_password: String;
    fk_rol: Rol;
    fk_profesor: Profesor;
    fk_alumno: Alumno;
    
}