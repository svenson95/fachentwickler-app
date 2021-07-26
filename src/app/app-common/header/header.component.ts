import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { delay } from 'rxjs/operators';

import { UserRole } from '../../models/user';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { LoadingService } from '../../services/loading.service';
import { SidenavService } from '../../services/sidenav.service';
import { ThemeService } from '../../services/theme.service';

import { LogoutDialogComponent } from '../../components/dialogs/logout-dialog/logout-dialog.component';
import { ImageManagerDialogComponent } from '../../components/dialogs/image-manager-dialog/image-manager-dialog.component';

@Component({
  selector: 'fe-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  isLoading: boolean;

  @Input() isMobile;
  @Input() sidenav;
  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;

  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    // on mobile mat-menu should close on scroll
    this.menuTrigger.closeMenu();
  }

  constructor(public router: Router,
              public headerService: HeaderService,
              public authService: AuthService,
              public loadingService: LoadingService,
              private sidenavService: SidenavService
  ) {
    this.loadingService.loading$.pipe(delay(0)).subscribe(
      (status: boolean) => this.isLoading = status
    );
  }

  closeSidenav(): void {
    if (this.sidenavService.isOpen() && this.isMobile.matches) {
      this.sidenavService.close();
    }
  }

  goToSubject(): void {
    const subjectUrl = this.router.url.substring(0, this.router.url.indexOf('/', 2));
    if (subjectUrl && this.router.url !== subjectUrl) {
      this.router.navigateByUrl(subjectUrl);
    }
  }

}
