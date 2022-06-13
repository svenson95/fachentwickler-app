import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { subjects } from '../../../../core/constants/menu-items';
import { MenuItem } from '../../../../core/models/menu-item';
import { Schedule } from '../../../../core/models/schedule';

@Component({
  selector: 'fe-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent {
  @Input() public schedule: Schedule;

  // eslint-disable-next-line class-methods-use-this
  public subjectName = (subject: string): string => {
    const sub = subjects.find((item: MenuItem) => item.url.substring(1) === subject);

    if (sub) {
      return sub.shortTitle;
    }

    if (subject === 'sport') {
      return 'Sport';
    }

    return subject;
  };
}
