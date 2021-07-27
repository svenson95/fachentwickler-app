import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { DataService } from '../../../services/data/data.service';
import { Quiz } from '../../../models/quiz';

@Component({
  selector: 'fe-quiz-card',
  templateUrl: './quiz-card.component.html'
})
export class QuizCardComponent implements OnInit {

  @Input() quiz: Quiz;

  level = 0;
  wrongAnswers = 0;
  answer: number;
  isCorrectAnswer: boolean;
  end = false;

  @ViewChild('slideInWrapper') slideInWrapper: ElementRef;

  finishTexts = [
    'Du hast das Quiz ohne Fehler abgeschlossen',
    'Du hattest einen Fehler',
    'Du hattest zwei Fehler',
    'Du hattest drei Fehler',
    'Du hattest vier Fehler',
    'Du hattest fünf Fehler',
    'Du hattest mehr als 5 Fehler',
  ];
  finishEmojis = ['⭐', '👍', '😐', '😲', '🤨', '😦', '😵'];

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
  }

  checkAnswer(answer: number): void {
    if (this.answer !== undefined) {
      return;
    }
    this.answer = answer;

    if (this.isCorrect(answer)) {
      this.isCorrectAnswer = true;
    } else {
      this.isCorrectAnswer = false;
      this.wrongAnswers++;
    }

    setTimeout(() => {
      this.slideInWrapper.nativeElement.classList.add('slide-in-animation');
      setTimeout(() => this.slideInWrapper.nativeElement.classList.remove('slide-in-animation'), 400);

      this.answer = undefined;
      this.isCorrectAnswer = null;
      if (this.quiz.questions[this.level + 1] !== undefined) {
        this.level++;
      } else if (this.quiz.questions[this.level + 1] === undefined) {
        this.end = true;
      }
    }, 2000);
  }

  isCorrect(answer): boolean {
    return this.quiz.questions[this.level].answer === answer;
  }

  resetLevel(): void {
    this.answer = undefined;
    this.isCorrectAnswer = null;
    this.level = 0;
    this.wrongAnswers = 0;
    this.end = false;
  }

}
