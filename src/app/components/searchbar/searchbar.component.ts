import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { SearchPostService } from '../../services/data/search-post.service';

@Component({
  selector: 'fe-searchbar',
  templateUrl: './searchbar.component.html'
})
export class SearchbarComponent implements OnInit, AfterViewInit {

  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(public router: Router,
              public searchPostService: SearchPostService) { }

  ngOnInit(): void {
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
