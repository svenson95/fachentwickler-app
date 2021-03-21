import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { DataService } from '../../services/data/data.service';
import { DashboardData } from '../../models/dashboard-data';
import { SchoolWeek } from '../../models/school-week';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;
  dashboard: DashboardData;
  schoolWeek: SchoolWeek;
  scheduleSubstitutions = false;

  examplePost = {
    "url": "beduerfnisse_und_gueter/wie_entsteht_aus_einem_beduerfnis_der_bedarf",
    "title": "Wie entsteht aus einem Bedürfnis der Bedarf?",
    "description": "Mitschrift vom 28.10.2019",
    "subject": "lf-1",
    "type": "article",
    "lessonDate": "2019-10-28",
    "lastUpdate": "2021-01-06",
    "schoolWeek": "4"
  };

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
    this.fetchAllLessons();

    if (!this.dataService.schoolWeek) {
      this.fetchSchoolWeek();
    } else {
      this.schoolWeek = this.dataService.schoolWeek;
    }
  }

  /* -- Get all lessons for calculating user progress -- */
  async fetchAllLessons(): Promise<void> {
    this.dataService.getAllLessons().subscribe(
      (lessons) => {
        this.fetchNextLesson(lessons);
      }, (error) => {
        console.log('error while GET all-lessons', error);
      }
    );
  }

  /* -- Get next lesson for user progress module -- */
  fetchNextLesson(lessons): void {
    this.dataService.getSubjectPost(lessons[this.authService.user.progress.length]).subscribe(
      (nextLesson) => {
        this.dashboard = {
          allLessons: lessons,
          lessonsPercentage: (this.authService.user.progress.length / lessons.length) * 100,
          nextLesson
        };
        this.dataService.dashboard = this.dashboard;
      }, (error) => {
        console.log('error while GET next-lesson', error);
      }
    );
  }

  /* -- Get current school week card with all lessons -- */
  fetchSchoolWeek(): void {
    this.dataService.getSchoolWeek(this.dataService.schoolWeekValue).subscribe((response) => {
      this.schoolWeek = response;
      this.dataService.schoolWeek = response;
    });
  }

}
