import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Schedule } from '../../../models/schedule';

@Component({
  selector: 'fe-schedule-card',
  templateUrl: './schedule-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleCardComponent implements OnInit {

  @Input() schedule: Schedule;

  constructor() { }

  ngOnInit(): void {
  }

}
