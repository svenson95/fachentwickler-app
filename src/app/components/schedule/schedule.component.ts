import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { subjects } from 'src/app/data/menu-items';
import { MenuItem } from '../../models/menu-item';
import { Schedule } from '../../models/schedule';

@Component({
  selector: 'fe-schedule',
  templateUrl: './schedule.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent implements OnInit {

  @Input() schedule: Schedule;

  constructor() { }

  ngOnInit(): void {
  }

  /* -- Component functions -- */
  subjectName = subject => {
    const sub = subjects.find((item: MenuItem) => item.url.substring(1) === subject);
    if (sub) {
      return sub.shortTitle;
    } else if (subject === 'sport') {
      return 'Sport';
    } else {
      return subject;
    }
  }

}
