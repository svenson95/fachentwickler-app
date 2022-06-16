import { Component } from '@angular/core';
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
  public get mobileLogoLink(): string {
    if (this.sidenav.isOpen()) return '/';
    if (this.user.isAuthenticated) return '/dashboard';
    return '/login';
  }

  constructor(
    public router: Router,
    public user: UserService,
    public header: HeaderService,
    public sidenav: SidenavService,
    public mediaQuery: MediaQueryService,
  ) {}

  public goToSubject(): void {
    const subjectUrl = this.router.url.substring(0, this.router.url.indexOf('/', 2));
    if (subjectUrl && this.router.url !== subjectUrl) {
      this.router.navigateByUrl(subjectUrl);
    }
  }
}
