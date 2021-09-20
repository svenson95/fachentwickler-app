import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

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

  constructor(private renderer: Renderer2,
              private sidenavService: SidenavService,
              public themeService: ThemeService,
              public mediaQueryService: MediaQueryService
  ) {}

  ngOnInit(): void {
    this.subscription.add(this.mediaQueryService.isMobile$.subscribe(v => this.isMobile = v));
    this.subscription.add(this.mediaQueryService.isTiny$.subscribe(v => this.isTiny = v));
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
