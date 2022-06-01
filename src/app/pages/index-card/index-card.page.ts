import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { subjects } from '../../constants/menu-items';
import { PostIndexCards } from '../../models/post';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'fe-index-card-page',
  templateUrl: './index-card.page.html',
})
export class IndexCardPage {
  public indexCards: PostIndexCards;

  constructor(
    private headerService: HeaderService,
    private dataService: DataService,
    public loadingService: LoadingService,
    private router: Router,
  ) {
    const subject = this.router.url.substring(0, router.url.indexOf('/', 1));
    this.headerService.setPageTitle(
      subjects.find((sub) => sub.url === subject)?.title,
    );
    this.dataService
      .getPost(router.url.substr(router.url.indexOf('/', 1) + 1))
      .subscribe((data) => {
        this.indexCards = data as PostIndexCards;
      });
  }
}
