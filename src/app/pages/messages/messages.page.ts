import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

import { SchoolNews } from '../../models/school-news';
import { HeaderService } from '../../services/header.service';
import { LoadingService } from '../../services/loading.service';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'fe-messages-page',
  templateUrl: './messages.page.html'
})
export class MessagesPage implements OnInit, OnDestroy {

  news: SchoolNews[];
  isLoading: boolean;
  subscription: Subscription = new Subscription();

  constructor(private headerService: HeaderService,
              private dataService: DataService,
              private loadService: LoadingService
  ) {
    this.headerService.setPageTitle('Mitteilungen');
  }

  ngOnInit(): void {
    this.subscription.add(this.loadService.loading$.pipe(delay(0)).subscribe(value => this.isLoading = value));
    this.subscription.add(this.dataService.getAllNews().subscribe(res => this.news = res));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
