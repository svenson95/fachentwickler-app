import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { languages, myClass, study, subjects } from '../../constants/menu-items';
import { MenuItem } from '../../models/menu-item';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'fe-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent {
  public myClass: MenuItem[] = myClass;

  public subjects: MenuItem[] = subjects;

  public study: MenuItem[] = study;

  public language: MenuItem[] = languages;

  constructor(public router: Router, public authService: AuthService) {}
}
