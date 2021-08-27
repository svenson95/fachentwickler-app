import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Post } from '../../models/post';
import { HeaderService } from '../../services/header.service';
import { SearchPostService } from '../../services/data/search-post.service';
import { MediaQueryService } from '../../services/media-query.service';

@Component({
  selector: 'fe-search-page',
  templateUrl: './search.page.html'
})
export class SearchPage implements OnInit, OnDestroy {

  resultsMapping = {
    '=0': 'Keine Suchergebnisse',
    '=1': '1 Suchergebnis',
    other: '# Suchergebnisse'
  };

  searchResults: Post[];
  isMobile: boolean;
  subscription: Subscription = new Subscription();

  constructor(private headerService: HeaderService,
              private mediaQueryService: MediaQueryService,
              public searchPostService: SearchPostService,
              private router: Router
  ) {
    this.headerService.setPageTitle('Suche');
    this.searchForPosts();

    this.subscription.add(this.searchPostService.searchResults$.subscribe(posts => this.searchResults = posts));
    this.subscription.add(this.mediaQueryService.isMobile$.subscribe(value => this.isMobile = value));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  searchForPosts(): void {
    const searchValue = this.router.url.substring(14, this.router.url.length).split('%20').join(' ');
    if (searchValue !== '') {
      this.searchPostService.searchTerm = searchValue;
      this.searchPostService.searchedTerm = searchValue;
      this.searchPostService.searchPosts(searchValue).subscribe((posts) => {
        this.searchResults = posts;
      });
    }
  }

  closeSearchView(): void {
    this.searchPostService.searchTerm = '';
    this.searchPostService.searchedTerm = '';
    this.router.navigateByUrl(this.searchPostService.redirectUrl);
  }

}
