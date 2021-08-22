import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { HeaderService } from '../../services/header.service';
import { SearchPostService } from '../../services/data/search-post.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'fe-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

  resultsSubscription: Subscription;
  searchResults = [];

  constructor(private headerService: HeaderService,
              private loadingService: LoadingService,
              public searchPostService: SearchPostService,
              private router: Router
  ) {
    this.headerService.setPageTitle('Suche');

    const searchValue = this.router.url.substring(14, this.router.url.length).split('%20').join(' ');
    if (searchValue !== '') {
      this.searchPostService.searchTerm = searchValue;
      this.searchPostService.searchedTerm = searchValue;
      this.searchPostService.searchPosts(searchValue).subscribe((posts) => {
        this.searchResults = posts;
      });
    }

    this.searchPostService.searchResults$.subscribe(posts => this.searchResults = posts);
  }

  ngOnInit(): void {
    this.resultsSubscription = this.searchPostService.searchResults$.subscribe(
      posts => this.searchResults = posts
    );
  }

  ngOnDestroy(): void {
    this.resultsSubscription.unsubscribe();
  }

  closeSearchView(): void {
    this.searchPostService.searchTerm = '';
    this.searchPostService.searchedTerm = '';
    this.router.navigateByUrl(this.searchPostService.redirectUrl);
  }

}
