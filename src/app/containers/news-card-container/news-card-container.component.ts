import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SchoolNews } from '../../models/school-news';
import { DataService } from '../../services/data/data.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'fe-news-card-container',
  templateUrl: './news-card-container.component.html',
})
export class NewsCardContainerComponent implements OnInit, OnDestroy {
  @Input() public news: SchoolNews[];

  @Input() private onlyNewest = false;

  public allNewsLength: number;

  public currentPage = 0;

  public isLoading: boolean;

  private subscription: Subscription = new Subscription();

  constructor(private loadingService: LoadingService, private dataService: DataService) {}

  public ngOnInit(): void {
    this.subscription.add(
      this.loadingService.loading$.subscribe((value) => {
        this.isLoading = value;
      }),
    );

    if (!this.onlyNewest) {
      this.subscription.add(
        this.dataService.getAllNewsLength().subscribe((value) => {
          this.allNewsLength = value;
        }),
      );
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadPage(page): void {
    if (this.isLoading) {
      return;
    }

    this.currentPage = page;
    this.dataService.getAllNews(page).subscribe((res) => {
      this.news = res;
    });
  }
}
