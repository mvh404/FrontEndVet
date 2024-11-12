import { Routes } from '@angular/router';
import { FormularioVeterinariaComponent } from './formulario-veterinaria/formulario-veterinaria.component.spec';
import { FormularioPersonaComponent } from './formulario-personas/formulario-personas.component';

export const routes: Routes = [
  { path: 'formulario-veterinaria', component: FormularioVeterinariaComponent },
  { path: 'formulario-personas', component: FormularioPersonaComponent },
  { path: '', redirectTo: '/formulario-veterinaria', pathMatch: 'full' } // Redirige a una página inicial
];
