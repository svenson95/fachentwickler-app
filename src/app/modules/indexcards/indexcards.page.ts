import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { subjects } from '../../core/constants/menu-items';
import { PostIndexCards } from '../../core/models/post';
import { DataService } from '../../core/services/data.service';
import { HeaderService } from '../../core/services/header.service';
import { LoadingService } from '../../core/services/loading.service';

@Component({
  selector: 'fe-indexcards-page',
  templateUrl: './indexcards.page.html',
  styleUrls: ['./indexcards.page.scss'],
})
export class IndexcardsPage {
  public indexCards: PostIndexCards;

  constructor(
    private headerService: HeaderService,
    private dataService: DataService,
    public loadingService: LoadingService,
    private router: Router,
  ) {
    const subject = this.router.url.substring(0, router.url.indexOf('/', 1));
    this.headerService.setPageTitle(subjects.find((sub) => sub.url === subject)?.title);
    this.dataService.getPost(router.url.substr(router.url.indexOf('/', 1) + 1)).subscribe((data) => {
      this.indexCards = data as PostIndexCards;
    });
  }
}
