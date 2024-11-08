import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-persona',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-personas.component.html',
  styleUrls: ['./formulario-personas.component.css']
})
export class FormularioPersonaComponent {
  id: string = '';
  nombre: string = '';
  apellido: string = '';
  fecha_nacimiento: string = '';
  telefono: string = '';
  email: string = '';

  personas: { id: string; nombre: string; apellido: string; fecha_nacimiento: string; telefono: string; email: string }[] = [];

  async registrarPersona() {
    const url = "http://localhost:1234/persona";

    if (this.id && this.nombre && this.apellido && this.fecha_nacimiento && this.email) {
      try {
        const nuevaPersona = {
          id: this.id,
          nombre: this.nombre,
          apellido: this.apellido,
          fecha_nacimiento: this.fecha_nacimiento,
          telefono: this.telefono || '',  // Si el teléfono no es proporcionado, se deja como null
          email: this.email
        };

        console.log("Enviando persona:", nuevaPersona);

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(nuevaPersona)
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error en la solicitud: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        console.log("Respuesta del servidor:", data);

        // Agregar la nueva persona al arreglo de personas
        this.personas.push(nuevaPersona);

        // Limpiar los campos del formulario
        this.id = '';
        this.nombre = '';
        this.apellido = '';
        this.fecha_nacimiento = '';
        this.telefono = '';
        this.email = '';

        console.log('Persona registrada con éxito');
      } catch (error) {
        console.error("Hubo un problema con el POST:", error);
      }
    }
  }
}
