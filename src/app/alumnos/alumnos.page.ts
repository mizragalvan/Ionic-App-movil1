import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

interface Alumno {
  nombre: string;
  papa: string;
  mama: string;
  escuela: string;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  // alumnos: Alumno[] = [
  //   { nombre: 'Juan Pérez', papa: 'Carlos Pérez', mama: 'Ana López', escuela: 'Escuela Primaria A' },
  //   { nombre: 'María Gómez', papa: 'Luis Gómez', mama: 'Laura Sánchez', escuela: 'Escuela Primaria B' },
  //   // Agrega más alumnos según lo necesites
  // ];

  alumnos: any[] = [];
    padres: any[] = [];

  selectedAlumno: Alumno | null = null;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    alert("entra al servicio alumnos")
    this.apiService.getAlumnos().subscribe(response => {
      this.alumnos = response;
      console.log("respuesta alumnos: ",this.alumnos);
      console.log("respuesta alumnos: ",response);
      
  });

  this.apiService.getPadres().subscribe(response => {
      this.padres = response;
      console.log("respuesta alumnos: ",this.padres);
      console.log("respuesta alumnos: ",response);
  });
  }

  // selectAlumno(alumno: Alumno) {
  //   this.selectedAlumno = alumno;
  // }
}