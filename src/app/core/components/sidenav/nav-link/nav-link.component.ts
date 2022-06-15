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

  public get outlineOrSolidIcon(): string {
    const solid = this.item.icon.slice(0, -8);
    const outline = this.item.icon;
    return this.router.url.startsWith(this.item.url) ? solid : outline;
  }

  constructor(public router: Router) {}
}
