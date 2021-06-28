import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStateComponent } from './button-state.component';

describe('ButtonStateComponent', () => {
  let component: ButtonStateComponent;
  let fixture: ComponentFixture<ButtonStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
