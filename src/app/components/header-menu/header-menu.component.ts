import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserRole } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';
import { MediaQueryService } from '../../services/media-query.service';
import { ThemeService } from '../../services/theme.service';
import { ImageManagerDialogComponent } from '../dialogs/image-manager-dialog/image-manager-dialog.component';
import { LogoutDialogComponent } from '../dialogs/logout-dialog/logout-dialog.component';

@Component({
  selector: 'fe-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit, OnDestroy {
  public UserRole = UserRole;

  public isMobile: boolean;

  private mobileSubscription: Subscription;

  @ViewChild(MatMenuTrigger, { static: true })
  public menuTrigger: MatMenuTrigger;

  @HostListener('window:scroll', ['$event'])
  public onScroll(): void {
    if (this.isMobile && this.menuTrigger.menuOpen) this.menuTrigger.closeMenu();
  }

  constructor(
    public authService: AuthService,
    public router: Router,
    public dialog: MatDialog,
    public themeService: ThemeService,
    private mediaQueryService: MediaQueryService,
  ) {}

  public ngOnInit(): void {
    this.mobileSubscription = this.mediaQueryService.isMobile$.subscribe((value) => {
      this.isMobile = value;
    });
  }

  public ngOnDestroy(): void {
    this.mobileSubscription.unsubscribe();
  }

  public async openLogoutDialog(): Promise<void> {
    await this.dialog.open(LogoutDialogComponent, {
      restoreFocus: true,
      panelClass: 'logout-modal',
      autoFocus: false,
    });
  }

  public async openImageManager(): Promise<void> {
    await this.dialog.open(ImageManagerDialogComponent, {
      restoreFocus: true,
      panelClass: 'image-manager-modal',
    });
  }
}
