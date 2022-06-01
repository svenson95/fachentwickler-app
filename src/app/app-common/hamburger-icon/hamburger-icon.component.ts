import { Component, Input } from '@angular/core';

@Component({
  selector: 'fe-hamburger-icon',
  templateUrl: './hamburger-icon.component.html',
  styleUrls: ['./hamburger-icon.component.scss'],
})
export class HamburgerIconComponent {
  @Input() public isOpen: boolean;
}
