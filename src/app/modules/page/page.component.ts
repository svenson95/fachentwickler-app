import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SidenavService } from '../../services/sidenav.service';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';

/** @title Responsive sidenav */
@Component({
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.scss']
})
export class PageComponent implements OnInit, AfterViewInit {

  @Input('theme') theme;
  @Input('toggleTheme') toggleTheme;
  @Input('mobileQuery') mobileQuery;
  @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('sidenavContainer') public sidenavContainer: MatSidenavContainer;
  @ViewChild(MatMenuTrigger) actionMenu: MatMenuTrigger;

  darkMode = true;

  searchbarValue: string;
  searchbarFormgroup: FormGroup;
  searchbarHideRequiredControl = new FormControl(false);
  searchbarFloatLabelControl = new FormControl('auto');

  constructor(private fb: FormBuilder,
              private sidenavService: SidenavService
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
}
