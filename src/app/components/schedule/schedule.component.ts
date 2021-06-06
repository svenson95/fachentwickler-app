import { Component, OnInit } from '@angular/core';

import { subjects } from 'src/data/menu-items';
import { schedule } from '../../../data/schedule';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html'
})
export class ScheduleComponent implements OnInit {

  schedule = schedule;

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
