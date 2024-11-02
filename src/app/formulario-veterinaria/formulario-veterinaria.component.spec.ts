import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-veterinaria',
  templateUrl: './formulario-veterinaria.component.html',
  styleUrls: ['./formulario-veterinaria.component.css']
})
export class FormularioVeterinariaComponent {
nombre: any;
raza: any;
edad: any;
  onSubmit() {
    console.log('Formulario enviado');
  }
}
