import { AfterViewInit, Component, ElementRef, HostBinding, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { MediaQueryService } from '@services/media-query.service';
import { SidenavService } from '@services/sidenav.service';
import { ThemeService } from '@services/theme.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'fe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('matSidenav') public matSidenav: MatSidenav;

  @HostBinding('class.is-mobile') public get _(): boolean {
    return this.isMobile;
  }

  @HostBinding('class') public get activeTheme(): string {
    return this.theme.getActiveTheme().name;
  }

  public isMobile: boolean;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private user: UserService,
    private sidenav: SidenavService,
    private theme: ThemeService,
    private mediaQuery: MediaQueryService,
  ) {
    this.user.restore();
  }

  public ngOnInit(): void {
    this.mediaQuery.isMobile$.subscribe((value) => {
      this.isMobile = value;
    });

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.elementRef.nativeElement.querySelector('.mat-sidenav-content').scrollTo(0, 0);
      if (this.isMobile) this.sidenav.close();
    });
  }

  public ngAfterViewInit(): void {
    this.sidenav.setSidenav(this.matSidenav);
  }

  public onSideMenuToggled(isOpen: boolean): void {
    if (isOpen && this.isMobile) {
      this.renderer.addClass(document.body, 'scroll-locked');
    } else {
      this.renderer.removeClass(document.body, 'scroll-locked');
    }
  }
}
