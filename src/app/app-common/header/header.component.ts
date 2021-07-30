import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { LoadingService } from '../../services/loading.service';
import { SidenavService } from '../../services/sidenav.service';
import { MediaQueryService } from '../../services/media-query.service';

@Component({
  selector: 'fe-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  isLoading: boolean;
  isMobile: boolean;
  subscription: Subscription = new Subscription();

  constructor(public router: Router,
              public headerService: HeaderService,
              public authService: AuthService,
              public loadingService: LoadingService,
              public sidenavService: SidenavService,
              private mediaQueryService: MediaQueryService
  ) {
  }

  ngOnInit(): void {
    this.subscription.add(this.mediaQueryService.isMobile$.subscribe(value => this.isMobile = value));
    this.subscription.add(this.loadingService.loading$.pipe(delay(0)).subscribe(value => this.isLoading = value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  goToSubject(): void {
    const subjectUrl = this.router.url.substring(0, this.router.url.indexOf('/', 2));
    if (subjectUrl && this.router.url !== subjectUrl) {
      this.router.navigateByUrl(subjectUrl);
    }
  }

  mobileLogoLink(): string {
    return this.sidenavService.isOpen() ? '/' : (this.authService.isAuthenticated ? '/dashboard' : '/login');
  }
}
