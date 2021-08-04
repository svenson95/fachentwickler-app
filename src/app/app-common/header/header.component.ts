import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'fe-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() isLoading: boolean;
  @Input() isMobile: boolean;
  @Input() isTiny: boolean;

  constructor(public router: Router,
              public headerService: HeaderService,
              public authService: AuthService,
              public sidenavService: SidenavService
  ) {
  }

  ngOnInit(): void {
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
