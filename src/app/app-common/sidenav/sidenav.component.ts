import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item';
import { areas, internal, subjects } from '../../../data/menu-items';
import { SidenavService } from '../../services/sidenav.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  subjectsSection: MenuItem[] = subjects;
  areasSection: MenuItem[] = areas;
  internalSection: MenuItem[] = internal;

  constructor(private sidenavService: SidenavService,
              public breakpointObserver: BreakpointObserver,
              public router: Router
  ) { }

  ngOnInit(): void {
  }

  closeSidebar(): void {
    if (this.sidenavService.isOpen() && this.breakpointObserver.isMatched('(max-width: 600px)')) {
      this.sidenavService.close();
    }
  }

}
