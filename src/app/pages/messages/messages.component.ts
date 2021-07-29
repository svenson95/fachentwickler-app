import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

import { SchoolNews } from '../../models/school-news';
import { HeaderService } from '../../services/header.service';
import { LoadingService } from '../../services/loading.service';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'fe-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit, OnDestroy {

  news: SchoolNews[];
  allNewsLength: number;
  currentPage = 0;
  isLoading: boolean;
  subscription: Subscription = new Subscription();

  constructor(private headerService: HeaderService,
              private dataService: DataService,
              private loadService: LoadingService
  ) {
    this.headerService.setPageTitle('Mitteilungen');
  }

  ngOnInit(): void {
    this.subscription.add(this.loadService.loading$.pipe(delay(0)).subscribe((status: boolean) => {
      this.isLoading = status;
    }));
    this.subscription.add(this.dataService.getAllNewsLength().subscribe(value => {
      this.allNewsLength = value;
    }));
    this.subscription.add(this.dataService.getAllNews().subscribe(res => {
      this.news = res;
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
