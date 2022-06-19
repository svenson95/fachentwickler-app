import { Component, Input } from '@angular/core';

@Component({
  selector: 'fe-hamburger-icon',
  template: `
    <div [class.open]="this.isOpen">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `,
  styleUrls: ['./hamburger-icon.component.scss'],
})
export class HamburgerIconComponent {
  @Input() public isOpen: boolean;
}
