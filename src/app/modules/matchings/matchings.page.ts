import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { subjects } from '@constants/menu-items';
import { PostMatchings } from '@models/post';
import { DataService } from '@services/data.service';
import { HeaderService } from '@services/header.service';

@Component({
  selector: 'fe-matchings-page',
  templateUrl: './matchings.page.html',
  styleUrls: ['./matchings.page.scss'],
})
export class MatchingsPage {
  public matching: PostMatchings;

  constructor(private headerService: HeaderService, private dataService: DataService, private router: Router) {
    this.headerService.setPageTitle(
      subjects.find((sub) => sub.url === router.url.substring(0, router.url.indexOf('/', 1)))?.title,
    );

    this.dataService.getPost(router.url.substring(router.url.indexOf('/', 1), router.url.length)).subscribe((data) => {
      this.matching = data as PostMatchings;
    });
  }
}
