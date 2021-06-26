import { Component, AfterViewInit, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { fromEvent } from 'rxjs';
import { delay, distinctUntilChanged, filter, tap } from 'rxjs/operators';

import { UserRole } from '../../models/user';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { LoadingService } from '../../services/loading.service';
import { SidenavService } from '../../services/sidenav.service';
import { SearchPostService } from '../../services/data/search-post.service';
import { ThemeService } from '../../services/theme.service';

import { LogoutDialogComponent } from '../../components/logout-dialog/logout-dialog.component';
import { ImageManagerDialogComponent } from '../../components/image-manager-dialog/image-manager-dialog.component';

@Component({
  selector: 'fe-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements AfterViewInit {

  UserRole = UserRole;
  isLoading: boolean;

  @Input() isMobile;
  @Input() sidenav;
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;

  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    // on mobile mat-menu should close on scroll
    this.menuTrigger.closeMenu();
  }

  constructor(public router: Router,
              public headerService: HeaderService,
              public authService: AuthService,
              public themeService: ThemeService,
              public loadingService: LoadingService,
              private sidenavService: SidenavService,
              public searchPostService: SearchPostService,
              public dialog: MatDialog,
  ) {
    this.loadingService.loading$.pipe(delay(0)).subscribe(
      (status: boolean) => {
        this.isLoading = status;
      }
    );
  }

  ngAfterViewInit(): void {
    this.debounceSearchInput();
  }

  debounceSearchInput(): void {
    if (this.searchInput) {
      fromEvent(this.searchInput.nativeElement, 'keyup')
        .pipe(
          filter((e: KeyboardEvent) => e.code === 'Enter' || e.code === 'NumpadEnter'),
          distinctUntilChanged(),
          tap(ev => {
            this.openSearchView();
          })
        )
        .subscribe();
    }
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

  openSearchView(): void {
    if (!this.router.url.startsWith('/search')) {
      this.searchPostService.setRedirectUrl(this.router.url);
    }

    if (this.searchInput.nativeElement.value !== '' && this.searchInput.nativeElement.value !== undefined) {
      this.router.navigateByUrl('search?query=' + this.searchInput.nativeElement.value);
      this.searchForPost();
    }
  }

  searchForPost(): void {
    if (this.searchInput.nativeElement.value !== '') {
      this.searchPostService.searchPosts(this.searchInput.nativeElement.value).subscribe((response) => {
        this.searchPostService.searchResults$.next(response);
      });
    } else if (this.searchPostService.redirectUrl) {
      this.router.navigateByUrl(this.searchPostService.redirectUrl);
    }
  }

}
