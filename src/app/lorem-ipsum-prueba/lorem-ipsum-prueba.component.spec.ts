import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremIpsumPruebaComponent } from './lorem-ipsum-prueba.component';

describe('LoremIpsumPruebaComponent', () => {
  let component: LoremIpsumPruebaComponent;
  let fixture: ComponentFixture<LoremIpsumPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoremIpsumPruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoremIpsumPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
