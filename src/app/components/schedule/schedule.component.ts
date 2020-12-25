import { Component, OnInit } from '@angular/core';

import { subjects } from 'src/data/menu-items';
import { schedule } from '../../../data/schedule';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
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
    } else if (subject === 'sp') {
      return 'Sport';
    } else if (subject === 'lf-7-1') {
      return 'LF-7-1';
    } else if (subject === 'lf-7-2') {
      return 'LF-7-2';
    } else {
      return subject;
    }
  }

}
