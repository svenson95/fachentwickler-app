import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { PostQuiz } from '@models/post';
import { DataService } from '@services/data.service';

@Component({
  selector: 'fe-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
})
export class QuizCardComponent {
  @Input() public quiz: PostQuiz;

  @ViewChild('slideInWrapper') public slideInWrapper: ElementRef;

  public level = 0;

  public wrongAnswers = 0;

  public answer: number;

  public isCorrectAnswer: boolean;

  public end = false;

  public finishEmojis = ['⭐', '👍', '😐', '😲', '🤨', '😦', '😵'];

  constructor(public dataService: DataService) {}

  public checkAnswer(answer: number): void {
    if (this.answer !== undefined) return;
    this.answer = answer;

    if (this.isCorrect(answer)) {
      this.isCorrectAnswer = true;
    } else {
      this.isCorrectAnswer = false;
      this.wrongAnswers += 1;
    }

    setTimeout(() => {
      this.slideInWrapper.nativeElement.classList.add('slide-in-animation');
      setTimeout(() => {
        this.slideInWrapper.nativeElement.classList.remove('slide-in-animation');
      }, 400);

      this.answer = undefined;
      this.isCorrectAnswer = null;
      if (this.quiz.elements[this.level + 1] !== undefined) {
        this.level += 1;
      } else if (this.quiz.elements[this.level + 1] === undefined) {
        this.end = true;
      }
    }, 2000);
  }

  private isCorrect(answer): boolean {
    return this.quiz.elements[this.level].answer === answer;
  }

  public resetLevel(): void {
    this.answer = undefined;
    this.isCorrectAnswer = null;
    this.level = 0;
    this.wrongAnswers = 0;
    this.end = false;
  }
}
