import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Theme, UserRole } from '@models/user';
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
export class HeaderMenuComponent implements OnInit, OnDestroy {
  public UserRole = UserRole;

  public Theme = Theme;

  public isMobile: boolean;

  private subscription: Subscription = new Subscription();

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
  ) {}

  public ngOnInit(): void {
    this.subscription = this.mediaQuery.isMobile$.subscribe((value) => {
      this.isMobile = value;
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
    });
  }
}
