import { AlumnoFiltroDto } from './../../../DTO/AlumnoFiltroDTO';
import { AlumnoDto } from './../../../DTO/AlumnoDTO';
import { FormControl } from '@angular/forms';
import { GrupoService } from './../../../services/Grupo/grupo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Grupo } from 'src/app/model/Grupo';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/services/Alumno/alumno.service';
import { Alumno } from 'src/app/model/Alumno';
import { AlumnoAndFiltroDto } from 'src/app/DTO/AlumnoAndFiltroDTO';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent{

  form: FormGroup;
  filtro: AlumnoFiltroDto = new AlumnoFiltroDto(); 
  update: boolean = this.alumnoService.editOrUpdate;
  alumnoAct: Alumno = new Alumno();
  

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    public grupoService: GrupoService,
    private alumnoService: AlumnoService) {

      this.form = this.fb.group({
        apePaterno: ['', Validators.required],
        apeMaterno: ['', Validators.required],
        nombre: ['', Validators.required],
        correo: ['', Validators.email],
        curp: [''],
        expediente: ['', Validators.required],
        genero: [''],
        estatus: ['', Validators.required],
        grupo: ['', Validators.required],
      });
      
      if(this.update == true){
        this.filtro.correo = this.alumnoService.alumno.correo;
        this.filtro.curp = this.alumnoService.alumno.curp;
        this.filtro.expediente = this.alumnoService.alumno.expediente;
      }

      this.form.patchValue({
        apePaterno: this.alumnoService.alumno.apePaterno || '',
        apeMaterno: this.alumnoService.alumno.apeMaterno || '',
        nombre: this.alumnoService.alumno.nombre || '',
        correo: this.alumnoService.alumno.correo || '',
        curp: this.alumnoService.alumno.curp || '',
        expediente: this.alumnoService.alumno.expediente || '',
        genero: this.alumnoService.alumno.genero || '',
        estatus: String(this.alumnoService.alumno.estatus.id) || '',
        grupo: this.alumnoService.alumno.grupo.id || '',
      });

    }


    onTextKeyup(event: any) {
      event.target.value = event.target.value.toUpperCase();
    }

    aceptar(){

      const alumno = new AlumnoDto;
      const activoInactivo = (numero: any) => {
        if(numero == 1)
          return 'Inactivo'
        else
          return 'Activo'
      }

      alumno.apePaterno = this.form.value.apePaterno;
      alumno.apeMaterno = this.form.value.apeMaterno;
      alumno.correo = this.form.value.correo;
      alumno.curp = this.form.value.curp.toUpperCase();
      alumno.estatus = this.form.value.estatus;
      alumno.expediente = this.form.value.expediente.toUpperCase();
      alumno.genero = this.form.value.genero;
      alumno.grupo = this.form.value.grupo;
      alumno.nombre = this.form.value.nombre;


      this.alumnoAct.id = this.alumnoService.alumno.id;
      this.alumnoAct.apeMaterno = alumno.apeMaterno;
      this.alumnoAct.apePaterno = alumno.apePaterno;
      this.alumnoAct.correo = alumno.correo;
      this.alumnoAct.curp = alumno.curp;
      this.alumnoAct.estatus.id = Number(alumno.estatus);
      this.alumnoAct.estatus.estatus = activoInactivo(alumno.estatus);
      this.alumnoAct.expediente = alumno.expediente;
      this.alumnoAct.genero = alumno.genero;
      this.alumnoAct.nombre = alumno.nombre;
      this.alumnoAct.grupo = this.grupoService.grupos.filter( (grupos) => {
        return grupos.id == Number(alumno.grupo);
      })[0];

      if(this.update){

        this.actualizar(alumno);
        
      }
      else
        this.guardar(alumno);



    }

    actualizar(alumno: AlumnoDto){

      const actualiceAlumno: AlumnoAndFiltroDto = new AlumnoAndFiltroDto();

      

      actualiceAlumno.alumnoUpdate = alumno;
      actualiceAlumno.filtro = this.filtro;

      this.alumnoService.actualizarAlumno(actualiceAlumno).subscribe( ResponseGC => {

        this.alumnoService.alumnoToArray();

        this.actualizarArreglo(this.alumnoAct);

        this.alumnoService.snackBarMessage = 'Alumno actualizado correctamente';

        this.alumnoService.abrirSnackBar();

        this.router.navigate(['init/admin']);


      },
      (error) => {
        console.error(error);

        this.alumnoService.snackBarMessage = 'No pudo actualizarse alumno';

        this.alumnoService.abrirSnackBar();

        this.router.navigate(['init/admin']);


      });


    }

    guardar(alumno: AlumnoDto){

      this.alumnoService.guardarAlumno(alumno).subscribe( ResponseGC => {

        if(this.alumnoService.arrayAlumnos.length > 1)
          this.alumnoService.loadAlumnos = true;

        this.alumnoService.snackBarMessage = 'Alumno guardado correctamente';

        this.alumnoService.abrirSnackBar();

        this.router.navigate(['init/admin']);

      
      },
      (error) => {

        this.alumnoService.snackBarMessage = 'No pudo guardarse alumno';

        this.alumnoService.abrirSnackBar();


      }
      );


      
    }

    funcion(): string{

      if(this.update)
        return 'Actualizar'
      else
        return 'Guardar'
    }

    actualizarArreglo(alumno: Alumno){  //Recibe alumno que se actualizo o guardo y lo mete al array para actualizar tabla
      if(this.alumnoService.arrayAlumnos.length > 0){
        if(this.update){
          let contador: number = 0;
  
          while(this.alumnoService.arrayAlumnos[contador].id != alumno.id){
            contador++
          }
  
          if(this.alumnoService.arrayAlumnos[contador].id == alumno.id){
            this.alumnoService.arrayAlumnos[contador] = alumno;
          }

        }
        else
        {
          if(this.alumnoService.arrayAlumnos.length > 1)
            this.alumnoService.arrayAlumnos.push(alumno);
        }

        this.alumnoService.alumnoToArray();

      }
    }

    cancelar(){
      this.router.navigate(['init/admin']);
    }
}

