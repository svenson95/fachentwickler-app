import { Component, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { SidenavService } from '../../services/sidenav.service';
import { LoadingService } from '../../services/loading.service';


@Component({
  selector: 'fe-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() isMobile: boolean;
  @Input() isTiny: boolean;
  isLoading: boolean;
  subscription: Subscription = new Subscription();

  constructor(public router: Router,
              public headerService: HeaderService,
              public authService: AuthService,
              public sidenavService: SidenavService,
              private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
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
