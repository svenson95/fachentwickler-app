import { Component, Input } from '@angular/core';

@Component({
  selector: 'fe-answer-indicator',
  templateUrl: './answer-indicator.component.html',
  styleUrls: ['./answer-indicator.component.scss'],
})
export class AnswerIndicatorComponent {
  @Input() public checkmark: boolean;

  @Input() public cross: boolean;
}
