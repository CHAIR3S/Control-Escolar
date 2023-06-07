import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpEvent,
  HttpParams,
} from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Grupo } from '../../model/Grupo';
import { ResponseGC } from '../../model/ResponseGC';
import { AlumnoAndFiltroDto } from 'src/app/DTO/AlumnoAndFiltroDTO';
import { Ciclo } from '../../model/Ciclo';
// import { UnsubscribeOnDestroyAdapter } from 'src/app/toUse/UnsubscribeOnDestroyAdapter';
import { GrupoFiltroDto } from 'src/app/DTO/GrupoFiltroDTO';

@Injectable({
  providedIn: 'root',
})
export class GrupoService {

  grupos: Grupo[] = new Array();

  constructor(private http: HttpClient) {

  }

  consultarTodos(): Observable<ResponseGC<Grupo>> {
    const url = 'http://localhost:8081/grupo/consultarTodos';

    return this.http.get<ResponseGC<Grupo>>(url, {
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  buscarGrupoFiltro(filtro: GrupoFiltroDto): Observable<ResponseGC<Grupo>> {
    const url = 'http://localhost:8081/grupo/buscarGrupoFiltro';
    //Url y body: objeto que contiene de lo que queremos crear
    return this.http.post<ResponseGC<Grupo>>(url, filtro);
  }

  
}
