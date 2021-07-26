import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { UserRole } from 'src/app/models/user';
import { AuthService } from '../../services/auth/auth.service';
import { ThemeService } from '../../services/theme.service';

import { LogoutDialogComponent } from '../dialogs/logout-dialog/logout-dialog.component';
import { ImageManagerDialogComponent } from '../dialogs/image-manager-dialog/image-manager-dialog.component';

@Component({
  selector: 'fe-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  UserRole = UserRole;

  @Input() isMobile;

  constructor(public authService: AuthService,
              public router: Router,
              public dialog: MatDialog,
              public themeService: ThemeService,
  ) { }

  ngOnInit(): void {
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
