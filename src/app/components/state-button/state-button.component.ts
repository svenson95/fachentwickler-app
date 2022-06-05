import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'fe-state-button',
  templateUrl: './state-button.component.html',
  styleUrls: ['./state-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StateButtonComponent {
  @Input() public isLoading: boolean;

  @Input() public type: 'button' | 'submit' | 'reset';

  @Input() public disabled: boolean;
}
