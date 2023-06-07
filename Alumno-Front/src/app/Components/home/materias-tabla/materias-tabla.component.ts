import { Component, OnInit, Input  } from '@angular/core';
import { Calificacion } from 'src/app/model/Calificacion';

@Component({
  selector: 'app-materias-tabla',
  templateUrl: './materias-tabla.component.html',
  styleUrls: ['./materias-tabla.component.scss']
})
export class MateriasTablaComponent implements OnInit {

  @Input() calificionesList: Array<Calificacion> = [];

  constructor() { }

  ngOnInit(): void {

    
  }

  
}


