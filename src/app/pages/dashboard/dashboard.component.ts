import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { schedule } from '../../../data/schedule';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;
  schedule = schedule;

  constructor(private headerService: HeaderService,
              private authService: AuthService,
              public dataService: DataService
  ) {
    this.headerService.setPageTitle('Dashboard');
    this.user = this.authService.user;
  }

  ngOnInit(): void {
    this.setupComponent();
  }

  /* -- Component functions -- */
  setupComponent(): void {
    if (!this.dataService.dashboard) {
      this.dataService.dashboard = {
        allLessons: undefined,
        lessonsPercentage: undefined,
        nextLesson: undefined,
        nextExams: undefined,
        schoolNews: undefined,
      };

      this.dataService.getAllNews().subscribe(response => {
        this.dataService.dashboard.schoolNews = response;
      });
      this.fetchNextExams();
      this.authService.fetchAllLessons();
    } else if (this.dataService) {
      if (!this.dataService.dashboard.nextLesson || !this.dataService.dashboard.lessonsPercentage) {
        this.authService.fetchNextLesson(this.dataService.dashboard.allLessons);
      }
    }
  }

  fetchNextExams(): void {
    this.dataService.getAllExamDates().subscribe(
        (exams) => {
          const openExams = [];

          const today = new Date();
          today.setHours(23, 59, 59, 999);

          exams.forEach(exam => {
            const examDate = new Date(exam.date);
            examDate.setHours(23, 59, 59, 999);

            if (today <= examDate) {
              openExams.push(exam);
            }
          });

          openExams.sort((a, b) => {
            if (a.date > b.date) { return 1; }
            if (a.date < b.date) { return -1; }
            return 0;
          });
          this.dataService.dashboard.nextExams = openExams;
        }, (error) => {
          console.log('error while GET exam-dates', error);
        }
    );
  }
}
