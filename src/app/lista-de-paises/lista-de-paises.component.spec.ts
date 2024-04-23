import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePaisesComponent } from './lista-de-paises.component';

describe('ListaDePaisesComponent', () => {
  let component: ListaDePaisesComponent;
  let fixture: ComponentFixture<ListaDePaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDePaisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDePaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
