import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { SidenavService } from '../../services/sidenav.service';
import { ThemeService } from '../../services/theme.service';
import { MediaQueryService } from '../../services/media-query.service';

@Component({
  selector: 'fe-page',
  templateUrl: 'page.component.html'
})
export class PageComponent implements OnInit, OnDestroy, AfterViewInit {

  isMobile: boolean;
  isTiny: boolean;
  subscription: Subscription = new Subscription();

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private router: Router,
              private renderer: Renderer2,
              private elementRef: ElementRef,
              private sidenavService: SidenavService,
              public themeService: ThemeService,
              public mediaQueryService: MediaQueryService
  ) {}

  ngOnInit(): void {
    this.subscription.add(this.mediaQueryService.isMobile$.subscribe(v => this.isMobile = v));
    this.subscription.add(this.mediaQueryService.isTiny$.subscribe(v => this.isTiny = v));
    this.subscription.add(this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.elementRef.nativeElement.querySelector('.mat-sidenav-content').scrollTo(0, 0);
        if (this.isMobile) this.sidenavService.close();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  onSideMenuToggled(isOpen: boolean): void {
    if (isOpen && this.isMobile) {
      this.renderer.addClass(document.body, 'scroll-locked');
    } else {
      this.renderer.removeClass(document.body, 'scroll-locked');
    }
  }
}
