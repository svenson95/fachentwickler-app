import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { LF1_POSTS } from '../../../data/posts/lf-1';
import { subjectsData } from '../../../data/data-subjects';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  examplePost = {
    description: subjectsData[0].topics[0].links[1].description,
    postId: subjectsData[0].topics[0].links[1].postId,
    subject: LF1_POSTS[1].subject,
    title: subjectsData[0].topics[0].links[1].title,
    type: subjectsData[0].topics[0].links[1].type,
    url: LF1_POSTS[1].url
  };
  user: User;
  allLessons: string[];
  lessonsPercentage = 0;

  constructor(private headerService: HeaderService,
              private authService: AuthService,
              private dataService: DataService
  ) {
    this.headerService.setPageTitle('Dashboard');
    this.user = this.authService.user;
    this.dataService.getAllLessons().subscribe((response) => {
      this.allLessons = response;
      this.lessonsPercentage = (this.user.progress?.length / response.length) * 100;
    });
  }

  ngOnInit(): void {
  }

}
