import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
              public router: Router
  ) {
    this.setupComponent();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.isMobile.removeListener(this.IS_MOBILE_LISTENER);
    this.tinyDisplay.removeListener(this.TINY_DISPLAY_LISTENER);
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  /* -- Component Functions -- */
  setupComponent(): void {
    this.searchbarFormgroup = this.formbuilder.group({
      hideRequired: this.searchbarHideRequiredControl,
      floatLabel: this.searchbarFloatLabelControl
    });
    this.isMobile = this.media.matchMedia('(max-width: 600px)');
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
