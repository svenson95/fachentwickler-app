import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { subjects } from '@constants/menu-items';
import { PostQuiz } from '@models/post';
import { DataService } from '@services/data.service';
import { HeaderService } from '@services/header.service';
import { LoadingService } from '@services/loading.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'fe-quiz-page',
  templateUrl: './quiz.page.html',
})
export class QuizPage {
  public quiz: PostQuiz;

  constructor(
    private router: Router,
    private header: HeaderService,
    private data: DataService,
    public user: UserService,
    public loading: LoadingService,
  ) {
    const { url } = this.router;
    const subject = subjects.find((sub) => sub.url === url.substring(0, url.indexOf('/', 1)));
    this.header.setPageTitle(subject?.title);

    const quizUrl = url.substring(url.indexOf('/', 1) + 1);
    this.data.getPost(quizUrl).subscribe((response) => {
      if (response !== null) {
        this.quiz = response as PostQuiz;
      } else {
        this.router.navigate(['not-found']);
      }
    });
  }
}
