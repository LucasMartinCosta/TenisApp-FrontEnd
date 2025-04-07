import { Component } from '@angular/core';
import { AddPrecioComponent } from "../../Components/Precio/add-precio/add-precio.component";
import { SeleccionarAlumnosComponent } from "../../Components/Alumnos/seleccionar-alumnos/seleccionar-alumnos.component";

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@Component({
  selector: 'app-administracion-page',
  standalone: true,
  imports: [ReactiveFormsModule, MatAutocompleteModule, AddPrecioComponent, SeleccionarAlumnosComponent,MatFormFieldModule, MatListModule, MatCheckboxModule, MatChipsModule],
  templateUrl: './administracion-page.component.html',
  styleUrl: './administracion-page.component.css'
})
export class AdministracionPageComponent {

}
