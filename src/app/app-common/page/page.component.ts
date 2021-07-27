import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';

import { SidenavService } from '../../services/sidenav.service';
import { ThemeService } from '../../services/theme.service';

/** @title Responsive sidenav */
@Component({
  selector: 'fe-page',
  templateUrl: 'page.component.html'
})
export class PageComponent implements OnInit, OnDestroy, AfterViewInit {

  /* -- Component template variables -- */
  @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('sidenavContainer') public sidenavContainer: MatSidenavContainer;
  @ViewChild(MatMenuTrigger) actionMenu: MatMenuTrigger;

  /* -- Media query variables -- */
  isMobile: MediaQueryList;
  IS_MOBILE_LISTENER: () => void;

  constructor(private breakpointObserver: BreakpointObserver,
              private changeDetectorRef: ChangeDetectorRef,
              private media: MediaMatcher,
              private sidenavService: SidenavService,
              public themeService: ThemeService,
              public router: Router,
              private elementRef: ElementRef,
              private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
    this.setupComponent();
  }

  ngOnDestroy(): void {
    this.isMobile.removeListener(this.IS_MOBILE_LISTENER);
    this.elementRef.nativeElement.querySelector('.mat-sidenav-content')
      .removeEventListener('scroll', this.onScroll.bind(this), true);
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);

    const body = this.elementRef.nativeElement.querySelector('.fe-body');
    if (this.isMobile.matches && body) {
      body.addEventListener('scroll', this.onScroll.bind(this), true);
    } else {
      this.elementRef.nativeElement.querySelector('.mat-sidenav-content')
        .addEventListener('scroll', this.onScroll.bind(this), true);
    }
  }

  onScroll(event: any): any {
    if (!this.isCurriculumPage()) {
      if (this.isMobile.matches) {
        const container = this.elementRef.nativeElement.querySelector('.fe-body');
        if (container.scrollTop > 100  && !container.classList.contains('scrolled')) {
          container.classList.add('scrolled');
        } else if (container.scrollTop < 20) {
          container.classList.remove('scrolled');
        }
      } else {
        const container = this.elementRef.nativeElement.querySelector('.fe-page-container');
        if (event.target.scrollTop > 100 && !container.classList.contains('scrolled')) {
          container.classList.add('scrolled');
        } else if (event.target.scrollTop < 20) {
          container.classList.remove('scrolled');
        }
      }
    }
  }

  /* -- Component Functions -- */
  setupComponent(): void {
    this.isMobile = this.media.matchMedia('(max-width: 820px)');

    this.IS_MOBILE_LISTENER = () => this.changeDetectorRef.detectChanges();
    this.isMobile.addListener(this.IS_MOBILE_LISTENER);
  }

  showActions(): void {
    this.actionMenu.openMenu();
  }

  onSideMenuToggled(isOpen: boolean): void {
    if (isOpen && this.isMobile.matches) {
      this.renderer.addClass(document.body, 'scroll-locked');
    } else {
      this.renderer.removeClass(document.body, 'scroll-locked');
    }
  }

  isCurriculumPage(): boolean {
    return this.router.url.startsWith('/lehrplan');
  }
}
