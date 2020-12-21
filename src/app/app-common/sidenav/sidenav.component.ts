import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item';
import { areas, myClass, subjects } from '../../../data/menu-items';
import { SidenavService } from '../../services/sidenav.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  subjectsSection: MenuItem[] = subjects;
  areasSection: MenuItem[] = areas;
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
