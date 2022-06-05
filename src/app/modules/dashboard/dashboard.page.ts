import { Component, OnInit } from '@angular/core';
import { schedule } from '../../core/constants/schedule';
import { DashboardData } from '../../core/models/dashboard-data';
import { SchoolNews } from '../../core/models/school-news';
import { AuthService } from '../../core/services/auth.service';
import { DataService } from '../../core/services/data.service';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'fe-dashboard-page',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit {
  public schedule = schedule;

  constructor(private headerService: HeaderService, public authService: AuthService, public dataService: DataService) {
    this.headerService.setPageTitle('Dashboard');
  }

  public ngOnInit(): void {
    this.setupComponent();
  }

  public getLatest(): SchoolNews[] {
    if (this.dataService.dashboard?.schoolNews === undefined) return [];
    return [this.dataService.dashboard.schoolNews[0]];
  }

  private setupComponent(): void {
    if (!this.dataService.dashboard) {
      this.dataService.dashboard = {} as DashboardData;
      this.dataService.getAllNews().subscribe((response) => {
        this.dataService.dashboard.schoolNews = response;
      });
      this.fetchNextExams();
      this.authService.fetchAllLessons();
    }
  }

  private fetchNextExams(): void {
    this.dataService.getAllExamDates().subscribe((exams) => {
      const openExams = [];

      const today = new Date();
      today.setHours(23, 59, 59, 999);

      exams.forEach((exam) => {
        const examDate = new Date(exam.date);
        examDate.setHours(23, 59, 59, 999);

        if (today <= examDate) {
          openExams.push(exam);
        }
      });

      openExams.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        return 0;
      });
      this.dataService.dashboard.nextExams = openExams;
    });
  }
}
