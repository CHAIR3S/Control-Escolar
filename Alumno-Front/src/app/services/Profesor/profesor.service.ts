import { Injectable } from '@angular/core';
import { Profesor } from 'src/app/model/Profesor';
import { HttpClient, HttpHeaders , HttpRequest,  HttpEvent, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { ResponseGC } from "../../model/ResponseGC";

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {


  [x: string]: any;
  private readonly API_URL = "assets/data/clients.json";
  dialogData: any;
  dataChange: BehaviorSubject<Profesor[]> = new BehaviorSubject<Profesor[]>([]);
  isTblLoading = true;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }


  public consultarTodos():Observable<ResponseGC<Profesor>>{
    const url = "http://localhost:8081/profesor/consultarTodos";
    
    return this.http.get<ResponseGC<Profesor>>(url,
      {headers: new HttpHeaders().append("Content-Type","application/json")});
  }

  public consultarProfesorFiltro(clave: string): Observable<ResponseGC<Profesor>>{
    const url = 'http://localhost:8081/profesor/buscarProfesorFiltro/' + clave;

    return this.http.get<ResponseGC<Profesor>>(url);
  }
}
