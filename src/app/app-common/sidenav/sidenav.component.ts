import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MenuItem } from '../../models/menu-item';
import { SidenavService } from '../../services/sidenav.service';
import { AuthService } from '../../services/auth/auth.service';
import { MediaQueryService } from '../../services/media-query.service';
import { study, languages, myClass, subjects } from '../../../data/menu-items';

@Component({
  selector: 'fe-sidenav',
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent implements OnInit, OnDestroy {

  subjectsSection: MenuItem[] = subjects;
  studySection: MenuItem[] = study;
  languageSection: MenuItem[] = languages;
  myClassSection: MenuItem[] = myClass;

  isMobile: boolean;
  isMobile$: Subscription;

  constructor(public router: Router,
              public authService: AuthService,
              private sidenavService: SidenavService,
              private mediaQueryService: MediaQueryService
  ) { }

  ngOnInit(): void {
    this.isMobile$ = this.mediaQueryService.isMobile$.subscribe(value => this.isMobile = value);
  }

  ngOnDestroy(): void {
    this.isMobile$.unsubscribe();
  }

  closeSidebar(): void {
    if (this.isMobile && this.sidenavService.isOpen()) {
      this.sidenavService.close();
    }
  }

}
