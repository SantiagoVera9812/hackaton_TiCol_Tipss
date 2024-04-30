import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosDeUsuarioComponent } from './vuelos-de-usuario.component';

describe('VuelosDeUsuarioComponent', () => {
  let component: VuelosDeUsuarioComponent;
  let fixture: ComponentFixture<VuelosDeUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuelosDeUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VuelosDeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
