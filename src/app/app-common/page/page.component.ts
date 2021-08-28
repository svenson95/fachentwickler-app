import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { SidenavService } from '../../services/sidenav.service';
import { ThemeService } from '../../services/theme.service';
import { MediaQueryService } from '../../services/media-query.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'fe-page',
  templateUrl: 'page.component.html'
})
export class PageComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() isMobile: boolean;
  @Input() isTiny: boolean;

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              private sidenavService: SidenavService,
              public router: Router,
              public themeService: ThemeService,
              public mediaQueryService: MediaQueryService,
              public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.querySelector('.mat-sidenav-content')
      .removeEventListener('scroll', this.onScroll.bind(this), true);
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);

    const body = this.elementRef.nativeElement.querySelector('.fe-body');
    if (this.isMobile && body) {
      body.addEventListener('scroll', this.onScroll.bind(this), true);
    } else {
      this.elementRef.nativeElement.querySelector('.mat-sidenav-content')
        .addEventListener('scroll', this.onScroll.bind(this), true);
    }
  }

  onScroll(event: any): any {
    if (this.isMobile) {
      this.setScrolled('.fe-body');
    } else {
      this.setScrolled('.page-container', event.target);
    }
  }

  setScrolled(selector, element = null): void {
    const container = this.elementRef.nativeElement.querySelector(selector);
    const el = element ? element : container;
    if (el.classList.contains('weeks-container')) return;

    if (el.scrollTop > 10 && !container.classList.contains('scrolled')) {
      container.classList.add('scrolled');
    } else if (el.scrollTop <= 10) {
      container.classList.remove('scrolled');
    }
  }

  onSideMenuToggled(isOpen: boolean): void {
    if (isOpen && this.isMobile) {
      this.renderer.addClass(document.body, 'scroll-locked');
    } else {
      this.renderer.removeClass(document.body, 'scroll-locked');
    }
  }
}
