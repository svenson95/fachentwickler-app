import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';

import { SidenavService } from '../../services/sidenav.service';

/** @title Responsive sidenav */
@Component({
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.scss']
})
export class PageComponent implements OnInit, AfterViewInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('sidenavContainer') public sidenavContainer: MatSidenavContainer;
  @ViewChild(MatMenuTrigger) actionMenu: MatMenuTrigger;

  searchbarValue: string;
  searchbarFormgroup: FormGroup;
  searchbarHideRequiredControl = new FormControl(false);
  searchbarFloatLabelControl = new FormControl('auto');

  // Breakpoint observers
  isMobile: boolean;
  isLandscape: boolean;
  tinyDisplay: boolean;

  constructor(private fb: FormBuilder,
              private breakpointObserver: BreakpointObserver,
              private changeDetectorRef: ChangeDetectorRef,
              private sidenavService: SidenavService,
              @Inject(DOCUMENT) private document: HTMLDocument
  ) {
    this.searchbarFormgroup = fb.group({
      hideRequired: this.searchbarHideRequiredControl,
      floatLabel: this.searchbarFloatLabelControl
    });
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape
    ]).subscribe(result => {
      if (result.matches) {
        this.isLandscape = this.breakpointObserver.isMatched('(orientation: landscape)');
      }
    });
    breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.Small
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = this.breakpointObserver.isMatched('(max-width: 600px)');
        this.tinyDisplay = this.breakpointObserver.isMatched('(max-width: 350px)');
      }
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  showActions(): void {
    this.actionMenu.openMenu();
  }

  routingScrollRestoration(): void {
    // this.sidenavContainer.scrollable.scrollTo({ left: 0, top: 0 });
  }

  onSideMenuToggled(isOpen: boolean): void {
    if (isOpen) {
      this.document.getElementsByClassName('mat-typography')[0].classList.add('scroll-locked');
    } else {
      this.document.getElementsByClassName('mat-typography')[0].classList.remove('scroll-locked');
    }
  }
}
