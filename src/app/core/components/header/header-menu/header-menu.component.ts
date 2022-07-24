import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

import { Theme, UserData, UserRole } from '@models/user';
import { MediaQueryService } from '@services/media-query.service';
import { ThemeService } from '@services/theme.service';
import { UserService } from '@services/user.service';

import { ImageManagerDialogComponent } from './image-manager-dialog/image-manager-dialog.component';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';

@Component({
  selector: 'fe-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent {
  public UserRole = UserRole;

  public Theme = Theme;

  public userData: UserData;

  public isMobile: boolean;

  @ViewChild(MatMenuTrigger, { static: true })
  public menuTrigger: MatMenuTrigger;

  @HostListener('window:scroll', ['$event'])
  public onScroll(): void {
    if (this.isMobile && this.menuTrigger.menuOpen) this.menuTrigger.closeMenu();
  }

  constructor(
    public router: Router,
    public user: UserService,
    public theme: ThemeService,
    private dialog: MatDialog,
    private mediaQuery: MediaQueryService,
  ) {
    this.user.data$.subscribe((data) => {
      this.userData = data;
    });
    this.mediaQuery.isMobile$.subscribe((value) => {
      this.isMobile = value;
    });
  }

  public openLogoutDialog(): void {
    this.dialog.open(LogoutDialogComponent, {
      restoreFocus: true,
      panelClass: 'logout-modal',
      autoFocus: false,
    });
  }

  public openImageManager(): void {
    this.dialog.open(ImageManagerDialogComponent, {
      restoreFocus: true,
      panelClass: 'image-manager-modal',
      autoFocus: false,
    });
  }
}
