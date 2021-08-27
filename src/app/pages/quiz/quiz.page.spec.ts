import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPage } from './quiz.page';

describe('QuizPage', () => {
  let component: QuizPage;
  let fixture: ComponentFixture<QuizPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
