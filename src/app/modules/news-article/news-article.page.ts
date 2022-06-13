import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SchoolNews } from '../../core/models/school-news';
import { DataService } from '../../core/services/data.service';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'fe-news-article-page',
  templateUrl: './news-article.page.html',
})
export class NewsArticlePage implements OnInit {
  public data: SchoolNews;

  constructor(private router: Router, private headerService: HeaderService, private dataService: DataService) {
    this.headerService.setPageTitle('Mitteilung');
  }

  public ngOnInit(): void {
    const articleUrl = this.router.url.substring(14, this.router.url.length);
    this.dataService.getNewsObject(articleUrl).subscribe((response) => {
      this.data = response;
    });
  }
}
