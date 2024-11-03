import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioVeterinariaComponent } from "./formulario-veterinaria/formulario-veterinaria.component.spec";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioVeterinariaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formularioVeterinaria';
}
