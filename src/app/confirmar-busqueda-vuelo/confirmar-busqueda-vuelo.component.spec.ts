import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarBusquedaVueloComponent } from './confirmar-busqueda-vuelo.component';

describe('ConfirmarBusquedaVueloComponent', () => {
  let component: ConfirmarBusquedaVueloComponent;
  let fixture: ComponentFixture<ConfirmarBusquedaVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarBusquedaVueloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarBusquedaVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
