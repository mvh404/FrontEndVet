import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-veterinaria',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-veterinaria.component.html',
  styleUrls: ['./formulario-veterinaria.component.css']
})
export class FormularioVeterinariaComponent {
  fecha: string = '';
  hora: string = '';
  paciente: string = '';
  medico: string = '';
  consultorio: number | null = null;

  // Arreglo para almacenar las citas registradas
  citas: { fecha: string; hora: string; paciente: string; medico: string; consultorio: number }[] = [];

  // Método para registrar la cita y agregarla al arreglo
  registrarCita() {
    if (this.fecha && this.hora && this.paciente && this.medico && this.consultorio !== null) {
      // Agrega la nueva cita al arreglo
      this.citas.push({
        fecha: this.fecha,
        hora: this.hora,
        paciente: this.paciente,
        medico: this.medico,
        consultorio: this.consultorio
      });

      // Limpia los campos del formulario
      this.fecha = '';
      this.hora = '';
      this.paciente = '';
      this.medico = '';
      this.consultorio = null;

      console.log('Cita registrada');
    }
  }
}
