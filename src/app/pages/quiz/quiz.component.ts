import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Quiz } from '../../models/quiz';
import { HeaderService } from '../../services/header.service';
import { DataService } from '../../services/data/data.service';
import { subjects } from '../../../data/menu-items';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit {

  quiz: Quiz;

  constructor(private headerService: HeaderService,
              private dataService: DataService,
              private router: Router
  ) {
    this.headerService.setPageTitle(
      subjects.find(sub => sub.url === router.url.substring(
        0, router.url.indexOf('/', 1)
      ))?.title
    );
    this.dataService.getQuiz(router.url.substr(router.url.indexOf('/', 1) + 1)).subscribe(
      (data) => {
        this.quiz = data;
      },
      (error) => {
        console.log('Error while GET quiz', error);
      }
    );
  }

  ngOnInit(): void {
  }

}
