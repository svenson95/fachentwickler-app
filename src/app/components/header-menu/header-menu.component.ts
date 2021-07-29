import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Subscription } from 'rxjs';

import { UserRole } from 'src/app/models/user';
import { AuthService } from '../../services/auth/auth.service';
import { ThemeService } from '../../services/theme.service';
import { MediaQueryService } from '../../services/media-query.service';

import { LogoutDialogComponent } from '../dialogs/logout-dialog/logout-dialog.component';
import { ImageManagerDialogComponent } from '../dialogs/image-manager-dialog/image-manager-dialog.component';

@Component({
  selector: 'fe-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit, OnDestroy {

  UserRole = UserRole;
  isMobile: boolean;
  mobileSubscription: Subscription;

  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (this.isMobile) {
      this.menuTrigger.closeMenu();
    }
  }

  constructor(public authService: AuthService,
              public router: Router,
              public dialog: MatDialog,
              public themeService: ThemeService,
              private mediaQueryService: MediaQueryService
  ) { }

  ngOnInit(): void {
    this.mobileSubscription = this.mediaQueryService.isMobile$.subscribe(value => this.isMobile = value);
  }

  ngOnDestroy(): void {
    this.mobileSubscription.unsubscribe();
  }

  async openLogoutDialog(): Promise<void> {
    await this.dialog.open(LogoutDialogComponent, {
      restoreFocus: true,
      panelClass: 'logout-modal',
      autoFocus: false
    });
  }

  async openImageManager(): Promise<void> {
    await this.dialog.open(ImageManagerDialogComponent, {
      restoreFocus: true,
      panelClass: 'image-manager-modal'
    });
  }

}
