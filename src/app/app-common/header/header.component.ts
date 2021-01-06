import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { LoadingService } from '../../services/loading.service';
import { SidenavService } from '../../services/sidenav.service';
import { SearchPostService } from '../../services/data/search-post.service';
import { LogoutDialogComponent } from '../../components/logout-dialog/logout-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {

  loadingSubscription: Subscription;
  isLoading = false;

  @Input() isMobile;
  @Input('sidenav') sidenav;

  constructor(public router: Router,
              public headerService: HeaderService,
              public authService: AuthService,
              public loadingService: LoadingService,
              private sidenavService: SidenavService,
              public searchPostService: SearchPostService,
              public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loadingSubscription = this.loadingService.loading$.pipe(delay(0)).subscribe(
      (status: boolean) => {
        this.isLoading = status;
      }
    );
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  async openLogoutDialog(): Promise<void> {
    await this.dialog.open(LogoutDialogComponent, {
      restoreFocus: true,
      panelClass: 'logout-modal'
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

  openSearchView(event): void {
    if (event.target.value !== '') {
      this.router.navigateByUrl('search/' + event.target.value);
    } else {
      this.router.navigateByUrl('search');
    }
  }

  searchForPost(event): void {
    if (event.target.value !== '' && !this.isLoading) {
      this.searchPostService.searchPosts(this.searchPostService.searchValue).subscribe((response) => {
        this.searchPostService.searchResults$.next(response);
      });
    } else {
      this.router.navigateByUrl('search');
    }
  }

  changeRoute(event): void {
    this.searchPostService.searchValue = event.target.value;
    this.router.navigateByUrl('search' + (event.target.value !== '' ? `/${event.target.value}` : ''));

    if (event.target.value !== '' && !this.isLoading) {
      this.searchPostService.searchPosts(this.searchPostService.searchValue).subscribe((response) => {
        this.searchPostService.searchResults$.next(response);
      });
    }
  }

}
