import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SillasSalvaescalerasComponent } from './sillas-salvaescaleras.component';

describe('SillasSalvaescalerasComponent', () => {
  let component: SillasSalvaescalerasComponent;
  let fixture: ComponentFixture<SillasSalvaescalerasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SillasSalvaescalerasComponent]
    });
    fixture = TestBed.createComponent(SillasSalvaescalerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
