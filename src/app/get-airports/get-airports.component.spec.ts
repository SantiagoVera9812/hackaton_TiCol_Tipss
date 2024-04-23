import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAirportsComponent } from './get-airports.component';

describe('GetAirportsComponent', () => {
  let component: GetAirportsComponent;
  let fixture: ComponentFixture<GetAirportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAirportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAirportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
