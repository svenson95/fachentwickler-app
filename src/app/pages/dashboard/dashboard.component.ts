import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { DashboardData } from '../../models/dashboard-data';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { schedule } from '../../../data/schedule';

@Component({
  selector: 'fe-dashboard',
  templateUrl: './dashboard.component.html'
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

      this.dataService.dashboard = {} as DashboardData;
      this.dataService.getAllNews().subscribe(response => {
        this.dataService.dashboard.schoolNews = response;
      });
      this.fetchNextExams();
      this.authService.fetchAllLessons();

    } else if (this.dataService.dashboard) {

      if (!this.dataService.dashboard.nextLesson) {
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
