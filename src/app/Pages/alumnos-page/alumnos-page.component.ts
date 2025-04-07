import { Component, ViewChild } from '@angular/core';
import { AddAlumnoComponent } from "../../Components/Alumnos/add-alumno/add-alumno.component";
import { VerAlumnosComponent } from "../../Components/Alumnos/ver-alumnos/ver-alumnos.component";

import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { AlumnoInterface } from '../../Interface/AlumnoInterface';

@Component({
  selector: 'app-alumnos-page',
  standalone: true,
  imports: [AddAlumnoComponent, VerAlumnosComponent, MatNativeDateModule, MatDatepickerModule, MatDialogModule],
  templateUrl: './alumnos-page.component.html',
  styleUrl: './alumnos-page.component.css'
})
export class AlumnosPageComponent {

  @ViewChild(VerAlumnosComponent) verAlumnosComponent!: VerAlumnosComponent;

  onAlumnoAgregado(): void {
   this.verAlumnosComponent.cargarAlumnos()
  }

}
