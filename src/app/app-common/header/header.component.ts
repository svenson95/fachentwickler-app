import { Component, Input, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { SidenavService } from '../../services/sidenav.service';


@Component({
  selector: 'fe-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() isMobile: boolean;
  @Input() isTiny: boolean;

  @HostListener('window:scroll', [])
  onWindowScroll(event: Event): void {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById('header-toolbar').classList.add('scrolled');
    } else {
      document.getElementById('header-toolbar').classList.remove('scrolled');
    }
  }

  constructor(public router: Router,
              public headerService: HeaderService,
              public authService: AuthService,
              public sidenavService: SidenavService
  ) {}

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
