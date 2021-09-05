import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'fe-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent {
  @Input() item: MenuItem;
  @Input('router-link') routerLink: string;
  @Input('href-link') hrefLink: string;

  constructor(public router: Router) { }

}
