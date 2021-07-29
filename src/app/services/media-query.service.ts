import { Injectable } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { fromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaQueryService {

  isMobile$: Observable<boolean>;

  constructor(private media: MediaMatcher) {
    this.isMobile$ = fromEvent(window, 'resize')
      .pipe(
        startWith(this.isMobile()),
        map(() => this.isMobile()),
        distinctUntilChanged(),
        shareReplay(1)
      );
  }

  private isMobile(): boolean {
    return this.media.matchMedia('(max-width: 800px)').matches;
  }

}
