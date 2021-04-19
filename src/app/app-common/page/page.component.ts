import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';

import { SidenavService } from '../../services/sidenav.service';

/** @title Responsive sidenav */
@Component({
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy, AfterViewInit {

  /* -- Component template variables -- */
  @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('sidenavContainer') public sidenavContainer: MatSidenavContainer;
  @ViewChild(MatMenuTrigger) actionMenu: MatMenuTrigger;

  /* -- Post search variables -- */
  searchbarFormgroup: FormGroup;
  searchbarHideRequiredControl = new FormControl(false);
  searchbarFloatLabelControl = new FormControl('auto');

  /* -- Media query variables -- */
  isMobile: MediaQueryList;
  tinyDisplay: MediaQueryList;
  IS_MOBILE_LISTENER: () => void;
  TINY_DISPLAY_LISTENER: () => void;

  constructor(private formbuilder: FormBuilder,
              private breakpointObserver: BreakpointObserver,
              private changeDetectorRef: ChangeDetectorRef,
              private media: MediaMatcher,
              private sidenavService: SidenavService,
              public router: Router,
              private elementRef: ElementRef
  ) {
  }

  ngOnInit(): void {
    this.setupComponent();
  }

  ngOnDestroy(): void {
    this.isMobile.removeListener(this.IS_MOBILE_LISTENER);
    this.tinyDisplay.removeListener(this.TINY_DISPLAY_LISTENER);
    this.elementRef.nativeElement.querySelector('.mat-sidenav-content')
      .removeEventListener('scroll', this.onScroll.bind(this), true);
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);

    const body = this.elementRef.nativeElement.querySelector('.fia-body');
    if (this.isMobile.matches && body) {
      body.addEventListener('scroll', this.onScroll.bind(this), true);
    } else {
      this.elementRef.nativeElement.querySelector('.mat-sidenav-content')
        .addEventListener('scroll', this.onScroll.bind(this), true);
    }
  }

  onScroll(event: any): any {
    if (this.isMobile.matches) {
      const mobileScrollableContent = this.elementRef.nativeElement.querySelector('.fia-body');
      if (mobileScrollableContent.scrollTop > 150) {
        mobileScrollableContent.classList.add('scrolled');
      } else if (mobileScrollableContent.scrollTop < 10) {
        mobileScrollableContent.classList.remove('scrolled');
      }
    } else {
      if (event.target.scrollTop > 150) {
        this.elementRef.nativeElement.querySelector('.fia-header').classList.add('scrolled');
      } else if (event.target.scrollTop < 10) {
        this.elementRef.nativeElement.querySelector('.fia-header').classList.remove('scrolled');
      }
    }
  }

  /* -- Component Functions -- */
  setupComponent(): void {
    this.searchbarFormgroup = this.formbuilder.group({
      hideRequired: this.searchbarHideRequiredControl,
      floatLabel: this.searchbarFloatLabelControl
    });
    this.isMobile = this.media.matchMedia('(max-width: 820px)');
    this.tinyDisplay = this.media.matchMedia('(max-width: 350px)');

    this.IS_MOBILE_LISTENER = () => this.changeDetectorRef.detectChanges();
    this.TINY_DISPLAY_LISTENER = () => this.changeDetectorRef.detectChanges();
    this.isMobile.addListener(this.IS_MOBILE_LISTENER);
    this.tinyDisplay.addListener(this.TINY_DISPLAY_LISTENER);
  }

  showActions(): void {
    this.actionMenu.openMenu();
  }

  onSideMenuToggled(isOpen: boolean): void {
    if (isOpen) {
      document.getElementsByClassName('mat-typography')[0].classList.add('scroll-locked');
    } else {
      document.getElementsByClassName('mat-typography')[0].classList.remove('scroll-locked');
    }
  }
}
