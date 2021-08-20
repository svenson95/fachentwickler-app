import { Component, ElementRef } from '@angular/core';
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
              private sidenavService: SidenavService,
              public mediaQueryService: MediaQueryService,
              private elementRef: ElementRef
  ) {
    this.mediaQueryService.isMobile$.subscribe(value => this.isMobile = value);
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.elementRef.nativeElement.querySelector('.mat-sidenav-content').scrollTo(0, 0);
        if (this.isMobile) this.sidenavService.close();
      });
  }
}
