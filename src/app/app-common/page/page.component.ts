import { AfterViewInit, Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SidenavService } from '../../services/sidenav.service';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { DOCUMENT } from '@angular/common';

/** @title Responsive sidenav */
@Component({
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.scss']
})
export class PageComponent implements OnInit, AfterViewInit {

  @Input('mobileQuery') mobileQuery;
  @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('sidenavContainer') public sidenavContainer: MatSidenavContainer;
  @ViewChild(MatMenuTrigger) actionMenu: MatMenuTrigger;

  searchbarValue: string;
  searchbarFormgroup: FormGroup;
  searchbarHideRequiredControl = new FormControl(false);
  searchbarFloatLabelControl = new FormControl('auto');

  constructor(private fb: FormBuilder,
              private sidenavService: SidenavService,
              @Inject(DOCUMENT) private document: HTMLDocument
  ) {
    this.searchbarFormgroup = fb.group({
      hideRequired: this.searchbarHideRequiredControl,
      floatLabel: this.searchbarFloatLabelControl
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
