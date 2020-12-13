import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { LF1_POSTS } from '../../../data/posts/lf-1';
import { subjectsData } from '../../../data/data-subjects';
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

  public user: User;
  public dashboard: DashboardData;
  public schoolWeek: SchoolWeek;

  examplePost = {
    description: subjectsData[0].topics[0].links[1].description,
    postId: subjectsData[0].topics[0].links[1].postId,
    subject: LF1_POSTS[1].subject,
    title: subjectsData[0].topics[0].links[1].title,
    type: subjectsData[0].topics[0].links[1].type,
    url: LF1_POSTS[1].url
  };

  constructor(private headerService: HeaderService,
              private authService: AuthService,
              public dataService: DataService
  ) {
    this.headerService.setPageTitle('Dashboard');
    this.user = this.authService.user;
  }

  ngOnInit(): void {
    if (!this.dataService.dashboard) {
      this.fetchAllLessons();
    } else {
      this.dashboard = this.dataService.dashboard;
    }

    if (!this.dataService.schoolWeek) {
      this.fetchSchoolWeek();
    } else {
      this.schoolWeek = this.dataService.schoolWeek;
    }
  }

  async fetchAllLessons(): Promise<void> {
    this.dataService.getAllLessons().subscribe(
      (lessons) => {
        this.fetchNextLesson(lessons);
      }, (error) => {
        console.log('error while GET all-lessons', error);
      }
    );
  }

  fetchNextLesson(lessons): void {
    this.dataService.getSubjectPost(lessons[this.authService.user.progress.length]).subscribe(
      (nextLesson) => {
        this.dashboard = {
          allLessons: lessons,
          lessonsPercentage: (this.authService.user.progress.length / lessons.length) * 100,
          nextLesson
        };
      }, (error) => {
        console.log('error while GET next-lesson', error);
      }
    );
  }

  fetchSchoolWeek(): void {
    this.dataService.getSchoolWeek(this.dataService.schoolWeekValue).subscribe((response) => {
      this.schoolWeek = response;
      this.dataService.schoolWeek = response;
      localStorage.setItem('dev_schoolweek', JSON.stringify(response));
    });
  }

}
