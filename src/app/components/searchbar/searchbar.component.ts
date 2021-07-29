import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { SearchPostService } from '../../services/data/search-post.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'fe-searchbar',
  templateUrl: './searchbar.component.html'
})
export class SearchbarComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('searchInput') searchInput: ElementRef;

  isLoading: boolean;
  loadingSubscription: Subscription;

  constructor(public router: Router,
              public searchPostService: SearchPostService,
              private loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.loadingSubscription = this.loadingService.loading$.subscribe(value => this.isLoading = value);
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.initSearchBarInputEvent();
  }

  initSearchBarInputEvent(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        filter((e: KeyboardEvent) => e.code === 'Enter' || e.code === 'NumpadEnter'),
        tap(() => this.searchForPost())
      )
      .subscribe();
  }

  searchForPost(): void {
    if (this.isLoading) return;
    if (!this.router.url.startsWith('/search')) {
      this.searchPostService.setRedirectUrl(this.router.url);
    }

    if (this.searchInput.nativeElement.value !== '') {
      this.router.navigateByUrl('search?query=' + this.searchInput.nativeElement.value);
      this.searchPostService.searchPosts(this.searchInput.nativeElement.value).subscribe((response) => {
        this.searchPostService.searchResults$.next(response);
      });
    } else if (this.searchPostService.redirectUrl) {
      this.router.navigateByUrl(this.searchPostService.redirectUrl);
    }
  }

}
