import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerIndicatorComponent } from './answer-indicator.component';

describe('AnswerIndicatorComponent', () => {
  let component: AnswerIndicatorComponent;
  let fixture: ComponentFixture<AnswerIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
