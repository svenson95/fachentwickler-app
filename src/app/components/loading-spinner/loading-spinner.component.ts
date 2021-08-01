import { Component, Input } from '@angular/core';

@Component({
  selector: 'fe-loading-spinner',
  templateUrl: './loading-spinner.component.html'
})
export class LoadingSpinnerComponent {

  @Input() size = 30;
  @Input() strokeWidth = 2;

  constructor() { }

}
