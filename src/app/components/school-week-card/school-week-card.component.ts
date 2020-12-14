import { Component, Input, OnInit } from '@angular/core';
import { SchoolWeek } from '../../models/school-week';
import { getWeekday } from '../../app-common/getWeekday';
import { transformDate } from '../../app-common/transform-date';
import { subjects } from '../../../data/menu-items';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-school-week-card',
  templateUrl: './school-week-card.component.html',
  styleUrls: ['./school-week-card.component.scss']
})
export class SchoolWeekCardComponent implements OnInit {

  @Input() week?: SchoolWeek;
  @Input('is-dashboard-page') isDashboardPage?: boolean;

  getWeekday = getWeekday;
  transformDate = transformDate;
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
