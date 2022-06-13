import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Post } from '@models/post';
import { HeaderService } from '@services/header.service';
import { MediaQueryService } from '@services/media-query.service';
import { SearchPostService } from '@services/search-post.service';

@Component({
  selector: 'fe-search-page',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnDestroy {
  public resultsMapping = {
    '=0': 'Keine Suchergebnisse',
    '=1': '1 Suchergebnis',
    other: '# Suchergebnisse',
  };

  public searchResults: Post[];

  public isMobile: boolean;

  private subscription: Subscription = new Subscription();

  constructor(
    private headerService: HeaderService,
    private mediaQueryService: MediaQueryService,
    public searchPostService: SearchPostService,
    private router: Router,
  ) {
    this.headerService.setPageTitle('Suche');
    this.searchForPosts();

    this.subscription.add(
      this.searchPostService.searchResults$.subscribe((posts) => {
        this.searchResults = posts;
      }),
    );
    this.subscription.add(
      this.mediaQueryService.isMobile$.subscribe((value) => {
        this.isMobile = value;
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private searchForPosts(): void {
    const searchValue = this.router.url.substring(14, this.router.url.length).split('%20').join(' ');
    if (searchValue !== '') {
      this.searchPostService.searchTerm = searchValue;
      this.searchPostService.searchedTerm = searchValue;
      this.searchPostService.searchPosts(searchValue).subscribe((posts) => {
        this.searchResults = posts;
      });
    }
  }

  public closeSearchView(): void {
    this.searchPostService.searchTerm = '';
    this.searchPostService.searchedTerm = '';
    this.router.navigateByUrl(this.searchPostService.redirectUrl);
  }
}
