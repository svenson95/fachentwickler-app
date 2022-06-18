import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderService } from '@services/header.service';
import { MediaQueryService } from '@services/media-query.service';
import { SidenavService } from '@services/sidenav.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @HostBinding('class.sidenav--open') public get sidenavOpen(): boolean {
    return this.isMobile && this.sidenav.isOpen();
  }

  public get mobileLogoLink(): string {
    if (this.sidenav.isOpen()) return '/';
    if (this.user.isAuthenticated) return '/dashboard';
    return '/login';
  }

  public isMobile: boolean;

  public isTiny: boolean;

  constructor(
    public router: Router,
    public user: UserService,
    public header: HeaderService,
    public sidenav: SidenavService,
    public mediaQuery: MediaQueryService,
  ) {
    this.mediaQuery.isMobile$.subscribe((response) => {
      this.isMobile = response;
    });

    this.mediaQuery.isTiny$.subscribe((response) => {
      this.isTiny = response;
    });
  }

  public goToSubject(): void {
    const subjectUrl = this.router.url.substring(0, this.router.url.indexOf('/', 2));
    if (subjectUrl && this.router.url !== subjectUrl) {
      this.router.navigateByUrl(subjectUrl);
    }
  }
}
