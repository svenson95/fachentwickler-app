import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@services/auth.service';
import { HeaderService } from '@services/header.service';
import { SidenavService } from '@services/sidenav.service';

@Component({
  selector: 'fe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() public isMobile: boolean;

  @Input() public isTiny: boolean;

  constructor(
    public router: Router,
    public headerService: HeaderService,
    public authService: AuthService,
    public sidenavService: SidenavService,
  ) {}

  public goToSubject(): void {
    const subjectUrl = this.router.url.substring(0, this.router.url.indexOf('/', 2));
    if (subjectUrl && this.router.url !== subjectUrl) {
      this.router.navigateByUrl(subjectUrl);
    }
  }

  public mobileLogoLink(): string {
    if (this.sidenavService.isOpen()) {
      return '/';
    }

    if (this.authService.isAuthenticated) {
      return '/dashboard';
    }

    return '/login';
  }
}
