import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Schedule } from '../../../models/schedule';

@Component({
  selector: 'fe-schedule-card',
  templateUrl: './schedule-card.component.html',
  styleUrls: ['./schedule-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleCardComponent {
  @Input() public schedule: Schedule;
}
