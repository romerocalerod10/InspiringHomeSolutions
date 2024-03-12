import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCatalogoComponent } from './formulario-catalogo.component';

describe('FormularioCatalogoComponent', () => {
  let component: FormularioCatalogoComponent;
  let fixture: ComponentFixture<FormularioCatalogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioCatalogoComponent]
    });
    fixture = TestBed.createComponent(FormularioCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
