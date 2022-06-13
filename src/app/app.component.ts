import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { MediaQueryService } from './core/services/media-query.service';
import { SidenavService } from './core/services/sidenav.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'fe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  @HostBinding('class.is-mobile') public get _(): boolean {
    return this.isMobile;
  }

  @HostBinding('class') public get theme(): string {
    return this.themeService.getActiveTheme().name;
  }

  public isMobile: boolean;

  public isTiny: boolean;

  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private sidenavService: SidenavService,
    public themeService: ThemeService,
    public mediaQueryService: MediaQueryService,
  ) {}

  public ngOnInit(): void {
    this.subscription.add(
      this.mediaQueryService.isMobile$.subscribe((v) => {
        this.isMobile = v;
      }),
    );
    this.subscription.add(
      this.mediaQueryService.isTiny$.subscribe((v) => {
        this.isTiny = v;
      }),
    );
    this.subscription.add(
      this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
        this.elementRef.nativeElement.querySelector('.mat-sidenav-content').scrollTo(0, 0);
        if (this.isMobile) this.sidenavService.close();
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  public onSideMenuToggled(isOpen: boolean): void {
    if (isOpen && this.isMobile) {
      this.renderer.addClass(document.body, 'scroll-locked');
    } else {
      this.renderer.removeClass(document.body, 'scroll-locked');
    }
  }
}
