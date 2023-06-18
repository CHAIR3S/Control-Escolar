import { OnInit } from '@angular/core';
import { ResponseGC } from './../../model/ResponseGC';
import { Router } from '@angular/router';
import { AlumnoFiltroDto } from './../../DTO/AlumnoFiltroDTO';
import { Alumno } from './../../model/Alumno';
import { AlumnoService } from 'src/app/services/Alumno/alumno.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';

import { Component, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnoData } from 'src/app/model/AlumnoData';
import { GrupoService } from 'src/app/services/Grupo/grupo.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss'],
})
export class AdministracionComponent implements OnInit{
  displayedColumns: string[] = [
    'expediente',
    'alumno',
    'estatus',
    'grupo',
    'options'
  ];
  load: boolean = false
  idUsuario: number = 0;
  
  dataSource!: MatTableDataSource<AlumnoData>;
  
  text: string = '';
  form: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private fb: FormBuilder, 
    public alumnoService: AlumnoService,
    private grupoService: GrupoService,
    private router: Router) {

    this.dataSource = new MatTableDataSource(this.alumnoService.alumnoArray);

    this.alumnoService.getEvent().subscribe(() => {
      this.aceptarBorrarAlumnoDialog()
    });

    this.form = this.fb.group({
      expediente: [''],
      correo: ['', Validators.email],
      curp: [''],
    });
    
    
  }

  ngOnInit(): void {
      this.consultarGrupos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onTextKeyup(event: any) {
    event.target.value = event.target.value.toUpperCase();
  }

  aceptarBorrarAlumnoDialog() {

    this.alumnoService.eliminarAlumno(this.idUsuario).subscribe( 
       () => {


         this.alumnoService.arrayAlumnos = this.borrarAlumnoArray(this.alumnoService.arrayAlumnos, this.idUsuario);

         this.alumnoService.alumnoToArray();

         setTimeout( () => {this.dataSource.paginator = this.paginator;}, 5)
         
       },
       (error) => {
         console.error(error);
       }
    );

    
    this.alumnoService.dialog = false;
  }

  editarAlumno(id: number){
    
    this.filtrarAlumno(id);

    this.alumnoService.editOrUpdate = true;

    this.router.navigate(['/init/edit']);

  }

  mostrarAlumno(id: number){
    
    this.filtrarAlumno(id);

    this.alumnoService.alumnoDialog = true;

  }

  filtrarAlumno(id: number){ //filtra el alumno al que se da click y lo guarda en var alumno de alumnoService

    let alumno: Alumno[] = this.alumnoService.arrayAlumnos.filter( (arrayAlumnos) => {
      return arrayAlumnos.id === id;
    });

    this.alumnoService.alumno = alumno[0];
  }

  borrarAlumnoArray(userArray: Alumno[], id: number){
    return userArray.filter((userArray) => userArray.id !== id);
  }

  resetForm(){
    this.form.reset();
  }

  borrarAlumnoDialog(id: number){

    this.alumnoService.dialog = true;
    
    this.idUsuario = id;
  }

  consultarAlumno(){

    this.load = true;

    this.alumnoService.alumnoArray.length = 0;
    this.dataSource.paginator = this.paginator;

    const alumno: AlumnoFiltroDto = new AlumnoFiltroDto;
    
    if(this.form.value.correo != null){
      alumno.correo = this.form.value.correo;
    }
    if(this.form.value.expediente != null ){

      alumno.expediente = this.form.value.expediente.toUpperCase();
    }
    if(this.form.value.curp != null ){
      alumno.curp = this.form.value.curp.toUpperCase();
    }

    this.alumnoService.buscarAlumnoFiltro(alumno).subscribe(
      (ResponseGC) => {
        
        this.alumnoService.arrayAlumnos = ResponseGC.list;

        this.alumnoService.alumnoToArray();

        setTimeout( () => {this.dataSource.paginator = this.paginator;}, 10)
        
        this.load = false;
      },
      (error) => {
        console.error(error);
      }
    );


  }

  consultarTodosAlumnos() {
  
    this.load = true;

    this.alumnoService.alumnoArray.length = 0;
    this.dataSource.paginator = this.paginator;

    this.alumnoService.consultarTodos().subscribe(
      (ResponseGC) => {

        this.alumnoService.arrayAlumnos = ResponseGC.list;

        this.alumnoService.alumnoToArray();

        setTimeout( () => {this.dataSource.paginator = this.paginator;}, 5)
        
        this.load = false;
      },
      (error) => {
        console.error(error);
      }
    );

    
  }

  consultarGrupos(){
    this.grupoService.consultarTodos().subscribe(
      (ResponseGC) => {
    
        this.grupoService.grupos = ResponseGC.list;
      },
      (error) => {
        console.error(error);
      }
    );

  }

  add() {

    const alumno: Alumno = new Alumno();

    this.alumnoService.alumno = alumno;

    this.alumnoService.editOrUpdate = false;

    this.router.navigate(['init/edit']);
  }


}


