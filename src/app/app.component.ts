import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {OverlayContainer} from '@angular/cdk/overlay';
import {ViewportScroller} from '@angular/common';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
// import {slideInAnimation} from './app-common/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  // animations: [
  //   slideInAnimation
  // ]
})
export class AppComponent implements OnDestroy {
  title = 'fiappy-app';
  themeColor: 'dark' | 'light' = 'dark';
  isDark = true;

  mobileQuery: MediaQueryList;
  MOBILE_QUERY_LISTENER: () => void;
  TINY_DISPLAY_LISTENER: () => void;
  tinyDisplay: MediaQueryList;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private media: MediaMatcher,
              private overlayContainer: OverlayContainer,
              private router: Router,
              private viewportScroller: ViewportScroller
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.tinyDisplay = media.matchMedia('(max-width: 350px)');
    this.MOBILE_QUERY_LISTENER = () => changeDetectorRef.detectChanges();
    this.TINY_DISPLAY_LISTENER = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.MOBILE_QUERY_LISTENER);

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.viewportScroller.scrollToPosition([0, 0]));
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.MOBILE_QUERY_LISTENER);
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.overlayContainer.getContainerElement().classList.add('light-theme');
    } else {
      this.overlayContainer
        .getContainerElement()
        .classList.remove('light-theme');
    }
  }
}
