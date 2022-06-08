import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { testDashboard } from '../../../core/constants/landing-page-data';
import { SchoolNews } from '../../../core/models/school-news';
import { DataService } from '../../../core/services/data.service';
import { LoadingService } from '../../../core/services/loading.service';

@Component({
  selector: 'fe-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit, OnDestroy {
  @Input() public onlyNewest = false;

  @Input() private testData = false;

  public news: SchoolNews[];

  public currentPage = 0;

  public isLoading: boolean;

  public allNewsLength: number;

  private subscription: Subscription = new Subscription();

  constructor(private loadingService: LoadingService, private dataService: DataService) {}

  public ngOnInit(): void {
    this.subscription.add(
      this.loadingService.loading$.subscribe((value) => {
        this.isLoading = value;
      }),
    );

    if (this.testData) {
      this.news = testDashboard.schoolNews;
    } else if (this.onlyNewest) {
      this.dataService.getLatestNews().subscribe((response) => {
        this.news = [response];
      });
    } else {
      this.dataService.getNews().subscribe((response) => {
        this.news = response;
      });

      this.dataService.getAllNewsLength().subscribe((response) => {
        this.allNewsLength = response;
      });
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
    this.dataService.getNews(page).subscribe((res) => {
      this.news = res;
    });
  }
}
