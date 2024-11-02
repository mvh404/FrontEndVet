import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-veterinaria',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-veterinaria.component.html',
  styleUrl: './formulario-veterinaria.component.css'
})
export class FormularioVeterinariaComponent {
  nombre: string = '';
  raza: string = '';
  edad: number | null = null;
}
