import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fe-button-state',
  templateUrl: './button-state.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonStateComponent implements OnInit {

  @Input() isLoading: boolean;
  @Input() type: 'button' | 'submit' | 'reset';
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
