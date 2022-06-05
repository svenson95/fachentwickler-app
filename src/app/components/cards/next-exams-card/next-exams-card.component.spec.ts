import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextExamsCardComponent } from './next-exams-card.component';

describe('NextExamsCardComponent', () => {
  let component: NextExamsCardComponent;
  let fixture: ComponentFixture<NextExamsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NextExamsCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextExamsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
