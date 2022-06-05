import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SchoolNews } from '../../models/school-news';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'fe-messages-page',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit, OnDestroy {
  public news: SchoolNews[];

  public isLoading: boolean;

  private subscription: Subscription = new Subscription();

  constructor(
    private headerService: HeaderService,
    private dataService: DataService,
    private loadService: LoadingService,
  ) {
    this.headerService.setPageTitle('Mitteilungen');
  }

  public ngOnInit(): void {
    this.subscription.add(
      this.loadService.loading$.pipe(delay(0)).subscribe((value) => {
        this.isLoading = value;
      }),
    );
    this.subscription.add(
      this.dataService.getAllNews().subscribe((res) => {
        this.news = res;
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
