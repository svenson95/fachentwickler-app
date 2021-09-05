import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from '../../models/menu-item';
import { AuthService } from '../../services/auth/auth.service';
import { study, languages, myClass, subjects } from '../../constants/menu-items';

@Component({
  selector: 'fe-sidenav',
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent {
  myClass: MenuItem[] = myClass;
  subjects: MenuItem[] = subjects;
  study: MenuItem[] = study;
  language: MenuItem[] = languages;

  constructor(public router: Router, public authService: AuthService) {}

}
