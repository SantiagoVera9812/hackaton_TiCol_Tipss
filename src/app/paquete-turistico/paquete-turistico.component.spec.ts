import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteTuristicoComponent } from './paquete-turistico.component';

describe('PaqueteTuristicoComponent', () => {
  let component: PaqueteTuristicoComponent;
  let fixture: ComponentFixture<PaqueteTuristicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaqueteTuristicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaqueteTuristicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
