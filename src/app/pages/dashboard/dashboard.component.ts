import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';
import {LF1_POSTS} from '../../../data/posts/lf-1';
import {subjects} from '../../../data/menu-items';
import {subjectsData} from '../../../data/data-subjects';

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

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Dashboard');
  }

  ngOnInit(): void {
  }

}
