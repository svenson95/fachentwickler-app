import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstitutionSchedulePage } from './substitution-schedule.page';

describe('SubstitutionSchedulePage', () => {
  let component: SubstitutionSchedulePage;
  let fixture: ComponentFixture<SubstitutionSchedulePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubstitutionSchedulePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstitutionSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
