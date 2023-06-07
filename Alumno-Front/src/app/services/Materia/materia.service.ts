import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders , HttpRequest,  HttpEvent, HttpParams} from '@angular/common/http';
// import { UnsubscribeOnDestroyAdapter } from "src/app/toUse/UnsubscribeOnDestroyAdapter";
import { catchError, retry, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Materia } from 'src/app/model/Materia';
import { ResponseGC } from 'src/app/model/ResponseGC';
import { MateriaDto } from 'src/app/DTO/MateriaDTO';
import { MateriaAndFiltroDto } from 'src/app/DTO/MateriaAndFiltroDTO';
import { MateriaFiltroDto } from 'src/app/DTO/MateriaFiltroDTO';


@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  [x: string]: any;
  private readonly API_URL = "assets/data/clients.json";
  dialogData: any;
  dataChange: BehaviorSubject<Materia[]> = new BehaviorSubject<Materia[]>([]);
  isTblLoading = true;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }
    
  getDialogData() {
    return this.dialogData;
  }

  public consultarTodos():Observable<ResponseGC<Materia>>{
    const url = "http://localhost:8081/materia/consultarTodos";
    
    return this.http.get<ResponseGC<Materia>>(url,
      {headers: new HttpHeaders().append("Content-Type","application/json")});
  }

  buscarMateriaPorId(idMateria: number): Observable<ResponseGC<Materia>> {
    const url = "http://localhost:8081/materia/buscarMateriaPorId/" +  idMateria;

    return this.http.get<ResponseGC<Materia>>(url);
  }
  
  guardarMateria(materia: MateriaDto): Observable<ResponseGC<Materia>> {
    const url = "http://localhost:8081/materia/guardarMateria"; 
                                  //Url y body: objeto que contiene de lo que queremos crear
    return this.http.post<ResponseGC<Materia>>(url,materia)
  }

  actualizarMateria(upToDate: MateriaAndFiltroDto):Observable<ResponseGC<Materia>>{    
    const url = 'http://localhost:8081/materia/actualizarMateria';

    return this.http.put<ResponseGC<Materia>>(url,upToDate)
  }
  
  borrarMateriaId(idMateria: number): Observable<number> {
    const url = "http://localhost:8081/materia/borrarMateriaId/" +  idMateria

    return this.http.delete<number>(url);
  }

  buscarMateriaFiltro(filtro: MateriaFiltroDto): Observable<ResponseGC<Materia>> {
    const url = "http://localhost:8081/materia/buscarMateriaFiltro"; 
                                  //Url y body: objeto que contiene de lo que queremos crear
    return this.http.post<ResponseGC<Materia>>(url,filtro)
  }

  buscarMateriasPorIds(materiasIds: number[]): Observable<ResponseGC<Materia>> {
    const url = "http://localhost:8081/materia/buscarMateriasIds"; 
                                  //Url y body: objeto que contiene de lo que queremos crear
    return this.http.post<ResponseGC<Materia>>(url,materiasIds)
  }

  get data(): Materia[] {
    return this.dataChange.value;
  }
}
