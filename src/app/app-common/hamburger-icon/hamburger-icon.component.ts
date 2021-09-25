import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fe-hamburger-icon',
  templateUrl: './hamburger-icon.component.html',
  styleUrls: ['./hamburger-icon.component.scss']
})
export class HamburgerIconComponent implements OnInit {
  @Input() isOpen: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
