import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { subjects } from '../../constants/menu-items';
import { PostMatching } from '../../models/post';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'fe-matching-page',
  templateUrl: './matching.page.html',
  styleUrls: ['./matching.page.scss'],
})
export class MatchingPage {
  public matching: PostMatching;

  constructor(private headerService: HeaderService, private dataService: DataService, private router: Router) {
    this.headerService.setPageTitle(
      subjects.find((sub) => sub.url === router.url.substring(0, router.url.indexOf('/', 1)))?.title,
    );

    this.dataService.getPost(router.url.substring(router.url.indexOf('/', 1), router.url.length)).subscribe((data) => {
      this.matching = data as PostMatching;
    });
  }
}
