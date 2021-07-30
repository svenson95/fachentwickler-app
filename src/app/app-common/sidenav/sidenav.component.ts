import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from '../../models/menu-item';
import { AuthService } from '../../services/auth/auth.service';
import { study, languages, myClass, subjects } from '../../../data/menu-items';

@Component({
  selector: 'fe-sidenav',
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent {

  subjectsSection: MenuItem[] = subjects;
  studySection: MenuItem[] = study;
  languageSection: MenuItem[] = languages;
  myClassSection: MenuItem[] = myClass;

  constructor(public router: Router, public authService: AuthService) { }

}
