import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fe-state-button',
  templateUrl: './state-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateButtonComponent {

  @Input() isLoading: boolean;
  @Input() type: 'button' | 'submit' | 'reset';
  @Input() disabled: boolean;

  constructor() { }

}
