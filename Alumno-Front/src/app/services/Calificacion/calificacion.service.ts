import { Calificacion } from 'src/app/model/Calificacion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResponseGC } from 'src/app/model/ResponseGC';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  [x: string]: any;
  private readonly API_URL = "assets/data/clients.json";
  dialogData: any;
  dataChange: BehaviorSubject<Calificacion[]> = new BehaviorSubject<Calificacion[]>([]);
  isTblLoading = true;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }


  getDialogData() {
    return this.dialogData;
  }

  public consultarTodos():Observable<ResponseGC<Calificacion>>{
    const url = "http://localhost:8081/calificacion/consultarTodos";
    
    return this.http.get<ResponseGC<Calificacion>>(url,
      {headers: new HttpHeaders().append("Content-Type","application/json")});
  }

  public buscarCalificacionAlumno(idAlumno: number): Observable<ResponseGC<Calificacion>> {
    const url = "http://localhost:8081/calificacion/buscarCalificacionAlumno/" + idAlumno; 
                                  //Url y body: objeto que contiene de lo que queremos crear

    const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG0yQGFkbWluLmVkdS5teCIsImV4cCI6MTY5MjE0NTAyMCwicm9sIjp7ImlkIjoxLCJyb2wiOiJBZG1pbmlzdHJhZG9yIn19.uryAzenJ1Qcba9aN2LorquSBTyyiHOJ3XpT-huVwudw');

    return this.http.get<ResponseGC<Calificacion>>(url, {headers});
  }

}


