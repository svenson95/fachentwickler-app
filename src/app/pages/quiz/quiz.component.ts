import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { subjects } from '../../../data/menu-items';
import { Router } from '@angular/router';
import { SubjectPost } from '../../models/subject';
import { Quiz } from '../../models/quiz';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizContent: Quiz;
  quizDetails: SubjectPost;

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

}
