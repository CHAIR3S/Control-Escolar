import { EventEmitter, Injectable, Output } from '@angular/core';

import { HttpClient, HttpHeaders , HttpRequest,  HttpEvent, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { ProMatGru } from 'src/app/model/ProMatGru';
import { ResponseGC } from "../../model/ResponseGC";
import { AlumnoFiltroDto } from '../../DTO/AlumnoFiltroDTO';
import { AlumnoDto } from '../../DTO/AlumnoDTO';
import { AlumnoAndFiltroDto } from 'src/app/DTO/AlumnoAndFiltroDTO';

@Injectable({
  providedIn: 'root'
})
export class ProMatGruService {

  isTblLoading = true;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }


  public consultarTodos():Observable<ResponseGC<ProMatGru>>{
    const url = "http://localhost:8081/proMatGru/consultarTodos";
    
    return this.http.get<ResponseGC<ProMatGru>>(url,
      {headers: new HttpHeaders().append("Content-Type","application/json")});
  }
}
