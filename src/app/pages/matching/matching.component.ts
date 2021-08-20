import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostMatching } from '../../models/post';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';
import { subjects } from '../../constants/menu-items';

@Component({
  selector: 'fe-matching',
  templateUrl: './matching.component.html'
})
export class MatchingComponent implements OnInit {

  matching: PostMatching;

  constructor(private headerService: HeaderService,
              private dataService: DataService,
              private router: Router
  ) {
    this.headerService.setPageTitle(
      subjects.find(sub => sub.url === router.url.substring(
        0, router.url.indexOf('/', 1)
      ))?.title
    );

    this.dataService.getPost(router.url.substring(router.url.indexOf('/', 1), router.url.length)).subscribe(
      (data) => this.matching = data as PostMatching,
      (error) => console.log('Error while GET matching', error)
    );
  }

  ngOnInit(): void {
  }

}
