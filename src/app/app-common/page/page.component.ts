import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

import { SidenavService } from '../../services/sidenav.service';
import { ThemeService } from '../../services/theme.service';
import { MediaQueryService } from '../../services/media-query.service';

/** @title Responsive sidenav */
@Component({
  selector: 'fe-page',
  templateUrl: 'page.component.html'
})
export class PageComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('sidenavContainer') public sidenavContainer: MatSidenavContainer;
  @ViewChild(MatMenuTrigger) actionMenu: MatMenuTrigger;

  isMobile: boolean;
  isMobile$: Subscription;

  constructor(private sidenavService: SidenavService,
              public themeService: ThemeService,
              public router: Router,
              private elementRef: ElementRef,
              private renderer: Renderer2,
              private mediaQueryService: MediaQueryService
  ) {}

  ngOnInit(): void {
    this.isMobile$ = this.mediaQueryService.isMobile$.subscribe(value => this.isMobile = value);
  }

  ngOnDestroy(): void {
    this.isMobile$.unsubscribe();
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
    if (!this.isCurriculumPage()) {
      if (this.isMobile) {
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

  onSideMenuToggled(isOpen: boolean): void {
    if (isOpen && this.isMobile) {
      this.renderer.addClass(document.body, 'scroll-locked');
    } else {
      this.renderer.removeClass(document.body, 'scroll-locked');
    }
  }

  isCurriculumPage(): boolean {
    return this.router.url.startsWith('/lehrplan');
  }
}
