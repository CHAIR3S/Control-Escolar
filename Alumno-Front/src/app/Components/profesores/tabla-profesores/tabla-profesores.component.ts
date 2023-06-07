
import { Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserData } from 'src/app/model/UserData';
import { ProMatGruService } from 'src/app/services/ProMatGru/pro-mat-gru.service';
import { ProMatGru } from 'src/app/model/ProMatGru';


@Component({
  selector: 'app-tabla-profesores',
  templateUrl: './tabla-profesores.component.html',
  styleUrls: ['./tabla-profesores.component.scss']
})
export class TablaProfesoresComponent{

  displayedColumns: string[] = ['id', 'profesor', 'materia', 'grupo'];
  arrayProMatGru: ProMatGru[] = new Array();
  arrayUserData: UserData[] = new Array();
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public proMatGruService: ProMatGruService
  ) {

    this.consultarProfesores();

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.arrayUserData);

    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  consultarProfesores(){
    this.proMatGruService.consultarTodos().subscribe(ResponseGC => {
      this.arrayProMatGru = ResponseGC.list

      for(let i: number = 0; i<this.arrayProMatGru.length; i++){
        
        let userData: UserData = new UserData;

        if( this.arrayProMatGru[i].profesor != null ){
          if( this.arrayProMatGru[i].profesor.nombre != null ){
            let nombre: string = this.arrayProMatGru[i].profesor.nombre + " " + this.arrayProMatGru[i].profesor.apePaterno + " " + this.arrayProMatGru[i].profesor.apeMaterno;
  
            userData.profesor = nombre;
          }
  
          if( this.arrayProMatGru[i].profesor.id != null ){
            userData.id = String(this.arrayProMatGru[i].profesor.id);
          }
        }

        if( this.arrayProMatGru[i].materia != null && this.arrayProMatGru[i].materia.nombre != null){

          userData.materia = this.arrayProMatGru[i].materia.nombre;
        }

        if( this.arrayProMatGru[i].grupo != null && this.arrayProMatGru[i].grupo.grupo != null ){
          userData.grupo = this.arrayProMatGru[i].grupo.grupo;
        }
        

        this.arrayUserData.push(userData);
      }


      setTimeout( () => {this.dataSource.paginator = this.paginator;}, 5)
      
    },
    error =>{ console.error(error)})
    
  }
}
