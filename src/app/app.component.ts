import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd , Router} from '@angular/router';
import { filter } from 'rxjs/operators';

import { SidenavService } from './services/sidenav.service';
import { MediaQueryService } from './services/media-query.service';

@Component({
  selector: 'fe-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'fachentwickler-app';
  isMobile: boolean;

  constructor(private router: Router,
              private viewportScroller: ViewportScroller,
              private sidenavService: SidenavService,
              public mediaQueryService: MediaQueryService
  ) {
    this.mediaQueryService.isMobile$.subscribe(value => this.isMobile = value);
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.viewportScroller.scrollToPosition([0, 0]);
        if (this.isMobile) this.sidenavService.close();
      });
  }
}
