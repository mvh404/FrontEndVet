import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioVeterinariaComponent } from "./formulario-veterinaria/formulario-veterinaria.component.spec";
import { FormularioPersonaComponent } from "./formulario-personas/formulario-personas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioVeterinariaComponent, FormularioPersonaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corregido el nombre styleUrl -> styleUrls
})
export class AppComponent {
  title = 'formularioVeterinaria';
}
