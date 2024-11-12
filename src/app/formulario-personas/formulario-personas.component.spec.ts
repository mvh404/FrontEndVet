import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPersonaComponent } from './formulario-personas.component';

describe('FormularioPersonasComponent', () => {
  let component: FormularioPersonaComponent;
  let fixture: ComponentFixture<FormularioPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPersonaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
