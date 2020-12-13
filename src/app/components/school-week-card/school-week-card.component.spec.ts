import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolWeekCardComponent } from './school-week-card.component';

describe('SchoolWeekCardComponent', () => {
  let component: SchoolWeekCardComponent;
  let fixture: ComponentFixture<SchoolWeekCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolWeekCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolWeekCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
