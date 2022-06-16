import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { languages, myClass, study, subjects } from '@constants/menu-items';
import { MenuItem } from '@models/menu-item';
import { UserService } from '@services/user.service';

@Component({
  selector: 'nav.sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  public myClass: MenuItem[] = myClass;

  public subjects: MenuItem[] = subjects;

  public study: MenuItem[] = study;

  public language: MenuItem[] = languages;

  constructor(public router: Router, public user: UserService) {}
}
