import { Component, ViewChild } from '@angular/core';
import { AddReservaComponent } from "../../Components/Reservas/add-reserva/add-reserva.component";
import { ReservasCalendarioComponent } from "../../Components/reservas-calendario/reservas-calendario.component";
import { ReservasDiaCalendarioComponent } from "../../Components/reservas-dia-calendario/reservas-dia-calendario.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AddReservaComponent, ReservasCalendarioComponent, ReservasDiaCalendarioComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

   @ViewChild(ReservasCalendarioComponent) reservasCalendario!: ReservasCalendarioComponent;
   @ViewChild(ReservasDiaCalendarioComponent) reservasCalendarioDia!: ReservasDiaCalendarioComponent;
  
    onModificacionReserva(): void {
     this.reservasCalendario.cargarReservas();
     this.reservasCalendarioDia.cargarReservas();
    }

}
