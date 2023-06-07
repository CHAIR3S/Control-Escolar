import { Grupo } from "./Grupo";
import { Materia } from "./Materia";
import { Profesor } from "./Profesor";


export class ProMatGru{

    id: number = 0;
    profesor: Profesor = new Profesor;
    materia: Materia = new Materia;
    grupo: Grupo = new Grupo;
    
}