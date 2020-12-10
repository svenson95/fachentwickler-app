import { AfterViewInit, Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../../components/logout-dialog/logout-dialog.component';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {

  themeColor: 'dark' | 'light' = 'dark';
  isDark = true;
  loadingSubscription: Subscription;
  isLoading = false;

  @Input('mobileQuery') mobileQuery;
  @Input('searchValue') searchValue;
  @Input('sidenav') sidenav;

  constructor(public router: Router,
              public headerService: HeaderService,
              public authService: AuthService,
              public loadingService: LoadingService,
              public dialog: MatDialog,
              @Inject(DOCUMENT) private document: HTMLDocument
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loadingSubscription = this.loadingService.loading$.pipe().subscribe(
      (status: boolean) => {
        this.isLoading = status;
      }
    );
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

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
