import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { SearchPostService } from '@services/search-post.service';

@Component({
  selector: 'fe-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements AfterViewInit {
  @ViewChild('searchInput') public searchInput: ElementRef;

  public searchTerm = this.searchPostService.searchTerm;

  constructor(public router: Router, private searchPostService: SearchPostService) {}

  public ngAfterViewInit(): void {
    this.initSearchBarInputEvent();
  }

  public searchForPost(): void {
    if (this.searchPostService.isSearching) return;
    if (!this.router.url.startsWith('/search')) {
      this.searchPostService.setRedirectUrl(this.router.url);
    }

    if (this.searchInput.nativeElement.value !== '') {
      this.router.navigateByUrl(`search?query=${this.searchInput.nativeElement.value}`);
      this.searchPostService.searchPosts(this.searchInput.nativeElement.value).subscribe((response) => {
        this.searchPostService.searchResults$.next(response);
      });
    } else if (this.searchPostService.redirectUrl) {
      this.router.navigateByUrl(this.searchPostService.redirectUrl);
    }
  }

  private initSearchBarInputEvent(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        filter((e: KeyboardEvent) => e.code === 'Enter' || e.code === 'NumpadEnter'),
        tap(() => this.searchForPost()),
      )
      .subscribe();
  }
}
