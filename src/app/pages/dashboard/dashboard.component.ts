import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { SchoolWeek } from '../../models/school-week';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;
  schoolWeek: SchoolWeek;
  scheduleSubstitutions = false;

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
      this.fetchSchoolWeek();
      this.authService.fetchAllLessons();
    } else if (this.dataService) {
      this.schoolWeek = this.dataService.schoolWeek;

      if (!this.dataService.dashboard.nextLesson || !this.dataService.dashboard.lessonsPercentage) {
        this.authService.fetchNextLesson(this.dataService.dashboard.allLessons);
      }
    }
  }

  fetchNextExams(): void {
    this.dataService.getAllExamDates().subscribe(
        (exams) => {
          const openExams = [];
          exams.forEach(exam => {
            const today = new Date();
            const examDate = new Date(exam.date);

            if (today < examDate) {
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

  /* -- Get current school week card with all lessons -- */
  fetchSchoolWeek(): void {
    this.dataService.getSchoolWeek(this.dataService.currentSchoolWeek).subscribe((response) => {
      this.schoolWeek = response;
      this.dataService.schoolWeek = response;
    });
  }

}
