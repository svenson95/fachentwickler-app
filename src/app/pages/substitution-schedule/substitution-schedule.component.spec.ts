import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstitutionScheduleComponent } from './substitution-schedule.component';

describe('SubstitutionScheduleComponent', () => {
  let component: SubstitutionScheduleComponent;
  let fixture: ComponentFixture<SubstitutionScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubstitutionScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstitutionScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
