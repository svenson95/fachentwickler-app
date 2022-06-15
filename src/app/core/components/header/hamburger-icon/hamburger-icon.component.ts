import { Component, Input } from '@angular/core';

@Component({
  selector: 'fe-hamburger-icon',
  template: `
    <div id="hamburger-icon" [class.open]="isOpen">
      <span></span>
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
