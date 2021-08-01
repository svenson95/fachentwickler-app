import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SchoolNews } from '../../models/school-news';
import { LoadingService } from '../../services/loading.service';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'fe-news-card-container',
  templateUrl: './news-card-container.component.html'
})
export class NewsCardContainerComponent implements OnInit, OnDestroy {

  @Input() news: SchoolNews | SchoolNews[];
  @Input() onlyNewest = false;

  allNewsLength: number;
  currentPage = 0;
  isLoading: boolean;
  subscription: Subscription = new Subscription();

  constructor(private loadingService: LoadingService,
              private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.subscription.add(this.loadingService.loading$.subscribe(value => this.isLoading = value));

    if (!this.onlyNewest) {
      this.subscription.add(this.dataService.getAllNewsLength().subscribe(value => this.allNewsLength = value));
    }
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
