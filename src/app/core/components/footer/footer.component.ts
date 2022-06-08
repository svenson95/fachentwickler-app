import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fe-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public router: Router) {}
}