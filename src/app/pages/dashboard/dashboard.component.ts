import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { LF1_POSTS } from '../../../data/posts/lf-1';
import { subjectsData } from '../../../data/data-subjects';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { DataService } from '../../services/data/data.service';
import { DashboardData } from '../../models/dashboard-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;
  dashboard: DashboardData;

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
              private dataService: DataService
  ) {
    this.headerService.setPageTitle('Dashboard');
    this.user = this.authService.user;

    if (!this.dataService.dashboard) {
      this.dataService.getAllLessons().subscribe((response) => {
        this.dashboard = {
          allLessons: response,
          lessonsPercentage: (this.user.progress?.length / response.length) * 100
        };
        this.dataService.storeDashboard(this.dashboard);
      });
    } else {
      this.dashboard = this.dataService.dashboard;
    }
  }

  ngOnInit(): void {
  }

}
