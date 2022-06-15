import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { subjects } from '@constants/menu-items';
import { PostQuiz } from '@models/post';
import { DataService } from '@services/data.service';
import { HeaderService } from '@services/header.service';
import { LoadingService } from '@services/loading.service';

@Component({
  selector: 'fe-quiz-page',
  templateUrl: './quiz.page.html',
})
export class QuizPage {
  public quiz: PostQuiz;

  constructor(
    private headerService: HeaderService,
    private dataService: DataService,
    public loadingService: LoadingService,
    private router: Router,
  ) {
    const { url } = this.router;
    this.headerService.setPageTitle(
      subjects.find((sub) => {
        return sub.url === url.substring(0, url.indexOf('/', 1));
      })?.title,
    );

    this.dataService.getPost(url.substring(url.indexOf('/', 1) + 1)).subscribe((data) => {
      this.quiz = data as PostQuiz;
    });
  }
}
