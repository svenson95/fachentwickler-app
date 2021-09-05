import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateButtonComponent } from './state-button.component';

describe('StateButtonComponent', () => {
  let component: StateButtonComponent;
  let fixture: ComponentFixture<StateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
