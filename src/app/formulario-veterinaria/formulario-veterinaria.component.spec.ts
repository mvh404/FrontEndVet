import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-veterinaria',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-veterinaria.component.html',
  styleUrls: ['./formulario-veterinaria.component.css']
})
export class FormularioVeterinariaComponent {
  fecha: string = '';
  hora: string = '';
  paciente: string = '';
  medico: string = '';
  consultorio: number | null = null;
  descripcion: string = '';

  citas: { fecha: string; hora: string; paciente: string; medico: string; consultorio: number; descripcion: string }[] = [];
  constructor(private router: Router) {}

  // Función para validar y formatear la hora
  formatHora(hora: string): string {
    const timePattern = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9]):([0-5]?[0-9])$/;
    if (timePattern.test(hora)) {
      return hora;  // Si la hora ya es válida, la devuelve tal cual
    } else {
      const date = new Date(`1970-01-01T${hora}:00Z`);
      if (isNaN(date.getTime())) {
        throw new Error("Hora no válida");
      }
      return date.toISOString().substr(11, 8);  // Formato HH:mm:ss
    }
  }

  navegarOtraPagina() {
    this.router.navigate(['/formulario-personas']); // Reemplaza '/otra-pagina' con la ruta deseada
  }
  

  async registrarCita() {
    const url = "http://localhost:1234/citas";

    if (this.fecha && this.hora && this.paciente && this.medico && this.consultorio !== null && this.descripcion) {
      try {
        // Validamos y formateamos la hora antes de enviarla
        const horaFormateada = this.formatHora(this.hora);
        
        const nuevaCita = {
          fecha: this.fecha,
          hora: horaFormateada,
          paciente: this.paciente,
          medico: this.medico,
          consultorio: this.consultorio,
          descripcion: this.descripcion
        };

        console.log("Enviando cita:", nuevaCita);

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            fecha: this.fecha,
            hora: nuevaCita.hora,
            paciente_id: this.paciente,     
            medico_id: this.medico,         
            consultorio_id: this.consultorio.toString(), 
            descripcion: this.descripcion   
          })
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error en la solicitud: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        console.log("Respuesta del servidor:", data);

        // Agregar la nueva cita al arreglo de citas
        this.citas.push(nuevaCita);

        // Limpiar los campos del formulario
        this.fecha = '';
        this.hora = '';
        this.paciente = '';
        this.medico = '';
        this.consultorio = null;
        this.descripcion = ''; // Limpiar la descripción

        console.log('Cita registrada con éxito');
      } catch (error) {
        console.error("Hubo un problema con el POST:", error);
      }
    }
  }
}
