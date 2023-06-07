import { Periodo } from "../model/Periodo";


export class CicloFiltroDto{
    txt_clave?: string;
    txt_desc_ciclo?: string;
    fk_periodo?: Periodo;
}