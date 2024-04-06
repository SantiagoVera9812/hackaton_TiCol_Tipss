import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarHeaderComponent } from './tool-bar-header.component';

describe('ToolBarHeaderComponent', () => {
  let component: ToolBarHeaderComponent;
  let fixture: ComponentFixture<ToolBarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolBarHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolBarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
