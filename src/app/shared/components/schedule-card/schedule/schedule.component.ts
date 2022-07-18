import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { subjects } from '@constants/menu-items';
import { MenuItem } from '@models/menu-item';
import { Schedule } from '@models/schedule';

@Component({
  selector: 'fe-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent {
  @Input() public schedule: Schedule;

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
