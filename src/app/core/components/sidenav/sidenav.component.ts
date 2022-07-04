import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { myClass, subjects, basics, languages } from '@constants/menu-items';
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

  public basics: MenuItem[] = basics;

  public languages: MenuItem[] = languages;

  constructor(public router: Router, public user: UserService) {}
}
