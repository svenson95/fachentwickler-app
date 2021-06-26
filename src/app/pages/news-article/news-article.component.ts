import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data/data.service';
import { SchoolNews } from '../../models/school-news';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'fe-news-article',
  templateUrl: './news-article.component.html'
})
export class NewsArticleComponent implements OnInit {

  data: SchoolNews;

  constructor(private router: Router,
              private headerService: HeaderService,
              private dataService: DataService
  ) {
    this.headerService.setPageTitle('Mitteilung');
  }

  ngOnInit(): void {
    const articleUrl = this.router.url.substring(14, this.router.url.length);
    this.dataService.getNewsObject(articleUrl).subscribe(response => {
      this.data = response;
    });
  }

}
