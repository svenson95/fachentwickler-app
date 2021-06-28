import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

import { HeaderService } from '../../services/header.service';
import { SearchPostService } from '../../services/data/search-post.service';
import { LoadingService } from '../../services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fe-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

  resultsSubscription: Subscription;
  searchResults = [];
  searchString: string;

  loadingSubscription: Subscription;
  isLoading: boolean;

  constructor(private headerService: HeaderService,
              private loadingService: LoadingService,
              public searchPostService: SearchPostService,
              private router: Router
  ) {
    this.headerService.setPageTitle('Suche');
  }

  ngOnInit(): void {
    this.resultsSubscription = this.searchPostService.searchResults$.pipe(delay(0)).subscribe(
      (posts) => {
        this.searchString = this.searchPostService.searchValue;
        this.searchResults = posts;
      }
    );

    this.loadingSubscription = this.loadingService.loading$.pipe(delay(0)).subscribe(
      (status: boolean) => {
        this.isLoading = status;
      }
    );

    if (this.searchResults.length === 0) {
      const searchValue = this.router.url.substring(14, this.router.url.length).split('%20').join(' ');
      if (searchValue !== '') {
        this.searchString = searchValue;
        this.searchPostService.searchValue = searchValue;
        this.searchPostService.searchPosts(searchValue).subscribe((response) => {
          this.searchPostService.searchResults$.next(response);
        });
      }
    }
  }

  ngOnDestroy(): void {
    this.resultsSubscription.unsubscribe();
    this.loadingSubscription.unsubscribe();
  }

  closeSearchView(): void {
    this.searchPostService.searchValue = '';
    this.searchString = '';
    this.router.navigateByUrl(this.searchPostService.redirectUrl);
  }

}
