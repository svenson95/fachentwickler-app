import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { languages, myClass, study, subjects } from '../../../core/constants/menu-items';
import { AuthService } from '../../../core/services/auth.service';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'fe-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  public myClass: MenuItem[] = myClass;

  public subjects: MenuItem[] = subjects;

  public study: MenuItem[] = study;

  public language: MenuItem[] = languages;

  constructor(public router: Router, public authService: AuthService) {}
}
