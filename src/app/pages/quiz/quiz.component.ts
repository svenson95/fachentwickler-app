import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostQuiz } from '../../models/post';
import { HeaderService } from '../../services/header.service';
import { DataService } from '../../services/data/data.service';
import { LoadingService } from '../../services/loading.service';
import { subjects } from '../../constants/menu-items';

@Component({
  selector: 'fe-quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit {

  quiz: PostQuiz;

  constructor(private headerService: HeaderService,
              private dataService: DataService,
              public loadingService: LoadingService,
              private router: Router
  ) {
    this.headerService.setPageTitle(
      subjects.find(sub => sub.url === router.url.substring(
        0, router.url.indexOf('/', 1)
      ))?.title
    );

    this.dataService.getPost(router.url.substr(router.url.indexOf('/', 1) + 1)).subscribe(
      (data) => this.quiz = data as PostQuiz,
      (error) => console.log('Error while GET quiz', error)
    );
  }

  ngOnInit(): void {
  }

}
