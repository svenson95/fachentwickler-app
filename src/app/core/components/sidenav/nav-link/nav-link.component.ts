import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from '@models/menu-item';

@Component({
  selector: 'fe-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
})
export class NavLinkComponent {
  @Input() public item: MenuItem;

  @Input() public disabled: boolean;

  @Input('router-link') public routerLink: string;

  @Input('href-link') public hrefLink: string;

  constructor(public router: Router) {}

  public isCurrentRoute(route): boolean {
    return this.router.url.startsWith(route);
  }
}
