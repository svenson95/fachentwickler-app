import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

import { MenuItem } from '../../models/menu-item';
import { SidenavService } from '../../services/sidenav.service';
import { AuthService } from '../../services/auth/auth.service';
import { study, languages, myClass, subjects } from '../../../data/menu-items';

@Component({
  selector: 'fe-sidenav',
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent implements OnInit {

  subjectsSection: MenuItem[] = subjects;
  studySection: MenuItem[] = study;
  languageSection: MenuItem[] = languages;
  myClassSection: MenuItem[] = myClass;

  constructor(private sidenavService: SidenavService,
              public breakpointObserver: BreakpointObserver,
              public router: Router,
              public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  closeSidebar(): void {
    if (this.breakpointObserver.isMatched('(max-width: 600px)')) {
      if (this.sidenavService.isOpen()) {
        this.sidenavService.close();
      }
    }
  }

}
