import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioVeterinariaComponent } from "./formulario-veterinaria/formulario-veterinaria.component.spec";
import { FormularioPersonaComponent } from "./formulario-personas/formulario-personas.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioVeterinariaComponent, FormularioPersonaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formularioVeterinaria';
}
