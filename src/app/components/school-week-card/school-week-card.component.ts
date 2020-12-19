import { Component, Input, OnInit } from '@angular/core';

import { subjects } from '../../../data/menu-items';
import { DataService } from '../../services/data/data.service';
import { SchoolWeek } from '../../models/school-week';

@Component({
  selector: 'app-school-week-card',
  templateUrl: './school-week-card.component.html',
  styleUrls: ['./school-week-card.component.scss']
})
export class SchoolWeekCardComponent implements OnInit {

  @Input() week?: SchoolWeek;
  @Input('is-dashboard-page') isDashboardPage?: boolean;

  currentWeek: number;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.currentWeek = Number(this.week.schoolWeek);
  }

  fullSubjectName = (subject: string) => {
    return subjects.find(el => el.url.substring(1) === subject)?.title;
  }

  getPreviousWeek(): void {
    this.week = undefined;
    this.currentWeek--;
    this.dataService.getSchoolWeek(this.currentWeek).subscribe(response => {
      this.week = response;
    });
  }

  getNextWeek(): void {
    this.week = undefined;
    this.currentWeek++;
    this.dataService.getSchoolWeek(this.currentWeek).subscribe(response => {
      this.week = response;
    });
  }

}
