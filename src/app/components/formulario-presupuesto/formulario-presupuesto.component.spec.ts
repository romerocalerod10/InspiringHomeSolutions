import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPresupuestoComponent } from './formulario-presupuesto.component';

describe('FormularioPresupuestoComponent', () => {
  let component: FormularioPresupuestoComponent;
  let fixture: ComponentFixture<FormularioPresupuestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioPresupuestoComponent]
    });
    fixture = TestBed.createComponent(FormularioPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
