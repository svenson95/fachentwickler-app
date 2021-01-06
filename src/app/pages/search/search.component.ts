import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

import { HeaderService } from '../../services/header.service';
import { SearchPostService } from '../../services/data/search-post.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {

  resultsSubscription: Subscription;
  searchResults = [];

  loadingSubscription: Subscription;
  isLoading = false;

  constructor(private headerService: HeaderService,
              private loadingService: LoadingService,
              public searchPostService: SearchPostService
  ) {
    this.headerService.setPageTitle('Suche');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.resultsSubscription = this.searchPostService.searchResults$.pipe(delay(0)).subscribe(
      (posts) => {
        this.searchResults = posts;
      }
    );

    this.loadingSubscription = this.loadingService.loading$.pipe(delay(0)).subscribe(
      (status: boolean) => {
        this.isLoading = status;
      }
    );
  }

  ngOnDestroy(): void {
    this.resultsSubscription.unsubscribe();
    this.loadingSubscription.unsubscribe();
  }

}
