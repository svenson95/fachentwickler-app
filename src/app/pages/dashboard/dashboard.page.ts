import { Component, OnInit } from '@angular/core';

import { DashboardData } from '../../models/dashboard-data';
import { SchoolNews } from '../../models/school-news';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { schedule } from '../../constants/schedule';

@Component({
  selector: 'fe-dashboard-page',
  templateUrl: './dashboard.page.html'
})
export class DashboardPage implements OnInit {

  schedule = schedule;

  constructor(private headerService: HeaderService,
              public authService: AuthService,
              public dataService: DataService
  ) {
    this.headerService.setPageTitle('Dashboard');
  }

  ngOnInit(): void {
    this.setupComponent();
  }

  getLatest(): SchoolNews[] {
    if (this.dataService.dashboard?.schoolNews === undefined) return;
    return [this.dataService.dashboard.schoolNews[0]];
  }

  setupComponent(): void {
    if (!this.dataService.dashboard) {

      this.dataService.dashboard = {} as DashboardData;
      this.dataService.getAllNews().subscribe(response => this.dataService.dashboard.schoolNews = response);
      this.fetchNextExams();
      this.authService.fetchAllLessons();
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
