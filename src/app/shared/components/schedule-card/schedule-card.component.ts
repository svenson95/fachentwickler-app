import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Schedule } from '../../../core/models/schedule';

@Component({
  selector: 'fe-schedule-card',
  templateUrl: './schedule-card.component.html',
  styleUrls: ['./schedule-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleCardComponent {
  @Input() public schedule: Schedule;

  constructor(private pipe: DatePipe) {}

  public get weekRange(): string {
    const begin = this.pipe.transform(this.schedule.weekBegin, 'dd.MM.yyyy');
    const end = this.pipe.transform(this.schedule.weekEnd, 'dd.MM.yyyy');
    return `${begin} bis ${end}`;
  }
}
