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
  nombre: string = '';
  raza: string = '';
  edad: number | null = null;

  // Arreglo para almacenar las mascotas registradas
  mascotas: { nombre: string; raza: string; edad: number }[] = [];

  // Método para registrar la mascota y agregarla al arreglo
  registrarMascota() {
    if (this.nombre && this.raza && this.edad !== null) {
      // Agrega la nueva mascota al arreglo
      this.mascotas.push({
        nombre: this.nombre,
        raza: this.raza,
        edad: this.edad
      });

      // Limpia los campos del formulario
      this.nombre = '';
      this.raza = '';
      this.edad = null;

      console.log('Mascota registrada');
    }
  }
}
