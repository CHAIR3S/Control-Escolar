import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

import { HttpClient, HttpHeaders , HttpRequest,  HttpEvent, HttpParams,HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';


import {Ciclo }from "../../model/Ciclo";
import {ResponseGC} from "../../model/ResponseGC";
import { CicloFiltroDto } from '../../DTO/CicloFiltroDTO';


@Injectable({
  providedIn: 'root'
})
export class CicloService {
  private readonly API_URL = "assets/data/clients.json";
  dialogData: any;
  dataChange: BehaviorSubject<Ciclo[]> = new BehaviorSubject<Ciclo[]>([]);
  isTblLoading = true;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  ciclo = new Ciclo();

  constructor(private http:HttpClient) {}
    
  getDialogData() {
    return this.dialogData;
  }

  public consultarTodos():Observable<ResponseGC<Ciclo>>{
    const url = "http://localhost:8081/ciclo/consultarTodos";
    
    return this.http.get<ResponseGC<Ciclo>>(url,
      {headers: new HttpHeaders().append("Content-Type","application/json")});
  }

  guardarCiclo(ciclo: Ciclo): Observable<ResponseGC<Ciclo>> {
    const url = "http://localhost:8081/ciclo/guardarCiclo"; 
                                  //Url y body: objeto que contiene de lo que queremos crear
    return this.http.post<ResponseGC<Ciclo>>(url,ciclo)
  }
  
  borrarCicloId(idCiclo: number): Observable<number> {
    const url = "http://localhost:8081/ciclo/borrarCicloId/" +  idCiclo

    return this.http.delete<number>(url);
  }

  buscarCicloFiltro(filtro: CicloFiltroDto): Observable<ResponseGC<Ciclo>> {
    const url = "http://localhost:8081/ciclo/buscarCicloFiltro"; 
                                  //Url y body: objeto que contiene de lo que queremos crear
    return this.http.post<ResponseGC<Ciclo>>(url,filtro)
  }

  get data(): Ciclo[] {
    return this.dataChange.value;
  }

}
