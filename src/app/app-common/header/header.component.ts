import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../../components/logout-dialog/logout-dialog.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  themeColor: 'dark' | 'light' = 'dark';
  isDark = true;

  @Input('mobileQuery') mobileQuery;
  @Input('searchValue') searchValue;
  @Input('sidenav') sidenav;

  constructor(public router: Router,
              public headerService: HeaderService,
              public authService: AuthService,
              public dialog: MatDialog,
              @Inject(DOCUMENT) private document: HTMLDocument
  ) {}

  ngOnInit(): void {}

  openLogoutDialog(): void {
    this.dialog.open(LogoutDialogComponent, { restoreFocus: true });
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.document.getElementsByClassName('mat-typography')[0].classList.remove('light-theme');
    } else {
      this.document.getElementsByClassName('mat-typography')[0].classList.add('light-theme');
    }
  }

}
