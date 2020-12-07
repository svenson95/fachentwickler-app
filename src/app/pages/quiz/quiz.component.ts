import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { subjects } from '../../../data/menu-items';
import { Router } from '@angular/router';
import { SubjectPost } from '../../models/subject';
import { Quiz } from '../../models/quiz';
import { DataService } from '../../services/data/data.service';
import { transformDate } from '../../app-common/transform-date';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizContent: Quiz;
  quizDetails: SubjectPost;
  transformDate = transformDate;

  level = 0;
  wrongAnswers = 0;
  answer: number;
  isCorrectAnswer: boolean;
  end = false;

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

  constructor(private headerService: HeaderService,
              private dataService: DataService,
              private router: Router
  ) {
    this.headerService.setPageTitle(
      subjects.find(sub => sub.url === router.url.substring(
      0, router.url.indexOf('/', 1)
      ))?.title
    );
    this.dataService.getQuiz(router.url).subscribe(
      (data) => {
        this.quizContent = data.content;
        this.quizDetails = data.details;
      },
      (error) => {
        console.log('Error while GET quiz', error);
      }
    );
  }

  ngOnInit(): void {
  }

  checkAnswer(answer: number): void {
    if (this.answer !== undefined) {
      return;
    }
    this.answer = answer;

    if (answer === this.quizContent.questions[this.level].answer) {
      this.isCorrectAnswer = true;
    } else {
      this.isCorrectAnswer = false;
      this.wrongAnswers++;
    }

    setTimeout(() => {
      this.answer = undefined;
      this.isCorrectAnswer = null;
      if (this.quizContent.questions[this.level + 1] !== undefined) {
        this.level++;
      } else if (this.quizContent.questions[this.level + 1] === undefined) {
        this.end = true;
      }
    }, 2000);
  }

  isCorrect(answer): boolean {
    return this.quizContent.questions[this.level].answer === answer;
  }

  resetLevel(): void {
    this.level = 0;
    this.end = false;
    this.answer = null;
  }

}
