import { Component, EventEmitter, Output } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {FormControl, ReactiveFormsModule } from '@angular/forms';
import {AlumnoInterface } from '../../../Interface/AlumnoInterface';
import {AlumnosService } from '../../../Services/alumnos.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';




@Component({
  selector: 'app-seleccionar-alumnos',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule, MatListModule, MatCheckboxModule, MatChipsModule, MatAutocompleteModule],
  templateUrl: './seleccionar-alumnos.component.html',
  styleUrl: './seleccionar-alumnos.component.css'
})
export class SeleccionarAlumnosComponent {

  alumnos: AlumnoInterface[] = [];

  alumnosFiltrados: AlumnoInterface[] = [];
  alumnosSeleccionados: AlumnoInterface[] = [];
  busqueda: string = '';

  alumnosControl = new FormControl('');

  @Output() alumnosCambiaron = new EventEmitter<AlumnoInterface[]>(); 

  constructor(private alumnoService: AlumnosService) {}

  ngOnInit() {
    this.alumnoService.getAlumnos().subscribe({
      next: (alumnos) => {
        this.alumnos = alumnos;
        this.alumnosFiltrados = alumnos;
      },
      error: (err) => console.error('Error al cargar alumnos', err),
    });
  }

  seleccionarAlumno(alumno: AlumnoInterface) {
    if (this.alumnoSeleccionado(alumno)) {
      this.alumnosSeleccionados = this.alumnosSeleccionados.filter(a => a.id !== alumno.id);
    } else {
      this.alumnosSeleccionados.push(alumno);
    }
    this.alumnosCambiaron.emit(this.alumnosSeleccionados); 
  }

  quitarAlumno(alumno: AlumnoInterface) {
    this.alumnosSeleccionados = this.alumnosSeleccionados.filter(a => a.id !== alumno.id);
    this.alumnosCambiaron.emit(this.alumnosSeleccionados);
  }

  alumnoSeleccionado(alumno: AlumnoInterface): boolean {
    return this.alumnosSeleccionados.some(a => a.id === alumno.id);
  }

  filtrarAlumnos() {
    this.alumnosFiltrados = this.alumnos.filter(alumno =>
      alumno.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

}
