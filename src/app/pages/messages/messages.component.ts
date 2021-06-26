import { Component, OnInit } from '@angular/core';

import { SchoolNews } from '../../models/school-news';
import { HeaderService } from '../../services/header.service';
import { LoadingService } from '../../services/loading.service';
import { DataService } from '../../services/data/data.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'fe-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {

  news: SchoolNews[];
  allNewsLength: number;
  currentPage = 0;
  isLoading: boolean;

  constructor(private headerService: HeaderService,
              private dataService: DataService,
              private loadService: LoadingService
  ) {
    this.headerService.setPageTitle('Mitteilungen');
    this.loadService.loading$.pipe(delay(0)).subscribe((status: boolean) => {
      this.isLoading = status;
    });
    this.dataService.getAllNewsLength().subscribe(value => {
      this.allNewsLength = value;
    });
    this.dataService.getAllNews().subscribe(res => {
      this.news = res;
    });
  }

  ngOnInit(): void {
  }

  loadPage(page): void {
    if (this.isLoading) {
      return;
    }

    this.currentPage = page;
    this.dataService.getAllNews(page).subscribe(res => {
      this.news = res;
    });
  }

}
