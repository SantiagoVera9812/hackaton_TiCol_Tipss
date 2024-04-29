import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarVuelosEncontradosComponent } from './seleccionar-vuelos-encontrados.component';

describe('SeleccionarVuelosEncontradosComponent', () => {
  let component: SeleccionarVuelosEncontradosComponent;
  let fixture: ComponentFixture<SeleccionarVuelosEncontradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionarVuelosEncontradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionarVuelosEncontradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
