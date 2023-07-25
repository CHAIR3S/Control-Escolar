import { CalificacionService } from './../../services/Calificacion/calificacion.service';
import { Alumno } from '../../model/Alumno';
import { AlumnoService } from '../../services/Alumno/alumno.service'
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ResponseGC } from '../../model/ResponseGC';
import { Calificacion } from 'src/app/model/Calificacion';
import { LoginService } from 'src/app/services/Login/login.service';


@Component({
  selector: 'app-alumnos-data',
  templateUrl: './alumnos-data.component.html',
  styleUrls: ['./alumnos-data.component.scss']
})
export class AlumnosDataComponent implements OnInit{

  response: ResponseGC<Alumno> = new ResponseGC();
  calificaciones: Array <Calificacion> = new Array;
  alumno: Alumno = new Alumno;
  nombre: String = '';
  mostrar: boolean = false;

  public id: any;


  constructor(
    private route:ActivatedRoute,
    public alumnoService: AlumnoService,
    private calificacionService: CalificacionService,
    private loginService: LoginService) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe( (paramMap: any) => {
      let idAlumno: number;
      const {params} = paramMap;
      idAlumno = params.id;

     this.alumno = this.loginService.getUser().alumno;

     this.consultarCalificacionesAlumno(idAlumno);

    })
    

  }

  // consultarAlumnoPorId(idAlumno: number) {
  //   this.alumnoService.consultarAlumnoPorID(idAlumno).subscribe( ResponseGC => {
  //     this.alumno = ResponseGC.data;
  //     this.nombre = this.alumno.nombre;
  //     this.alumnoService.nombreUsuario = this.nombre;
  //   },
  //   error=>{console.error(error)}
    
  //   );

    
  // }

  consultarCalificacionesAlumno(idAlumno: number){
    this.calificacionService.buscarCalificacionAlumno(idAlumno).subscribe( ResponseGC => {
      this.calificaciones = ResponseGC.list;

      if(this.calificaciones != null){
        for(let contador = 0; contador<this.calificaciones.length; contador++){
          let cal1, cal2, cal3;
          cal1 = this.calificaciones[contador].cal1;
          cal2 = this.calificaciones[contador].cal2;
          cal3 = this.calificaciones[contador].cal3;
          this.calificaciones[contador].promedio =  this.promedioFuncion(cal1, cal2, cal3);
        }
      }
      
      
      this.mostrar = true;
    },
    error =>{ console.error(error)}
    );
  }

  promedioFuncion = (cal1: number, cal2: number, cal3: number) => Number(((cal1 + cal2 + cal3)/3).toFixed(2));




}
